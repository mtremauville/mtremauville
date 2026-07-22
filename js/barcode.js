// ── Barcode scanner — camera decode (html5-qrcode) + Open Food Facts lookup ──
const OFF_API = 'https://world.openfoodfacts.org/api/v2/product/';
const OFF_FIELDS = 'product_name,brands,quantity,image_front_url,nutriscore_grade,categories,nova_group';
const SCANNER_HISTORY_KEY = 'barcode-scanner-history';
const SCANNER_HISTORY_MAX = 8;

function scannerLang() { return (typeof currentLang !== 'undefined') ? currentLang : 'fr'; }

function initBarcodeScanner() {
  const readerEl    = document.getElementById('scanner-reader');
  const placeholder = document.getElementById('scanner-placeholder');
  const scanLine    = document.getElementById('scanner-scan-line');
  const startBtn    = document.getElementById('scanner-start-btn');
  const stopBtn     = document.getElementById('scanner-stop-btn');
  const errorEl     = document.getElementById('scanner-camera-error');
  const form        = document.getElementById('scanner-manual-form');
  const input       = document.getElementById('scanner-manual-input');
  const resultEl    = document.getElementById('scanner-result');
  const historyEl   = document.getElementById('scanner-history');
  if (!readerEl || !form) return;

  let qrCode = null;
  let cameraRunning = false;
  let lastScannedCode = null;
  let lastScannedAt = 0;
  let lastState = { type: 'idle' };

  input.placeholder = scannerLang() === 'fr' ? 'Ex. 3017620422003' : 'e.g. 3017620422003';

  // ── History (localStorage) ──
  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(SCANNER_HISTORY_KEY)) || []; }
    catch { return []; }
  }

  function saveToHistory(code, product) {
    const history = loadHistory().filter(h => h.code !== code);
    history.unshift({
      code,
      name: product.product_name || code,
      brands: product.brands || '',
      image: product.image_front_url || '',
    });
    localStorage.setItem(SCANNER_HISTORY_KEY, JSON.stringify(history.slice(0, SCANNER_HISTORY_MAX)));
    renderHistory();
  }

  function clearHistory() {
    localStorage.removeItem(SCANNER_HISTORY_KEY);
    renderHistory();
  }

  function renderHistory() {
    const history = loadHistory();
    historyEl.innerHTML = '';
    if (!history.length) return;

    const header = document.createElement('div');
    header.className = 'scanner-history-header';

    const title = document.createElement('div');
    title.className = 'scanner-history-title';
    title.textContent = scannerLang() === 'fr' ? 'Scans récents' : 'Recent scans';

    const clearBtn = document.createElement('button');
    clearBtn.type = 'button';
    clearBtn.className = 'scanner-history-clear';
    clearBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i> ${scannerLang() === 'fr' ? "Effacer l'historique" : 'Clear history'}`;
    clearBtn.addEventListener('click', clearHistory);

    header.append(title, clearBtn);

    const list = document.createElement('div');
    list.className = 'scanner-history-list';

    history.forEach(h => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'history-chip';
      const thumb = document.createElement('span');
      thumb.className = 'history-chip-thumb';
      if (h.image) {
        const img = document.createElement('img');
        img.src = h.image;
        img.alt = '';
        thumb.appendChild(img);
      } else {
        thumb.innerHTML = '<i class="fa-solid fa-barcode"></i>';
      }
      const label = document.createElement('span');
      label.className = 'history-chip-label';
      label.textContent = h.name;
      chip.append(thumb, label);
      chip.addEventListener('click', () => {
        renderProduct(h.code, { product_name: h.name, brands: h.brands, image_front_url: h.image });
        lookupProduct(h.code, /* fromHistory */ true);
      });
      list.appendChild(chip);
    });

    historyEl.append(header, list);
  }

  // ── Result rendering ──
  function clearResult() { resultEl.innerHTML = ''; }

  function renderLoading() {
    lastState = { type: 'loading' };
    resultEl.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'product-card status-message';
    card.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><p>${scannerLang() === 'fr' ? 'Recherche du produit…' : 'Looking up product…'}</p>`;
    resultEl.appendChild(card);
  }

  function renderNotFound(code) {
    lastState = { type: 'notfound', code };
    resultEl.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'product-card status-message';
    const msg = scannerLang() === 'fr'
      ? `Produit introuvable dans Open Food Facts pour le code ${code}.`
      : `No product found in Open Food Facts for code ${code}.`;
    card.innerHTML = `<i class="fa-solid fa-circle-question"></i><p>${msg}</p>`;
    resultEl.appendChild(card);
  }

  function renderError(code) {
    lastState = { type: 'error', code };
    resultEl.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'product-card status-message';
    const msg = scannerLang() === 'fr'
      ? "Impossible de contacter Open Food Facts. Réessaie dans un instant."
      : 'Could not reach Open Food Facts. Try again shortly.';
    card.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i><p>${msg}</p>`;
    resultEl.appendChild(card);
  }

  function nutriGrade(grade) {
    return ['a', 'b', 'c', 'd', 'e'].includes(grade) ? grade : 'unknown';
  }

  function renderProduct(code, product) {
    lastState = { type: 'product', code, product };
    resultEl.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'product-card';

    const imgWrap = document.createElement('div');
    imgWrap.className = 'product-image';
    if (product.image_front_url) {
      const img = document.createElement('img');
      img.src = product.image_front_url;
      img.alt = '';
      imgWrap.appendChild(img);
    } else {
      imgWrap.innerHTML = '<i class="fa-solid fa-box-open"></i>';
    }

    const info = document.createElement('div');
    info.className = 'product-info';

    const name = document.createElement('h3');
    name.textContent = product.product_name || (scannerLang() === 'fr' ? 'Produit sans nom' : 'Unnamed product');

    const brand = document.createElement('p');
    brand.className = 'product-brand';
    brand.textContent = (product.brands || '').split(',')[0].trim();

    const qty = document.createElement('p');
    qty.className = 'product-quantity';
    qty.textContent = product.quantity || '';

    const tags = document.createElement('div');
    tags.className = 'product-tags';
    const grade = nutriGrade(product.nutriscore_grade);
    const nutri = document.createElement('span');
    nutri.className = 'nutri-badge nutri-' + grade;
    nutri.textContent = grade === 'unknown' ? '?' : grade.toUpperCase();
    nutri.title = 'Nutri-Score';
    tags.appendChild(nutri);
    if (product.nova_group) {
      const nova = document.createElement('span');
      nova.className = 'nova-badge';
      nova.textContent = `NOVA ${product.nova_group}/4`;
      tags.appendChild(nova);
    }

    const categories = document.createElement('p');
    categories.className = 'product-categories';
    categories.textContent = (product.categories || '').split(',').slice(0, 3).join(', ');

    const barcode = document.createElement('span');
    barcode.className = 'product-barcode';
    barcode.textContent = (scannerLang() === 'fr' ? 'Code-barres : ' : 'Barcode: ') + code;

    info.append(name, brand, qty, tags, categories, barcode);
    card.append(imgWrap, info);
    resultEl.appendChild(card);
  }

  function lookupProduct(code, fromHistory) {
    if (!fromHistory) renderLoading();
    fetch(`${OFF_API}${code}.json?fields=${OFF_FIELDS}`)
      .then(res => res.json())
      .then(data => {
        if (data.status !== 1) { renderNotFound(code); return; }
        renderProduct(code, data.product);
        saveToHistory(code, data.product);
      })
      .catch(() => renderError(code));
  }

  // ── Camera scanning ──
  function setCameraUiRunning(running) {
    cameraRunning = running;
    startBtn.style.display = running ? 'none' : '';
    stopBtn.style.display  = running ? '' : 'none';
    placeholder.classList.toggle('hidden', running);
    scanLine.classList.toggle('active', running);
  }

  function onScanSuccess(decodedText) {
    const now = Date.now();
    if (decodedText === lastScannedCode && now - lastScannedAt < 4000) return;
    lastScannedCode = decodedText;
    lastScannedAt = now;
    lookupProduct(decodedText);
  }

  function startCamera() {
    errorEl.textContent = '';
    if (typeof Html5Qrcode === 'undefined') {
      errorEl.textContent = scannerLang() === 'fr'
        ? "Le module de scan caméra n'a pas pu se charger."
        : 'The camera scanning module failed to load.';
      return;
    }
    if (!qrCode) qrCode = new Html5Qrcode('scanner-reader', { verbose: false });

    qrCode.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: { width: 250, height: 140 } },
      onScanSuccess,
      () => {}
    ).then(() => {
      setCameraUiRunning(true);
    }).catch(() => {
      errorEl.textContent = scannerLang() === 'fr'
        ? "Caméra indisponible ou accès refusé — utilise la saisie manuelle ci-dessous."
        : 'Camera unavailable or access denied — use manual entry below.';
    });
  }

  function stopCamera() {
    if (!qrCode || !cameraRunning) return;
    qrCode.stop().then(() => {
      setCameraUiRunning(false);
    }).catch(() => setCameraUiRunning(false));
  }

  startBtn.addEventListener('click', startCamera);
  stopBtn.addEventListener('click', stopCamera);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = input.value.trim().replace(/\s+/g, '');
    if (!/^\d{6,14}$/.test(code)) {
      errorEl.textContent = scannerLang() === 'fr'
        ? 'Merci de saisir un code-barres valide (6 à 14 chiffres).'
        : 'Please enter a valid barcode (6 to 14 digits).';
      return;
    }
    errorEl.textContent = '';
    lookupProduct(code);
  });

  // ── Re-render dynamic text on language change ──
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.addEventListener('click', () => {
    input.placeholder = scannerLang() === 'fr' ? 'Ex. 3017620422003' : 'e.g. 3017620422003';
    if (lastState.type === 'notfound') renderNotFound(lastState.code);
    else if (lastState.type === 'error') renderError(lastState.code);
    else if (lastState.type === 'product') renderProduct(lastState.code, lastState.product);
    renderHistory();
  });

  window.addEventListener('beforeunload', () => { if (cameraRunning) stopCamera(); });

  renderHistory();
}

document.addEventListener('DOMContentLoaded', initBarcodeScanner);
