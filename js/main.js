// ── i18n ──
const i18n = {
  fr: {
    'nav.about':      '<span class="snav-line"></span>Profil',
    'nav.services':   '<span class="snav-line"></span>Compétences',
    'nav.projects':   '<span class="snav-line"></span>Projets',
    'nav.stack':      '<span class="snav-line"></span>Stack',
    'nav.github':     '<span class="snav-line"></span>GitHub',
    'nav.cta':        'Contactez-moi',

    'hero.available': 'En recherche active · CDI',
    'hero.btn1':      'Voir mes projets',
    'hero.btn2':      'Me contacter →',
    'hero.cv':        '<i class="fa-solid fa-file-arrow-down"></i> CV',
    'contact.cv':     '<i class="fa-solid fa-file-arrow-down"></i> Télécharger mon CV',
    'sidebar.role':    '<span class="accent-img">Développeur Fullstack &amp; IA Junior</span>',
    'sidebar.tagline': 'Rails 8 · JavaScript · IA<br>Le Wagon Paris 2026 · RNCP Niv. 6',

    'about.h2':      'Profil',
    'about.p1':      "Développeur fullstack <strong>Ruby on Rails & IA</strong>, certifié <strong>RNCP Niveau 6</strong> (Le Wagon Paris, 2026). Je construis des applications <strong>de bout en bout</strong> : modélisation ActiveRecord, API REST, authentification, déploiement en production. Et j'intègre des <strong>LLMs nativement</strong> — OpenAI, Claude API — pas comme une fonctionnalité bonus, mais comme une <strong>couche métier à part entière</strong>.",
    'about.p2':      "Mon expérience en conseil technique aux clients à la <strong>FNAC</strong> et chez <strong>Apple</strong> m'ont appris à comprendre un <strong>besoin métier</strong>, à communiquer avec des <strong>équipes non-techniques</strong> et à <strong>m'adapter vite</strong> à de nouveaux contextes.",
    'about.p3':      "Opérationnel dès le premier jour — je cherche une équipe où apprendre et contribuer.",
    'xp1.date':      '2002 — Présent',
    'xp1.role':      'Expert Technique &amp; Conseil Client',
    'xp1.company':   'FNAC',
    'xp1.desc':      "Référent Produits Techniques — recueil du besoin client, traduction en solutions accessibles, formation des équipes juniors, pilotage de KPIs commerciaux.",
    'xp2.date':      '2016 — 2017',
    'xp2.role':      'Spécialiste Technique',
    'xp2.company':   'Apple Store',
    'xp2.desc':      "Diagnostic et réparation de composants Apple en environnement certifié. Accompagnement client iOS et macOS.",
    'xp3.date':      '01/2026 — 03/2026',
    'xp3.role':      'Bootcamp AI Software Development',
    'xp3.company':   'Le Wagon Paris · RNCP Niveau 6',
    'xp3.desc':      "Formation intensive 9 semaines — Rails, PostgreSQL, JavaScript, Hotwire, API REST, déploiement. Stack IA : ruby_llm, OpenAI API, Claude API, agents IA, Vision AI.",

    'services.title': "Ce que j'apporte",
    'service1.title': 'Développement Frontend',
    'service1.desc':  "Je code des interfaces soignées et réactives. J'ai l'œil pour l'UX et j'aime le travail bien fini.",
    'service1.f1':    'React · Vue.js · Stimulus JS',
    'service1.f2':    'Hotwire · Turbo · HTML/CSS',
    'service1.f3':    'Responsive · Accessibilité · Performance',
    'service2.title': 'Développement Full-Stack Rails',
    'service2.desc':  "J'ai livré des apps Rails en production — seul et en équipe. Du modèle à la mise en ligne, je maîtrise le cycle complet.",
    'service2.f1':    'Rails 8 · PostgreSQL · Devise',
    'service2.f2':    'API REST · Hotwire · Stimulus',
    'service2.f3':    'Heroku · Cloudinary · Git flow',
    'service.badge':  'Mon point fort',
    'service3.title': 'Intégration IA / LLM',
    'service3.desc':  "Je sais intégrer des LLMs dans des apps Rails — streaming SSE, agents IA, Vision. Un différenciateur rare pour un profil junior.",
    'service3.f1':    'OpenAI API · Claude API · ruby_llm',
    'service3.f2':    'Streaming SSE · Agents autonomes',
    'service3.f3':    'Vision IA · Recommandations',

    'projects.title': 'Projets récents',
    'proj.wip':       'En développement actif',
    'proj.demo':      'Démo interactive',
    'project7.desc':  "Dictaphone dans le navigateur — enregistrement audio (MediaRecorder), transcription vocale en direct (Web Speech API), export de l'audio et du texte.",
    'project6.desc':  'Photobooth dans le navigateur — capture caméra, filtres en direct, rendu polaroid (cadre + légende manuscrite), enregistrement et partage natif ou par email.',
    'project5.desc':  'Scanner de codes-barres dans le navigateur — décodage EAN/UPC via la caméra, recherche produit en direct sur Open Food Facts, historique local.',
    'project4.desc':  'Lecteur musical hommage à l\'iPod Classic — molette cliquable en CSS/JS pur (drag circulaire, détection de zones), menu de navigation, lecture audio avec Web Audio.',
    'project1.desc':  'Compagnon streaming personnel — recherche via TMDB API, navigation Hotwire/Turbo sans rechargement, recommandations IA en cours d\'intégration.',
    'project2.desc':  'Analyseur d\'ingrédients cosmétiques IA — modélisation ActiveRecord des incompatibilités, LLM avec streaming SSE via ruby_llm, déployé Heroku.',
    'project3.desc':  'Reconnaissance de plantes par vision IA — front-end complet, authentification Devise, Git flow en équipe de 4 devs, déployé en production.',

    'stack.title':    'Ma stack',
    'stack.backend':  'Backend',
    'stack.frontend': 'Frontend',
    'stack.ai':       'AI / LLM',
    'stack.tools':    'Outils',

    'github.title':   'Activité GitHub',
    'github.loading': "Chargement de l'activité...",
    'github.error':   "Impossible de charger l'activité GitHub.",
    'github.less':    'Moins',
    'github.more':    'Plus',

    'ipod.intro': "Un lecteur musical construit en CSS/JS pur, hommage à la molette cliquable de l'iPod. Fais glisser ton doigt (ou ta souris) autour de la molette pour naviguer, clique au centre pour sélectionner.",
    'ipod.hint': 'MENU pour revenir en arrière · glisse la molette pour naviguer/régler le volume · clique au centre pour sélectionner',

    'scanner.intro': "Scanne un produit avec ta caméra ou saisis son code-barres — les infos sont récupérées en direct via Open Food Facts, la base de données alimentaire libre et collaborative.",
    'scanner.start': 'Démarrer la caméra',
    'scanner.stop':  'Arrêter',
    'scanner.or':    'ou saisis un code-barres',
    'scanner.hint':  "Base Open Food Facts — couvre surtout les produits alimentaires. Ton code-barres n'est envoyé qu'à Open Food Facts, jamais stocké ailleurs.",

    'polaroid.intro':  "Prends une photo avec ta caméra, applique un filtre, et obtiens un polaroid prêt à enregistrer, partager ou envoyer par mail.",
    'polaroid.start':  'Démarrer la caméra',
    'polaroid.retake': 'Reprendre',
    'polaroid.save':   'Enregistrer',
    'polaroid.share':  'Partager',
    'polaroid.email':  'Email',
    'polaroid.hint':   "Tout se passe dans ton navigateur — aucune photo n'est envoyée sur un serveur. Le partage utilise le menu natif de ton appareil.",

    'voice.intro':           "Enregistre ta voix, obtiens la transcription en direct, puis enregistre l'audio et/ou le texte sur ton appareil.",
    'voice.start':           "Démarrer l'enregistrement",
    'voice.transcriptLabel': 'Transcription',
    'voice.new':             'Nouvel enregistrement',
    'voice.saveAudio':       "Enregistrer l'audio",
    'voice.saveText':        'Enregistrer le texte',
    'voice.hint':            "Tout se passe dans ton navigateur — aucun audio n'est envoyé à un serveur. La transcription automatique fonctionne mieux sur Chrome/Edge.",

    'contact.h2':  '<span class="accent-img">Travaillons ensemble</span>',
    'contact.p':   'Disponible pour un poste junior en CDI — Paris ou remote. Discutons-en.',
    'form.prenom':       'Prénom *',
    'form.nom':          'Nom *',
    'form.email':        'Adresse mail *',
    'form.message':      'Message *',
    'form.send':         'Contactez-moi',
    'form.success':      'Message envoyé ! Je vous répondrai dans les plus brefs délais.',
    'form.error':        "Une erreur s'est produite. Réessayez ou écrivez-moi directement.",
    'form.err.required': 'Ce champ est obligatoire.',
    'form.err.email':    'Adresse mail invalide.',
    'form.err.minlen':   'Minimum 10 caractères.',

    'footer': '© 2026 Mickaël Tremauville · Développeur Fullstack & IA Junior · Open to work',
  },
  en: {
    'nav.about':      '<span class="snav-line"></span>Profile',
    'nav.services':   '<span class="snav-line"></span>Skills',
    'nav.projects':   '<span class="snav-line"></span>Projects',
    'nav.stack':      '<span class="snav-line"></span>Stack',
    'nav.github':     '<span class="snav-line"></span>GitHub',
    'nav.cta':        'Contact me',

    'hero.available': 'Actively looking · Full-time',
    'sidebar.role':    '<span class="accent-img">Junior Fullstack &amp; AI Developer</span>',
    'sidebar.tagline': 'Rails 8 · JavaScript · AI<br>Le Wagon Paris 2026 · RNCP Level 6',
    'hero.desc':      'Junior Fullstack & AI Developer — Rails 8, JavaScript, AI. RNCP Level 6 certified (Le Wagon 2026). 22 years in client-facing tech: I understand business needs, ship code, and integrate fast into a team.',
    'hero.btn1':      'See my projects',
    'hero.btn2':      'Get in touch →',
    'hero.cv':        '<i class="fa-solid fa-file-arrow-down"></i> Resume',
    'contact.cv':     '<i class="fa-solid fa-file-arrow-down"></i> Download my resume',

    'about.h2':      'Profile',
    'about.p1':      "Fullstack <strong>Rails & AI</strong> developer, certified <strong>RNCP Level 6</strong> (Le Wagon Paris, 2026). I build applications <strong>end to end</strong>: ActiveRecord modeling, REST APIs, authentication, production deployment. And I integrate <strong>LLMs natively</strong> — OpenAI, Claude API — not as a bonus feature, but as a <strong>core business layer</strong>.",
    'about.p2':      "My experience in technical client advising at <strong>FNAC</strong> and <strong>Apple</strong> taught me to understand <strong>business needs</strong>, communicate clearly with <strong>non-technical teams</strong>, and <strong>adapt quickly</strong> to new environments.",
    'about.p3':      "Ready from day one — looking for a team to learn from and contribute to.",
    'xp1.date':      '2002 — Present',
    'xp1.role':      'Technical Expert &amp; Client Advisor',
    'xp1.company':   'FNAC',
    'xp1.desc':      "High-tech Products Specialist — customer needs assessment, translating complex tech into accessible solutions, junior team mentoring, commercial KPI tracking.",
    'xp2.date':      '2016 — 2017',
    'xp2.role':      'Technical Specialist',
    'xp2.company':   'Apple Store',
    'xp2.desc':      "Apple component diagnostics and repair in a certified environment. iOS and macOS customer support.",
    'xp3.date':      '01/2026 — 03/2026',
    'xp3.role':      'AI Software Development Bootcamp',
    'xp3.company':   'Le Wagon Paris · RNCP Level 6',
    'xp3.desc':      "Intensive 9-week program — Rails, PostgreSQL, JavaScript, Hotwire, REST APIs, deployment. AI stack: ruby_llm, OpenAI API, Claude API, AI agents, Vision AI.",

    'services.title': 'What I bring',
    'service1.title': 'Frontend Development',
    'service1.desc':  'I build polished, reactive interfaces. I care about UX and I enjoy clean, finished work.',
    'service1.f1':    'React · Vue.js · Stimulus JS',
    'service1.f2':    'Hotwire · Turbo · HTML/CSS',
    'service1.f3':    'Responsive · Accessibility · Performance',
    'service2.title': 'Full-Stack Rails Development',
    'service2.desc':  "I've shipped Rails apps to production — solo and in a team. From model to deployment, I own the full cycle.",
    'service2.f1':    'Rails 8 · PostgreSQL · Devise',
    'service2.f2':    'REST API · Hotwire · Stimulus',
    'service2.f3':    'Heroku · Cloudinary · Git flow',
    'service.badge':  'My edge',
    'service3.title': 'AI / LLM Integration',
    'service3.desc':  'I can integrate LLMs into Rails apps — SSE streaming, AI agents, Vision. A rare differentiator for a junior profile.',
    'service3.f1':    'OpenAI API · Claude API · ruby_llm',
    'service3.f2':    'SSE Streaming · Autonomous agents',
    'service3.f3':    'Vision AI · Recommendations',

    'projects.title': 'Recent projects',
    'proj.wip':       'Actively in development',
    'proj.demo':      'Interactive demo',
    'project7.desc':  'A browser-based voice recorder — audio recording (MediaRecorder), live speech-to-text transcription (Web Speech API), export of both audio and text.',
    'project6.desc':  'A browser-based photobooth — camera capture, live filters, polaroid rendering (frame + handwritten caption), save and share natively or by email.',
    'project5.desc':  'A browser-based barcode scanner — EAN/UPC decoding via the camera, live product lookup on Open Food Facts, local scan history.',
    'project4.desc':  'A tribute music player to the iPod Classic — pure CSS/JS click wheel (circular drag, zone detection), navigation menu, audio playback with Web Audio.',
    'project1.desc':  'Personal streaming companion — TMDB API search, Hotwire/Turbo navigation without page reload, AI recommendations in progress.',
    'project2.desc':  'AI cosmetic ingredient analyzer — ActiveRecord modeling of incompatibilities, LLM with SSE streaming via ruby_llm, deployed on Heroku.',
    'project3.desc':  'AI plant care — full front-end, Devise auth, Git flow in a 4-dev team, shipped to production.',

    'stack.title':    'My stack',
    'stack.backend':  'Backend',
    'stack.frontend': 'Frontend',
    'stack.ai':       'AI / LLM',
    'stack.tools':    'Tools',

    'github.title':   'GitHub activity',
    'github.loading': 'Loading activity...',
    'github.error':   'Could not load GitHub activity.',
    'github.less':    'Less',
    'github.more':    'More',

    'ipod.intro': 'A music player built with pure CSS/JS, a tribute to the iPod\'s clickable wheel. Drag your finger (or mouse) around the wheel to navigate, click the center to select.',
    'ipod.hint': 'MENU to go back · drag the wheel to navigate/adjust volume · click the center to select',

    'scanner.intro': 'Scan a product with your camera or type in its barcode — details are fetched live from Open Food Facts, the free and collaborative food database.',
    'scanner.start': 'Start camera',
    'scanner.stop':  'Stop',
    'scanner.or':    'or type in a barcode',
    'scanner.hint':  "Open Food Facts database — mostly covers food products. Your barcode is only ever sent to Open Food Facts, never stored elsewhere.",

    'polaroid.intro':  'Take a photo with your camera, apply a filter, and get a polaroid ready to save, share or email.',
    'polaroid.start':  'Start camera',
    'polaroid.retake': 'Retake',
    'polaroid.save':   'Save',
    'polaroid.share':  'Share',
    'polaroid.email':  'Email',
    'polaroid.hint':   "Everything happens in your browser — no photo is ever sent to a server. Sharing uses your device's native menu.",

    'voice.intro':           'Record your voice, get a live transcript, then save the audio and/or the text to your device.',
    'voice.start':           'Start recording',
    'voice.transcriptLabel': 'Transcript',
    'voice.new':             'New recording',
    'voice.saveAudio':       'Save audio',
    'voice.saveText':        'Save text',
    'voice.hint':            'Everything happens in your browser — no audio is ever sent to a server. Automatic transcription works best on Chrome/Edge.',

    'contact.h2':  '<span class="accent-img">Let\'s work together</span>',
    'contact.p':   'Available for a junior position — full-time. Paris or remote. Let\'s talk.',
    'form.prenom':       'First name *',
    'form.nom':          'Last name *',
    'form.email':        'Email address *',
    'form.message':      'Message *',
    'form.send':         'Contact Me',
    'form.success':      "Message sent! I'll get back to you shortly.",
    'form.error':        'An error occurred. Try again or reach me directly.',
    'form.err.required': 'This field is required.',
    'form.err.email':    'Invalid email address.',
    'form.err.minlen':   'Minimum 10 characters.',

    'footer': '© 2026 Mickaël Tremauville · Junior Fullstack & AI Developer · Open to work',
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
    { type: 'out', text: 'open-to-work: CDI/CDD · Paris ou remote ✓' },
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
    { type: 'out', text: 'open-to-work: full-time/contract · Paris or remote ✓' },
  ]
};


