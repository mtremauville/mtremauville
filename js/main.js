// ── i18n ──
const i18n = {
  fr: {
    'nav.about':      'Profil',
    'nav.services':   'Services',
    'nav.projects':   'Projets',
    'nav.stack':      'Stack',
    'nav.cta':        'Contactez-moi',

    'hero.available': 'Disponible',
    'hero.h1':        'Je vends la tech.<br><span class="accent-img">Je la contruis aussi.</span>',
    'hero.desc':      "Développeur Fullstack Ruby on Rails &amp; IA, certifié RNCP Niv. 6 (Le Wagon 2026). 22 ans de conseil tech client — je maîtrise le cycle complet et intègre nativement les LLMs.",
    'hero.btn1':      'Mes services',
    'hero.btn2':      'Voir mes projets →',
    'hero.cv':        '<i class="fa-solid fa-file-arrow-down"></i> CV',
    'contact.cv':     '<i class="fa-solid fa-file-arrow-down"></i> Télécharger mon CV',

    'about.h2':      'Profil',
    'about.p1':      "Développeur fullstack Ruby on Rails, certifié RNCP Niveau 6 (Le Wagon Paris, 2026). Maîtrise le cycle complet : modélisation ActiveRecord, API REST, authentification Devise, déploiement en production. Intègre nativement les LLMs via ruby_llm, OpenAI et Claude API — agents IA, traitement d'images, recommandations personnalisées.",
    'about.p2':      "Vingt-deux ans de conseil technique client : une capacité à comprendre un besoin métier, le traduire en specs fonctionnelles et communiquer avec des équipes non-techniques.",
    'about.p3':      "Opérationnel sur un projet client dès le premier jour.",
    'xp1.date':      '2002 — Présent',
    'xp1.role':      'Expert Technique &amp; Conseil Client',
    'xp1.company':   'FNAC',
    'xp1.desc':      "Référent micro-informatique — recueil du besoin client, traduction en solutions accessibles, formation des équipes juniors, pilotage de KPIs commerciaux.",
    'xp2.date':      '2016 — 2017',
    'xp2.role':      'Spécialiste Technique',
    'xp2.company':   'Apple Store',
    'xp2.desc':      "Diagnostic et réparation de composants Apple en environnement certifié. Accompagnement client iOS et macOS.",
    'xp3.date':      '01/2026 — 03/2026',
    'xp3.role':      'Bootcamp AI Software Engineering',
    'xp3.company':   'Le Wagon Paris · RNCP Niveau 6',
    'xp3.desc':      "Formation intensive 9 semaines — Rails, PostgreSQL, JavaScript, Hotwire, API REST, déploiement. Stack IA : ruby_llm, OpenAI API, Claude API, agents IA, Vision AI.",

    'services.title': 'Ce que je propose',
    'service1.title': 'Solutions Engineering',
    'service1.desc':  "Je fais le pont entre vos équipes tech et vos clients. Je comprends un besoin métier, le traduis en specs et le démontre.",
    'service1.f1':    'Démos techniques &amp; pre-sales',
    'service1.f2':    'Proof of Concept sur mesure',
    'service1.f3':    'Accompagnement client post-vente',
    'service2.title': 'Développement Full-Stack',
    'service2.desc':  'Applications web de A à Z — modélisation ActiveRecord, API REST, authentification, déploiement en production.',
    'service2.f1':    'Rails 8 · PostgreSQL · Devise',
    'service2.f2':    'Hotwire · Stimulus JS · JavaScript',
    'service2.f3':    'Déploiement Heroku · Cloudinary',
    'service.badge':  'Le plus demandé',
    'service3.title': 'Intégration IA / LLM',
    'service3.desc':  "Intégrez nativement les LLMs dans vos apps Rails : agents IA, streaming SSE, traitement d'images, recommandations.",
    'service3.f1':    'OpenAI API · Claude API · ruby_llm',
    'service3.f2':    'Streaming SSE · agents autonomes',
    'service3.f3':    'Vision IA · RAG · prompting',

    'projects.title': 'Projets récents',
    'proj.wip':       'En développement actif',
    'project1.desc':  'Compagnon streaming personnel — recherche via TMDB API, navigation Hotwire/Turbo sans rechargement, recommandations IA en cours d\'intégration.',
    'project2.desc':  'Analyseur d\'ingrédients cosmétiques IA — modélisation ActiveRecord des incompatibilités, LLM avec streaming SSE via ruby_llm, déployé Heroku.',
    'project3.desc':  'Reconnaissance de plantes par vision IA — front-end complet, authentification Devise, Git flow en équipe de 4 devs, déployé en production.',

    'stack.title':    'Ma stack',
    'stack.backend':  'Backend',
    'stack.frontend': 'Frontend',
    'stack.ai':       'AI / LLM',
    'stack.tools':    'Outils',

    'contact.h2':  '<span class="accent-img">Travaillons ensemble.</span>',
    'contact.p':   'Un projet, une mission, une démo à construire ? Écrivez-moi.',
    'form.prenom':       'Prénom *',
    'form.nom':          'Nom *',
    'form.email':        'Adresse mail *',
    'form.message':      'Message *',
    'form.send':         'Envoyer le message',
    'form.success':      'Message envoyé ! Je vous répondrai dans les plus brefs délais.',
    'form.error':        "Une erreur s'est produite. Réessayez ou écrivez-moi directement.",
    'form.err.required': 'Ce champ est obligatoire.',
    'form.err.email':    'Adresse mail invalide.',
    'form.err.minlen':   'Minimum 10 caractères.',

    'footer': '© 2026 Mickaël Tremauville · Fullstack Rails · IA/LLM · Solution Builder',
  },
  en: {
    'nav.about':      'Profile',
    'nav.services':   'Services',
    'nav.projects':   'Projects',
    'nav.stack':      'Stack',
    'nav.cta':        'Contact me',

    'hero.available': 'Available',
    'hero.h1':        'I build tech.<br><span class="accent-img">I sell it too.</span>',
    'hero.desc':      'Fullstack Ruby on Rails &amp; AI developer, RNCP Level 6 certified (Le Wagon 2026). 22 years in client-facing tech — I own the full cycle and natively integrate LLMs.',
    'hero.btn1':      'My services',
    'hero.btn2':      'See my projects →',
    'hero.cv':        '<i class="fa-solid fa-file-arrow-down"></i> Resume',
    'contact.cv':     '<i class="fa-solid fa-file-arrow-down"></i> Download my resume',

    'about.h2':      'Profile',
    'about.p1':      "Fullstack Ruby on Rails developer, RNCP Level 6 certified (Le Wagon Paris, 2026). Full-cycle mastery: ActiveRecord modeling, REST APIs, Devise authentication, production deployment. Natively integrates LLMs via ruby_llm, OpenAI and Claude API — AI agents, image processing, personalized recommendations.",
    'about.p2':      "Twenty-two years in client-facing tech: the ability to understand business needs, translate them into functional specs, and communicate with non-technical teams.",
    'about.p3':      "Ready to deliver on a client project from day one.",
    'xp1.date':      '2002 — Present',
    'xp1.role':      'Technical Expert &amp; Client Advisor',
    'xp1.company':   'FNAC',
    'xp1.desc':      "Micro-computing specialist — customer needs assessment, translating complex tech into accessible solutions, junior team mentoring, commercial KPI tracking.",
    'xp2.date':      '2016 — 2017',
    'xp2.role':      'Technical Specialist',
    'xp2.company':   'Apple Store',
    'xp2.desc':      "Apple component diagnostics and repair in a certified environment. iOS and macOS customer support.",
    'xp3.date':      '01/2026 — 03/2026',
    'xp3.role':      'AI Software Engineering Bootcamp',
    'xp3.company':   'Le Wagon Paris · RNCP Level 6',
    'xp3.desc':      "Intensive 9-week program — Rails, PostgreSQL, JavaScript, Hotwire, REST APIs, deployment. AI stack: ruby_llm, OpenAI API, Claude API, AI agents, Vision AI.",

    'services.title': 'What I offer',
    'service1.title': 'Solutions Engineering',
    'service1.desc':  "I bridge your tech teams and your customers. I understand business needs, translate them into specs, and demo them.",
    'service1.f1':    'Technical demos &amp; pre-sales',
    'service1.f2':    'Custom proof of concept',
    'service1.f3':    'Post-sale customer support',
    'service2.title': 'Full-Stack Development',
    'service2.desc':  'Web apps end to end — ActiveRecord modeling, REST API, authentication, production deployment.',
    'service2.f1':    'Rails 8 · PostgreSQL · Devise',
    'service2.f2':    'Hotwire · Stimulus JS · JavaScript',
    'service2.f3':    'Heroku deployment · Cloudinary',
    'service.badge':  'Most requested',
    'service3.title': 'AI / LLM Integration',
    'service3.desc':  'Natively integrate LLMs into your Rails apps: AI agents, SSE streaming, image processing, recommendations.',
    'service3.f1':    'OpenAI API · Claude API · ruby_llm',
    'service3.f2':    'SSE Streaming · autonomous agents',
    'service3.f3':    'Vision AI · RAG · prompting',

    'projects.title': 'Recent projects',
    'proj.wip':       'Actively in development',
    'project1.desc':  'Personal streaming companion — TMDB API search, Hotwire/Turbo navigation without page reload, AI recommendations in progress.',
    'project2.desc':  'AI cosmetic ingredient analyzer — ActiveRecord modeling of incompatibilities, LLM with SSE streaming via ruby_llm, deployed on Heroku.',
    'project3.desc':  'AI plant care — full front-end, Devise auth, Git flow in a 4-dev team, shipped to production.',

    'stack.title':    'My stack',
    'stack.backend':  'Backend',
    'stack.frontend': 'Frontend',
    'stack.ai':       'AI / LLM',
    'stack.tools':    'Tools',

    'contact.h2':  '<span class="accent-img">Let\'s work together.</span>',
    'contact.p':   'A project, a mission, a demo to build? Write to me.',
    'form.prenom':       'First name *',
    'form.nom':          'Last name *',
    'form.email':        'Email address *',
    'form.message':      'Message *',
    'form.send':         'Send message',
    'form.success':      "Message sent! I'll get back to you shortly.",
    'form.error':        'An error occurred. Try again or reach me directly.',
    'form.err.required': 'This field is required.',
    'form.err.email':    'Invalid email address.',
    'form.err.minlen':   'Minimum 10 characters.',

    'footer': '© 2026 Mickaël Tremauville · Fullstack Rails · AI/LLM · Solution Builder',
  }
};

