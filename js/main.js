// ── Translations ──
const i18n = {
  fr: {
    'nav.about':          'Qui suis-je',
    'nav.projects':       'Projets',
    'nav.stack':          'Stack',
    'nav.contact':        'Contact',
    'nav.cta':            'Contactez-moi',
    'hero.tag':           'Solutions Engineer · Développeur Full-Stack · AI/LLM',
    'hero.h1':            '22 ans à conseiller la tech,<br><span class="accent">maintenant je la construis.</span>',
    'hero.desc':          "22 ans à expliquer la tech. Depuis 2026, je la construis — et j'aide les entreprises à la livrer à leurs clients.",
    'hero.btn1':          'Voir mes projets',
    'hero.btn2':          'Me contacter →',
    'hero.meta.location': '<i class="fa-solid fa-location-dot"></i> Paris',
    'hero.meta.lang':     '🇫🇷 Français · 🇬🇧 English',
    'about.label':        '01 / À propos',
    'about.h2':           'Du retail tech<br>au code en prod.',
    'about.p1':           "J'ai passé 22 ans chez <strong>FNAC</strong> et <strong>Apple Store</strong> à transformer de la technologie complexe en décisions d'achat pour des milliers de clients. En 2026, j'ai obtenu la certification <strong>Le Wagon AI Software Engineering</strong> (RNCP Niveau 6) et j'ai commencé à construire pour de vrai.",
    'about.p2':           "Je cherche un rôle de <strong>Solutions Engineer / Sales Engineer</strong> où mon double background — développement hands-on + vingt ans d'expertise tech face aux clients — devient un vrai atout.",
    'about.p3':           "Je peux <strong>coder un POC le matin et le démo à un CTO l'après-midi</strong>. C'est le pitch.",
    'stat.label1':        'ans de tech client',
    'stat.label2':        'projets IA en prod',
    'stat.label3':        'Le Wagon AI',
    'projects.label':     '02 / Projets',
    'projects.title':     "Ce que j'ai construit",
    'project1.desc':      "Assistant skincare intelligent — scan de code-barres → analyse INCI → détection de conflits moléculaires → routine générée par IA + chat en streaming.",
    'project2.desc':      "Agent IA de coaching — génère des plans d'entraînement personnalisés avec conseils tactiques.",
    'project3.desc':      "App de reconnaissance de plantes par IA — prends une photo, obtiens l'espèce + conseils d'entretien.",
    'stack.label':        '03 / Stack',
    'stack.title':        'Ce avec quoi je construis',
    'stack.backend':      'Backend',
    'stack.frontend':     'Frontend',
    'stack.ai':           'AI / LLM',
    'stack.tools':        'Outils',
    'contact.label':      '04 / Contact',
    'contact.h2':         'Parlons-en.',
    'contact.p':          'Un projet en tête ? Je suis disponible pour en discuter.',
    'contact.btn':        'Envoyez-moi un message',
    'footer':             '© 2026 Mickaël Tremauville',
  },
  en: {
    'nav.about':          'About me',
    'nav.projects':       'Projects',
    'nav.stack':          'Stack',
    'nav.contact':        'Contact',
    'nav.cta':            'Contact me',
    'hero.tag':           'Solutions Engineer · Full-Stack Developer · AI/LLM',
    'hero.h1':            '22 years advising on tech,<br><span class="accent">now I build it.</span>',
    'hero.desc':          "22 years explaining tech. Since 2026, I build it — and help companies ship it to their customers.",
    'hero.btn1':          'See my projects',
    'hero.btn2':          'Contact me →',
    'hero.meta.location': '<i class="fa-solid fa-location-dot"></i> Paris',
    'hero.meta.lang':     '🇫🇷 French (native) · 🇬🇧 English (fluent)',
    'about.label':        '01 / About',
    'about.h2':           'From retail tech<br>to production code.',
    'about.p1':           "I spent 22 years at <strong>FNAC</strong> and <strong>Apple Store</strong> turning complex technology into purchasing decisions for thousands of customers. In 2026, I earned my <strong>Le Wagon AI Software Engineering</strong> certification (RNCP Level 6) and started building for real.",
    'about.p2':           "I'm looking for a <strong>Solutions Engineer / Sales Engineer</strong> role where my dual background — hands-on development + two decades of customer-facing tech expertise — becomes a real asset.",
    'about.p3':           "I can <strong>code a POC in the morning and demo it to a CTO in the afternoon</strong>. That's the pitch.",
    'stat.label1':        'years in tech sales',
    'stat.label2':        'AI projects shipped',
    'stat.label3':        'Le Wagon AI',
    'projects.label':     '02 / Projects',
    'projects.title':     "What I've built",
    'project1.desc':      "Smart skincare assistant — barcode scan → INCI analysis → molecular conflict detection → AI-generated routine + streaming chat.",
    'project2.desc':      "AI coaching agent — generates personalized training plans with tactical advice.",
    'project3.desc':      "AI plant recognition app — snap a photo, get species identification + care tips.",
    'stack.label':        '03 / Stack',
    'stack.title':        'What I build with',
    'stack.backend':      'Backend',
    'stack.frontend':     'Frontend',
    'stack.ai':           'AI / LLM',
    'stack.tools':        'Tools',
    'contact.label':      '04 / Contact',
    'contact.h2':         "Let's talk.",
    'contact.p':          "Have a project in mind? I'm available to discuss.",
    'contact.btn':        'Send me a message',
    'footer':             '© 2026 Mickaël Tremauville',
  }
};

