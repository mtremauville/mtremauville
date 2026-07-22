// ── Polaroid photobooth — camera capture, filters, polaroid export ──
const POLAROID_FILTERS = [
  { id: 'normal',  css: 'none',                                                          fr: 'Normal', en: 'Normal' },
  { id: 'bw',      css: 'grayscale(1) contrast(1.1)',                                    fr: 'N&B',    en: 'B&W' },
  { id: 'sepia',   css: 'sepia(0.8) contrast(1.05) brightness(1.05)',                     fr: 'Sépia',  en: 'Sepia' },
  { id: 'vintage', css: 'sepia(0.35) saturate(1.4) contrast(0.9) brightness(1.05) hue-rotate(-8deg)', fr: 'Vintage', en: 'Vintage' },
  { id: 'vivid',   css: 'saturate(1.6) contrast(1.15)',                                   fr: 'Vif',    en: 'Vivid' },
  { id: 'cool',    css: 'saturate(1.2) hue-rotate(15deg) brightness(1.05)',               fr: 'Froid',  en: 'Cool' },
  { id: 'noir',    css: 'grayscale(1) contrast(1.4) brightness(0.9)',                      fr: 'Noir',   en: 'Noir' },
  { id: 'pixelate', pixelate: true,                                                        fr: 'Pixel',  en: 'Pixel' },
];

const POLAROID_PHOTO_SIZE = 720;
const POLAROID_MARGIN = 40;
const POLAROID_CAPTION_H = 140;
const POLAROID_PIXELATE_GRID = 40;

function polaroidLang() { return (typeof currentLang !== 'undefined') ? currentLang : 'fr'; }