// ── Terminal animation ──
const terminalSequence = {
  fr: [
    { type: 'cmd', text: '$ whoami' },
    { type: 'out', text: 'Mickael Tremauville' },
    { type: 'cmd', text: '$ cat profile.txt' },
    { type: 'out', text: 'Développeur Fullstack Rails · IA/LLM' },
    { type: 'out', text: '22 ans tech client → code en prod' },
    { type: 'out', text: 'RNCP Niv. 6 · Le Wagon Paris 2026' },
    { type: 'cmd', text: '$ ls projets/' },
    { type: 'out', text: 'WatchNext/  GlowrIA/  PokéPlant/' },
    { type: 'cmd', text: '$ cat stack.txt' },
    { type: 'out', text: 'Rails 8 · PostgreSQL · ruby_llm' },
    { type: 'out', text: 'OpenAI API · Claude API · Hotwire' },
    { type: 'cmd', text: '$ git status' },
    { type: 'out', text: 'On branch: open-to-work ✓' },
  ],
  en: [
    { type: 'cmd', text: '$ whoami' },
    { type: 'out', text: 'Mickael Tremauville' },
    { type: 'cmd', text: '$ cat profile.txt' },
    { type: 'out', text: 'Fullstack Rails Developer · AI/LLM' },
    { type: 'out', text: '22y client-facing tech → shipping code' },
    { type: 'out', text: 'RNCP Level 6 · Le Wagon Paris 2026' },
    { type: 'cmd', text: '$ ls projects/' },
    { type: 'out', text: 'WatchNext/  GlowrIA/  PokéPlant/' },
    { type: 'cmd', text: '$ cat stack.txt' },
    { type: 'out', text: 'Rails 8 · PostgreSQL · ruby_llm' },
    { type: 'out', text: 'OpenAI API · Claude API · Hotwire' },
    { type: 'cmd', text: '$ git status' },
    { type: 'out', text: 'On branch: open-to-work ✓' },
  ]
};