// ── Theme ──
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentLang  = localStorage.getItem('lang')  || 'fr';

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const icon = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  ['theme-toggle', 'theme-toggle-menu'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.innerHTML = icon;
  });
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
  ['lang-toggle', 'lang-toggle-menu'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.textContent = lang === 'fr' ? 'EN' : 'FR';
  });
  updateGithubTotalLabel();
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

// ── Hamburger mobile ──
function initHamburger() {
  const btn     = document.getElementById('hamburger-btn');
  const nav     = document.getElementById('sidebar-nav');
  const sidebar = document.querySelector('.sidebar');
  if (!btn || !nav) return;

  function open() {
    if (sidebar) nav.style.paddingTop = (sidebar.offsetHeight + 16) + 'px';
    nav.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function close() {
    nav.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  // Ouvre/ferme via le burger
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.contains('open') ? close() : open();
  });

  // Ferme en cliquant en dehors du menu et du bouton
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
      close();
    }
  });

  // Ferme au clic sur un lien de navigation
  nav.querySelectorAll('.snav-item').forEach(l => l.addEventListener('click', close));
}

// ── Scroll spy (sidebar nav active state) ──
function initScrollSpy() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = document.querySelectorAll('.snav-item');
  if (!sections.length || !navLinks.length) return;

  function setActive(id) {
    navLinks.forEach(l => l.classList.remove('active'));
    const link = document.querySelector(`.snav-item[href="#${id}"]`);
    if (link) link.classList.add('active');
  }

  function onScroll() {
    const trigger = window.scrollY + window.innerHeight * 0.3;
    let current = sections[0].id;
    for (const section of sections) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      if (top <= trigger) current = section.id;
    }
    setActive(current);
  }

  // Active immédiat au clic
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('href')?.slice(1);
      if (id) setActive(id);
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
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
      ? { dot: 'rgba(100,255,218,', line: 'rgba(100,255,218,' }
      : { dot: 'rgba(124,58,237,',  line: 'rgba(124,58,237,' };
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