function initPolaroid() {
  const video        = document.getElementById('camera-video');
  const pixelateCanvas = document.getElementById('pixelate-canvas');
  const placeholder  = document.getElementById('camera-placeholder');
  const flipBtn      = document.getElementById('camera-flip-btn');
  const startBtn      = document.getElementById('camera-start-btn');
  const shutterBtn    = document.getElementById('camera-shutter-btn');
  const errorEl        = document.getElementById('camera-error');
  const filterRow      = document.getElementById('filter-row');
  const cameraWrap      = document.getElementById('camera-wrap');
  const cameraControls  = document.querySelector('.camera-controls');
  const resultEl        = document.getElementById('polaroid-result');
  const photoImgEl      = document.getElementById('polaroid-photo');
  const captionInput    = document.getElementById('polaroid-caption');
  const retakeBtn       = document.getElementById('polaroid-retake-btn');
  const saveBtn         = document.getElementById('polaroid-save-btn');
  const shareBtn        = document.getElementById('polaroid-share-btn');
  const emailBtn        = document.getElementById('polaroid-email-btn');
  const shareNoteEl     = document.getElementById('polaroid-share-note');
  if (!video || !startBtn) return;

  let stream = null;
  let facingMode = 'user';
  let currentFilter = POLAROID_FILTERS[0];
  let capturedDataUrl = null;

  const workCanvas = document.createElement('canvas');
  workCanvas.width = POLAROID_PHOTO_SIZE;
  workCanvas.height = POLAROID_PHOTO_SIZE;
  const workCtx = workCanvas.getContext('2d');

  const pixelateCtx = pixelateCanvas.getContext('2d');
  const tinyLive = document.createElement('canvas');
  tinyLive.width = POLAROID_PIXELATE_GRID;
  tinyLive.height = POLAROID_PIXELATE_GRID;
  const tinyLiveCtx = tinyLive.getContext('2d');
  let pixelateRafId = null;

  const tinyCapture = document.createElement('canvas');
  tinyCapture.width = POLAROID_PIXELATE_GRID;
  tinyCapture.height = POLAROID_PIXELATE_GRID;
  const tinyCaptureCtx = tinyCapture.getContext('2d');

  captionInput.placeholder = polaroidLang() === 'fr' ? 'Écris une légende…' : 'Write a caption…';

  // ── Filters ──
  function applyFilterLive(f) {
    if (f.pixelate) {
      video.style.filter = 'none';
      startPixelatePreview();
    } else {
      stopPixelatePreview();
      video.style.filter = f.css;
    }
  }

  function renderFilterRow() {
    filterRow.innerHTML = '';
    POLAROID_FILTERS.forEach(f => {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'filter-pill' + (f.id === currentFilter.id ? ' active' : '');
      pill.textContent = polaroidLang() === 'fr' ? f.fr : f.en;
      pill.addEventListener('click', () => {
        currentFilter = f;
        applyFilterLive(f);
        renderFilterRow();
      });
      filterRow.appendChild(pill);
    });
  }

  // ── Live pixelate preview ──
  function startPixelatePreview() {
    const rect = cameraWrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const size = Math.max(1, Math.round(rect.width * dpr));
    pixelateCanvas.width = size;
    pixelateCanvas.height = size;
    pixelateCtx.imageSmoothingEnabled = false;

    function loop() {
      if (video.videoWidth) {
        const vw = video.videoWidth, vh = video.videoHeight;
        const side = Math.min(vw, vh);
        const sx = (vw - side) / 2, sy = (vh - side) / 2;
        tinyLiveCtx.save();
        if (facingMode === 'user') {
          tinyLiveCtx.translate(POLAROID_PIXELATE_GRID, 0);
          tinyLiveCtx.scale(-1, 1);
        }
        tinyLiveCtx.drawImage(video, sx, sy, side, side, 0, 0, POLAROID_PIXELATE_GRID, POLAROID_PIXELATE_GRID);
        tinyLiveCtx.restore();
        pixelateCtx.clearRect(0, 0, size, size);
        pixelateCtx.drawImage(tinyLive, 0, 0, size, size);
      }
      pixelateRafId = requestAnimationFrame(loop);
    }
    loop();
    pixelateCanvas.classList.add('active');
    video.classList.add('pixel-hidden');
  }

  function stopPixelatePreview() {
    if (pixelateRafId) {
      cancelAnimationFrame(pixelateRafId);
      pixelateRafId = null;
    }
    pixelateCanvas.classList.remove('active');
    video.classList.remove('pixel-hidden');
  }

  // ── Camera lifecycle ──
  function applyMirror() {
    video.classList.toggle('mirrored', facingMode === 'user');
  }

  function setCameraUiRunning(running) {
    startBtn.style.display = running ? 'none' : '';
    shutterBtn.style.display = running ? '' : 'none';
    flipBtn.style.display = running ? '' : 'none';
    filterRow.style.display = running ? 'flex' : 'none';
    placeholder.classList.toggle('hidden', running);
  }

  function stopCameraStream() {
    stopPixelatePreview();
    if (stream) {
      stream.getTracks().forEach(t => t.stop());
      stream = null;
    }
  }

  function startCamera() {
    errorEl.textContent = '';
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      errorEl.textContent = polaroidLang() === 'fr'
        ? "Ce navigateur ne prend pas en charge l'accès à la caméra."
        : "This browser doesn't support camera access.";
      return;
    }
    navigator.mediaDevices.getUserMedia({ video: { facingMode }, audio: false })
      .then(s => {
        stream = s;
        video.srcObject = s;
        applyMirror();
        applyFilterLive(currentFilter);
        setCameraUiRunning(true);
      })
      .catch(() => {
        errorEl.textContent = polaroidLang() === 'fr'
          ? 'Caméra indisponible ou accès refusé.'
          : 'Camera unavailable or access denied.';
      });
  }

  function flipCamera() {
    facingMode = facingMode === 'user' ? 'environment' : 'user';
    stopCameraStream();
    startCamera();
  }

  // ── Capture ──
  function capturePhoto() {
    const vw = video.videoWidth, vh = video.videoHeight;
    if (!vw || !vh) return;
    const side = Math.min(vw, vh);
    const sx = (vw - side) / 2, sy = (vh - side) / 2;

    workCtx.save();
    workCtx.clearRect(0, 0, POLAROID_PHOTO_SIZE, POLAROID_PHOTO_SIZE);
    workCtx.filter = currentFilter.pixelate ? 'none' : currentFilter.css;
    if (facingMode === 'user') {
      workCtx.translate(POLAROID_PHOTO_SIZE, 0);
      workCtx.scale(-1, 1);
    }
    workCtx.drawImage(video, sx, sy, side, side, 0, 0, POLAROID_PHOTO_SIZE, POLAROID_PHOTO_SIZE);
    workCtx.restore();

    if (currentFilter.pixelate) {
      tinyCaptureCtx.clearRect(0, 0, POLAROID_PIXELATE_GRID, POLAROID_PIXELATE_GRID);
      tinyCaptureCtx.drawImage(workCanvas, 0, 0, POLAROID_PIXELATE_GRID, POLAROID_PIXELATE_GRID);
      workCtx.imageSmoothingEnabled = false;
      workCtx.clearRect(0, 0, POLAROID_PHOTO_SIZE, POLAROID_PHOTO_SIZE);
      workCtx.drawImage(tinyCapture, 0, 0, POLAROID_PHOTO_SIZE, POLAROID_PHOTO_SIZE);
      workCtx.imageSmoothingEnabled = true;
    }

    capturedDataUrl = workCanvas.toDataURL('image/jpeg', 0.92);
    photoImgEl.src = capturedDataUrl;
    showResult();
    stopCameraStream();
  }

  function showResult() {
    cameraWrap.style.display = 'none';
    filterRow.style.display = 'none';
    cameraControls.style.display = 'none';
    resultEl.style.display = 'flex';
  }

  function hideResult() {
    resultEl.style.display = 'none';
    cameraWrap.style.display = '';
    cameraControls.style.display = '';
    captionInput.value = '';
    shareNoteEl.textContent = '';
    startCamera();
  }

  // ── Polaroid export ──
  async function buildFinalBlob() {
    const W = POLAROID_PHOTO_SIZE + POLAROID_MARGIN * 2;
    const H = POLAROID_MARGIN + POLAROID_PHOTO_SIZE + POLAROID_CAPTION_H;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#fbfaf6';
    ctx.fillRect(0, 0, W, H);

    const img = new Image();
    img.src = capturedDataUrl;
    await img.decode();
    ctx.drawImage(img, POLAROID_MARGIN, POLAROID_MARGIN, POLAROID_PHOTO_SIZE, POLAROID_PHOTO_SIZE);

    const caption = captionInput.value.trim();
    if (caption) {
      await document.fonts.load("600 54px Caveat");
      ctx.fillStyle = '#2b2b2b';
      ctx.font = "600 54px 'Caveat', cursive";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(caption, W / 2, POLAROID_MARGIN + POLAROID_PHOTO_SIZE + POLAROID_CAPTION_H / 2, POLAROID_PHOTO_SIZE - 20);
    }

    return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  }

  async function savePhoto() {
    const blob = await buildFinalBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `polaroid-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    return blob;
  }

  async function sharePhoto() {
    const blob = await buildFinalBlob();
    const file = new File([blob], 'polaroid.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'Polaroid' });
        shareNoteEl.textContent = '';
      } catch (err) {
        if (err.name !== 'AbortError') {
          shareNoteEl.textContent = polaroidLang() === 'fr' ? 'Le partage a échoué.' : 'Sharing failed.';
        }
      }
    } else {
      shareNoteEl.textContent = polaroidLang() === 'fr'
        ? 'Le partage direct n\'est pas pris en charge par ce navigateur — utilise "Enregistrer" puis partage la photo manuellement.'
        : 'Direct sharing isn\'t supported by this browser — use "Save" then share the photo manually.';
    }
  }

  async function emailPhoto() {
    await savePhoto();
    const subject = encodeURIComponent(polaroidLang() === 'fr' ? 'Mon polaroid' : 'My polaroid');
    const body = encodeURIComponent(polaroidLang() === 'fr'
      ? "Voici mon polaroid ! (la photo vient d'être téléchargée — n'oublie pas de la joindre à cet email)"
      : "Here's my polaroid! (the photo was just downloaded — don't forget to attach it to this email)");
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    shareNoteEl.textContent = polaroidLang() === 'fr'
      ? "Photo téléchargée — joins-la à l'email qui vient de s'ouvrir."
      : 'Photo downloaded — attach it to the email that just opened.';
  }

  // ── Wiring ──
  startBtn.addEventListener('click', startCamera);
  flipBtn.addEventListener('click', flipCamera);
  shutterBtn.addEventListener('click', capturePhoto);
  retakeBtn.addEventListener('click', hideResult);
  saveBtn.addEventListener('click', savePhoto);
  shareBtn.addEventListener('click', sharePhoto);
  emailBtn.addEventListener('click', emailPhoto);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.addEventListener('click', () => {
    renderFilterRow();
    captionInput.placeholder = polaroidLang() === 'fr' ? 'Écris une légende…' : 'Write a caption…';
  });

  window.addEventListener('beforeunload', stopCameraStream);

  renderFilterRow();
}

document.addEventListener('DOMContentLoaded', initPolaroid);