let terminalDone = false;

function runTerminal(lang) {
  const body = document.getElementById('terminal-body');
  if (!body) return;
  body.innerHTML = '';
  terminalDone = false;

  const lines = terminalSequence[lang] || terminalSequence.fr;
  const CHAR_SPEED = 38;
  const CMD_PAUSE  = 280;
  const OUT_PAUSE  = 60;

  let cursor = document.createElement('span');
  cursor.className = 'term-cursor';

  function appendLine(className, text) {
    const span = document.createElement('span');
    span.className = `term-line ${className}`;
    span.textContent = text;
    body.appendChild(span);
    body.appendChild(document.createElement('br'));
  }

  function typeCmd(text, cb) {
    const span = document.createElement('span');
    span.className = 'term-line term-cmd';
    body.appendChild(span);
    body.appendChild(cursor);

    let i = 0;
    function tick() {
      if (i < text.length) {
        span.textContent += text[i++];
        setTimeout(tick, CHAR_SPEED + (Math.random() * 18 | 0));
      } else {
        body.appendChild(document.createElement('br'));
        setTimeout(cb, CMD_PAUSE);
      }
    }
    tick();
  }

  function processLines(index) {
    if (index >= lines.length) {
      body.appendChild(cursor);
      terminalDone = true;
      return;
    }

    const line = lines[index];
    if (line.type === 'cmd') {
      typeCmd(line.text, () => processLines(index + 1));
    } else {
      appendLine('term-out', line.text);
      setTimeout(() => processLines(index + 1), OUT_PAUSE);
    }
  }

  setTimeout(() => processLines(0), 400);
}