let currentLang  = localStorage.getItem('lang')  || 'fr';
let currentTheme = localStorage.getItem('theme') || 'light';

// ── Language ──
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = i18n[lang][el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'fr' ? 'EN' : 'FR';
}

// ── Dark mode ──
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

// ── Typewriter ──
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
        if (child.textContent.length > 0)
          queue.push({ type: 'text', content: child.textContent, parent: targetParent });
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const clone = document.createElement(child.tagName.toLowerCase());
        for (const attr of child.attributes) clone.setAttribute(attr.name, attr.value);
        queue.push({ type: 'node', node: clone, parent: targetParent });
        buildQueue(child, clone);
      }
    }
  }

  buildQueue(original, element);

  let qi = 0, ci = 0;

  function insert(node, parent) {
    cursor.parentNode === parent
      ? parent.insertBefore(node, cursor)
      : parent.appendChild(node);
  }

  function tick() {
    if (qi >= queue.length) {
      cursor.remove();
      if (onDone) onDone();
      return;
    }
    const item = queue[qi];
    if (item.type === 'node') {
      insert(item.node, item.parent);
      qi++;
      tick();
      return;
    }
    if (item.type === 'text') {
      if (ci === 0) {
        item.textNode = document.createTextNode('');
        insert(item.textNode, item.parent);
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
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ── Scroll observer ──
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    scrollObserver.unobserve(entry.target);
    const el = entry.target;
    const delay = el.classList.contains('fade-in') ? 200 : 0;

    if (el.classList.contains('fade-in')) el.classList.add('visible');

    if (el.dataset.typewriter)
      setTimeout(() => typeWriter(el, parseInt(el.dataset.typewriter) || 40), delay);

    if (el.dataset.count) {
      const target = parseInt(el.dataset.count);
      setTimeout(() => countUp(el, target, Math.min(600 + target * 0.4, 2000)), delay);
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('.fade-in, [data-typewriter], [data-count]')
  .forEach(el => scrollObserver.observe(el));

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  setLanguage(currentLang);

  document.getElementById('theme-toggle').addEventListener('click', () =>
    setTheme(currentTheme === 'light' ? 'dark' : 'light'));

  document.getElementById('lang-toggle').addEventListener('click', () =>
    setLanguage(currentLang === 'fr' ? 'en' : 'fr'));
});
