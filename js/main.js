// ── Typewriter ──
// Insère les éléments (br, span…) immédiatement,
// tape les nœuds texte caractère par caractère.
// Le curseur reste dans le parent racine ; on utilise
// appendChild quand le parent courant n'est pas le conteneur du curseur.
function typeWriter(element, speed, onDone) {
  const original = element.cloneNode(true);
  element.innerHTML = '';

  const cursor = document.createElement('span');
  cursor.className = 'tw-cursor';
  element.appendChild(cursor);

  const queue = [];

  function buildQueue(source, targetParent) {
    for (const child of source.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        if (child.textContent.length > 0) {
          queue.push({ type: 'text', content: child.textContent, parent: targetParent });
        }
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const clone = document.createElement(child.tagName.toLowerCase());
        for (const attr of child.attributes) clone.setAttribute(attr.name, attr.value);
        queue.push({ type: 'node', node: clone, parent: targetParent });
        buildQueue(child, clone);
      }
    }
  }

  buildQueue(original, element);

  let qi = 0;
  let ci = 0;

  function insertBefore(node, parent) {
    // N'utilise insertBefore que si le curseur est enfant direct du parent
    if (cursor.parentNode === parent) {
      parent.insertBefore(node, cursor);
    } else {
      parent.appendChild(node);
    }
  }

  function tick() {
    if (qi >= queue.length) {
      cursor.remove();
      if (onDone) onDone();
      return;
    }

    const item = queue[qi];

    if (item.type === 'node') {
      insertBefore(item.node, item.parent);
      qi++;
      tick();
      return;
    }

    if (item.type === 'text') {
      if (ci === 0) {
        item.textNode = document.createTextNode('');
        insertBefore(item.textNode, item.parent);
      }
      item.textNode.textContent += item.content[ci];
      ci++;
      if (ci >= item.content.length) { ci = 0; qi++; }
      setTimeout(tick, speed);
    }
  }

  tick();
}

// ── Count-up ──
function countUp(el, target, duration) {
  const start = performance.now();
  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ── Scroll observer commun ──
// Déclenche fade-in ET typewriter quand l'élément entre dans le viewport.
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    scrollObserver.unobserve(entry.target);

    const el = entry.target;

    if (el.classList.contains('fade-in')) {
      el.classList.add('visible');
    }

    if (el.dataset.typewriter) {
      const speed = parseInt(el.dataset.typewriter, 10) || 40;
      setTimeout(() => typeWriter(el, speed), el.classList.contains('fade-in') ? 200 : 0);
    }

    if (el.dataset.count) {
      const target = parseInt(el.dataset.count, 10);
      // Durée proportionnelle : 22 → 1s, 2026 → 1.8s, plafonné à 2s
      const duration = Math.min(600 + target * 0.4, 2000);
      const delay = el.classList.contains('fade-in') ? 200 : 0;
      setTimeout(() => countUp(el, target, duration), delay);
    }
  });
}, { threshold: 0.25 });

// Enregistre tous les éléments fade-in
document.querySelectorAll('.fade-in').forEach(el => scrollObserver.observe(el));

// Enregistre les cibles typewriter et count-up
document.querySelectorAll('[data-typewriter], [data-count]').forEach(el => scrollObserver.observe(el));