// ── Theme ──
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentLang  = localStorage.getItem('lang')  || 'fr';

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.innerHTML = theme === 'dark'
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}

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

  if (terminalDone || document.getElementById('terminal-body').children.length === 0) {
    runTerminal(lang);
  }
}

// ── Scroll fade-in observer ──
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    fadeObserver.unobserve(entry.target);
    entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ── Mobile nav hamburger ──
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
    });
  });
}

// ── Navbar scroll shadow ──
function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 10
      ? 'var(--border-h)'
      : 'var(--border)';
  }, { passive: true });
}

// ── Particles ──
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COUNT      = 70;
  const MAX_DIST   = 140;
  const SPEED      = 0.35;

  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function themeColors() {
    const dark = document.documentElement.getAttribute('data-theme') !== 'light';
    return dark
      ? { dot: 'rgba(0,229,195,', line: 'rgba(0,229,195,' }
      : { dot: 'rgba(204,52,45,', line: 'rgba(204,52,45,' };
  }

  function mkParticle() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r:  Math.random() * 1.5 + 0.8,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, mkParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const c = themeColors();

    for (let i = 0; i < COUNT; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = c.dot + '0.55)';
      ctx.fill();

      for (let j = i + 1; j < COUNT; j++) {
        const q  = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = c.line + (0.18 * (1 - d / MAX_DIST)).toFixed(3) + ')';
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => { resize(); }, { passive: true });
}

// ── Contact form ──
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz0euL3IKqC-_sHMq68uWTLerLImDANYjt4BLzCVaroAZZOYKXr0_6U3AK5HY_X2FBhFA/exec';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

function sanitizeInput(str, maxLen) {
  return String(str || '').trim().replace(/[<>"'`]/g, '').slice(0, maxLen);
}

function initContactForm() {
  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('submit-btn');
  const successEl  = document.getElementById('form-success');
  const errorEl    = document.getElementById('form-error-msg');
  const msgArea    = document.getElementById('message');
  const charCount  = document.getElementById('char-count');
  if (!form) return;

  msgArea.addEventListener('input', () => {
    charCount.textContent = msgArea.value.length;
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot — si rempli c'est un bot
    if (document.getElementById('website').value) return;

    const prenom  = sanitizeInput(document.getElementById('prenom').value,  50);
    const nom     = sanitizeInput(document.getElementById('nom').value,     50);
    const email   = sanitizeInput(document.getElementById('email').value,  100);
    const message = sanitizeInput(document.getElementById('message').value, 1000);
    const lang    = currentLang;
    let valid = true;

    function setFieldError(fieldId, msgKey) {
      const errEl  = document.getElementById(fieldId + '-error');
      const input  = document.getElementById(fieldId);
      const msg    = msgKey ? (i18n[lang][msgKey] || '') : '';
      errEl.textContent = msg;
      input.classList.toggle('error', !!msgKey);
      if (msgKey) valid = false;
    }

    setFieldError('prenom',  prenom  ? null : 'form.err.required');
    setFieldError('nom',     nom     ? null : 'form.err.required');
    setFieldError('email',
      !email            ? 'form.err.required'
      : !EMAIL_REGEX.test(email) ? 'form.err.email'
      : null
    );
    setFieldError('message',
      !message          ? 'form.err.required'
      : message.length < 10 ? 'form.err.minlen'
      : null
    );

    if (!valid) return;

    // État chargement
    submitBtn.disabled = true;
    submitBtn.querySelector('.submit-text').style.display = 'none';
    submitBtn.querySelector('.submit-spinner').style.display = 'inline-block';
    successEl.style.display = 'none';
    errorEl.style.display   = 'none';

    try {
      // Content-Type: text/plain évite le preflight CORS et permet à Apps Script de lire e.postData.contents
      const resp   = await fetch(APPS_SCRIPT_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'text/plain' },
        body:    JSON.stringify({ prenom, nom, email, message }),
      });
      const result = await resp.json();
      if (!result.success) throw new Error(result.error || 'server_error');
      form.style.display      = 'none';
      successEl.style.display = 'flex';
    } catch {
      errorEl.style.display = 'flex';
      submitBtn.disabled = false;
      submitBtn.querySelector('.submit-text').style.display = 'inline';
      submitBtn.querySelector('.submit-spinner').style.display = 'none';
    }
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  setLanguage(currentLang);
  initHamburger();
  initNavScroll();
  initParticles();
  initContactForm();

  document.getElementById('theme-toggle').addEventListener('click', () =>
    setTheme(currentTheme === 'dark' ? 'light' : 'dark'));

  document.getElementById('lang-toggle').addEventListener('click', () =>
    setLanguage(currentLang === 'fr' ? 'en' : 'fr'));
});