// ── Scramble effect ──
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?<>';

function scrambleElement(el, duration = 900) {
  if (el.dataset.scrambling) return;
  el.dataset.scrambling = '1';

  const nodes = [];

  (function collect(node) {
    for (const child of node.childNodes) {
      if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
        nodes.push({ node: child, original: child.textContent });
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        collect(child);
      }
    }
  })(el);

  const start = performance.now();
  let done = 0;

  nodes.forEach(({ node, original }) => {
    const chars = original.split('');

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const revealed = Math.floor(progress * chars.length);

      node.textContent = chars.map((c, i) => {
        if (i < revealed)             return c;
        if (!c.match(/[a-zA-Z0-9]/)) return c;
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }).join('');

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        node.textContent = original;
        if (++done >= nodes.length) delete el.dataset.scrambling;
      }
    }

    requestAnimationFrame(tick);
  });
}

function initScramble() {
  const headings = Array.from(document.querySelectorAll('h1, h2'))
    .filter(el => !el.closest('#contact'));

  // Scroll → une seule fois à l'entrée dans le viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      scrambleElement(entry.target);
    });
  }, { threshold: 0.4 });

  headings.forEach(el => {
    observer.observe(el);
    // Hover → rejoue à chaque passage de souris
    el.addEventListener('mouseenter', () => scrambleElement(el));
  });
}

// ── GitHub contributions ──
let githubTotalCount = null;

function updateGithubTotalLabel() {
  const totalEl = document.getElementById('github-total');
  if (!totalEl || githubTotalCount === null) return;
  totalEl.textContent = currentLang === 'fr'
    ? `${githubTotalCount} contributions cette année`
    : `${githubTotalCount} contribution${githubTotalCount === 1 ? '' : 's'} in the last year`;
}

function initGithubCalendar() {
  const grid = document.getElementById('contrib-grid');
  const totalEl = document.getElementById('github-total');
  if (!grid) return;

  fetch('https://github-contributions-api.jogruber.de/v4/mtremauville?y=last')
    .then(res => {
      if (!res.ok) throw new Error('GitHub contributions request failed');
      return res.json();
    })
    .then(data => {
      const days = data.contributions || [];
      grid.classList.remove('is-loading');
      grid.innerHTML = '';
      const frag = document.createDocumentFragment();
      days.forEach(day => {
        const cell = document.createElement('span');
        cell.className = 'contrib-cell';
        cell.dataset.level = day.level;
        cell.title = `${day.date} · ${day.count} contribution${day.count === 1 ? '' : 's'}`;
        frag.appendChild(cell);
      });
      grid.appendChild(frag);

      githubTotalCount = data.total?.lastYear ?? days.reduce((sum, d) => sum + d.count, 0);
      updateGithubTotalLabel();
    })
    .catch(() => {
      grid.classList.remove('is-loading');
      if (totalEl) totalEl.textContent = i18n[currentLang]['github.error'];
    });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  setLanguage(currentLang);
  initHamburger();
  initScrollSpy();
  initScramble();
  initParticles();
  initContactForm();
  initGithubCalendar();

  ['theme-toggle', 'theme-toggle-menu'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => setTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  });

  ['lang-toggle', 'lang-toggle-menu'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => setLanguage(currentLang === 'fr' ? 'en' : 'fr'));
  });
});
