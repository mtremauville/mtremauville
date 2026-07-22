// ── iPod Classic — demo player ──
// Pistes libres de droit (SoundHelix) utilisées uniquement à des fins de démonstration.
const IPOD_TRACKS = [
  { title: 'SoundHelix Song 1', artist: 'SoundHelix', album: 'Démo libre de droit', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', hue: 165 },
  { title: 'SoundHelix Song 2', artist: 'SoundHelix', album: 'Démo libre de droit', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', hue: 205 },
  { title: 'SoundHelix Song 3', artist: 'SoundHelix', album: 'Démo libre de droit', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', hue: 265 },
  { title: 'SoundHelix Song 4', artist: 'SoundHelix', album: 'Démo libre de droit', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', hue: 20 },
  { title: 'SoundHelix Song 5', artist: 'SoundHelix', album: 'Démo libre de droit', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', hue: 320 },
  { title: 'SoundHelix Song 6', artist: 'SoundHelix', album: 'Démo libre de droit', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', hue: 45 },
];

const IPOD_VISIBLE_ROWS = 5;

const ipodState = {
  view: 'list',        // 'list' | 'nowplaying'
  selectedIndex: 0,
  currentIndex: null,
  isPlaying: false,
};

function ipodFmtTime(sec) {
  if (!isFinite(sec) || sec < 0) return '--:--';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function initIpod() {
  const wheelEl   = document.getElementById('ipod-wheel');
  const centerBtn = document.getElementById('wheel-center');
  const body      = document.getElementById('ipod-screen-body');
  const titleEl   = document.getElementById('ipod-title');
  const volIcon   = document.getElementById('ipod-volume-icon');
  const audio     = document.getElementById('ipod-audio');
  if (!wheelEl || !centerBtn || !body || !audio) return;

  audio.volume = 0.7;
  let volumeHideTimer = null;

  function lang() { return (typeof currentLang !== 'undefined') ? currentLang : 'fr'; }

  function updateVolumeIcon() {
    if (!volIcon) return;
    volIcon.className = 'fa-solid ' + (audio.volume === 0 ? 'fa-volume-xmark' : audio.volume < 0.5 ? 'fa-volume-low' : 'fa-volume-high');
  }

  function updateVolumeBar() {
    const bar = document.getElementById('np-volume-bar');
    if (!bar) return;
    const filled = Math.round(audio.volume * 10);
    Array.from(bar.children).forEach((seg, i) => seg.classList.toggle('filled', i < filled));
  }

  function showVolumeOverlay() {
    const el = document.getElementById('np-volume-overlay');
    if (!el) return;
    el.classList.add('visible');
    clearTimeout(volumeHideTimer);
    volumeHideTimer = setTimeout(() => el.classList.remove('visible'), 1400);
  }

  function adjustVolume(delta) {
    audio.volume = Math.min(1, Math.max(0, audio.volume + delta));
    updateVolumeIcon();
    updateVolumeBar();
    showVolumeOverlay();
  }

  function renderList() {
    body.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'ipod-menu';

    let start = ipodState.selectedIndex - Math.floor(IPOD_VISIBLE_ROWS / 2);
    start = Math.max(0, Math.min(start, IPOD_TRACKS.length - IPOD_VISIBLE_ROWS));
    if (IPOD_TRACKS.length <= IPOD_VISIBLE_ROWS) start = 0;

    IPOD_TRACKS.slice(start, start + IPOD_VISIBLE_ROWS).forEach((t, i) => {
      const idx = start + i;
      const item = document.createElement('div');
      item.className = 'ipod-menu-item' + (idx === ipodState.selectedIndex ? ' active' : '');
      const title = document.createElement('span');
      title.className = 'item-title';
      title.textContent = t.title;
      item.appendChild(title);
      wrap.appendChild(item);
    });

    body.appendChild(wrap);
    titleEl.textContent = lang() === 'fr' ? 'Chansons' : 'Songs';
  }

  function renderNowPlaying() {
    const t = IPOD_TRACKS[ipodState.currentIndex];
    body.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.className = 'ipod-nowplaying';

    const cover = document.createElement('div');
    cover.className = 'ipod-cover';
    cover.style.background = `linear-gradient(135deg, hsl(${t.hue},70%,55%), hsl(${t.hue + 40},60%,38%))`;
    cover.innerHTML = '<i class="fa-solid fa-music"></i>';

    const info = document.createElement('div');
    info.className = 'ipod-track-info';

    const titleWrap = document.createElement('div');
    titleWrap.className = 'ipod-track-title-wrap';
    const titleSpan = document.createElement('span');
    titleSpan.textContent = t.title;
    titleWrap.appendChild(titleSpan);

    const sub = document.createElement('div');
    sub.className = 'ipod-track-sub';
    sub.textContent = `${t.artist} — ${t.album}`;

    const eq = document.createElement('div');
    eq.className = 'ipod-eq' + (ipodState.isPlaying ? '' : ' paused');
    eq.id = 'np-eq';
    for (let i = 0; i < 4; i++) eq.appendChild(document.createElement('span'));

    const progress = document.createElement('div');
    progress.className = 'ipod-progress';
    const elapsed = document.createElement('span');
    elapsed.id = 'np-elapsed';
    elapsed.textContent = ipodFmtTime(audio.currentTime);
    const ptrack = document.createElement('div');
    ptrack.className = 'ipod-progress-track';
    const fill = document.createElement('div');
    fill.className = 'ipod-progress-fill';
    fill.id = 'np-fill';
    ptrack.appendChild(fill);
    const duration = document.createElement('span');
    duration.id = 'np-duration';
    duration.textContent = ipodFmtTime(audio.duration);
    progress.append(elapsed, ptrack, duration);

    info.append(titleWrap, sub, eq, progress);
    wrap.append(cover, info);
    body.appendChild(wrap);

    const volOverlay = document.createElement('div');
    volOverlay.className = 'ipod-volume-overlay';
    volOverlay.id = 'np-volume-overlay';
    const volLabel = document.createElement('div');
    volLabel.className = 'ipod-volume-label';
    volLabel.textContent = 'Volume';
    const volBar = document.createElement('div');
    volBar.className = 'ipod-volume-bar';
    volBar.id = 'np-volume-bar';
    for (let i = 0; i < 10; i++) volBar.appendChild(document.createElement('span'));
    volOverlay.append(volLabel, volBar);
    body.appendChild(volOverlay);

    titleEl.textContent = lang() === 'fr' ? 'Lecture en cours' : 'Now Playing';

    updateVolumeBar();
    requestAnimationFrame(() => {
      if (titleSpan.scrollWidth > titleWrap.clientWidth) titleWrap.classList.add('marquee');
    });
  }

  function render() {
    if (ipodState.view === 'list') renderList();
    else renderNowPlaying();
  }

  function updatePlayVisuals() {
    const eq = document.getElementById('np-eq');
    if (eq) eq.classList.toggle('paused', !ipodState.isPlaying);
  }

  function loadTrack(idx) {
    const t = IPOD_TRACKS[idx];
    if (audio.dataset.idx !== String(idx)) {
      audio.src = t.src;
      audio.dataset.idx = String(idx);
    }
  }

  function play() { audio.play().catch(() => {}); }
  function pause() { audio.pause(); }

  function togglePlay() {
    if (ipodState.currentIndex === null) { selectHighlighted(); return; }
    if (audio.paused) play(); else pause();
  }

  function selectHighlighted() {
    ipodState.currentIndex = ipodState.selectedIndex;
    loadTrack(ipodState.currentIndex);
    play();
    ipodState.view = 'nowplaying';
    render();
  }

  function moveSelection(dir) {
    const len = IPOD_TRACKS.length;
    ipodState.selectedIndex = (ipodState.selectedIndex + dir + len) % len;
    render();
  }

  function onPrev() {
    if (ipodState.currentIndex === null) return;
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    ipodState.currentIndex = (ipodState.currentIndex - 1 + IPOD_TRACKS.length) % IPOD_TRACKS.length;
    ipodState.selectedIndex = ipodState.currentIndex;
    loadTrack(ipodState.currentIndex);
    play();
    if (ipodState.view === 'nowplaying') render();
  }

  function onNext() {
    if (ipodState.currentIndex === null) return;
    ipodState.currentIndex = (ipodState.currentIndex + 1) % IPOD_TRACKS.length;
    ipodState.selectedIndex = ipodState.currentIndex;
    loadTrack(ipodState.currentIndex);
    play();
    if (ipodState.view === 'nowplaying') render();
  }

  function goBack() {
    if (ipodState.view === 'nowplaying') {
      ipodState.view = 'list';
      render();
    }
  }

  function flashZone(action) {
    wheelEl.classList.add('wheel-active-' + action);
    setTimeout(() => wheelEl.classList.remove('wheel-active-' + action), 180);
  }

  function triggerAction(action) {
    flashZone(action);
    if (action === 'menu') goBack();
    else if (action === 'play') togglePlay();
    else if (action === 'prev') onPrev();
    else if (action === 'next') onNext();
  }

  function handleScrollTick(dir) {
    if (ipodState.view === 'list') moveSelection(dir);
    else adjustVolume(dir * 0.05);
  }

  // ── Audio events ──
  audio.addEventListener('play',  () => { ipodState.isPlaying = true;  updatePlayVisuals(); });
  audio.addEventListener('pause', () => { ipodState.isPlaying = false; updatePlayVisuals(); });
  audio.addEventListener('ended', onNext);
  audio.addEventListener('timeupdate', () => {
    const elapsedEl = document.getElementById('np-elapsed');
    const fillEl    = document.getElementById('np-fill');
    if (!elapsedEl || !fillEl) return;
    elapsedEl.textContent = ipodFmtTime(audio.currentTime);
    if (audio.duration) fillEl.style.width = (audio.currentTime / audio.duration * 100) + '%';
  });
  audio.addEventListener('loadedmetadata', () => {
    const durationEl = document.getElementById('np-duration');
    if (durationEl) durationEl.textContent = ipodFmtTime(audio.duration);
  });

  // ── Click wheel: drag-to-scroll + tap zones ──
  let dragging = false;
  let startAngle = 0;
  let lastAngle = 0;
  let dragAccumDeg = 0;
  let movedTotal = 0;

  function angleAt(x, y) {
    const rect = wheelEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return Math.atan2(y - cy, x - cx);
  }

  function normalizeDelta(delta) {
    while (delta > Math.PI) delta -= 2 * Math.PI;
    while (delta < -Math.PI) delta += 2 * Math.PI;
    return delta;
  }

  function zoneFromAngle(angleRad) {
    const deg = angleRad * 180 / Math.PI;
    if (deg >= -45 && deg < 45) return 'next';
    if (deg >= 45 && deg < 135) return 'play';
    if (deg >= -135 && deg < -45) return 'menu';
    return 'prev';
  }

  wheelEl.addEventListener('pointerdown', (e) => {
    dragging = true;
    dragAccumDeg = 0;
    movedTotal = 0;
    startAngle = lastAngle = angleAt(e.clientX, e.clientY);
    wheelEl.setPointerCapture(e.pointerId);
  });

  wheelEl.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const angle = angleAt(e.clientX, e.clientY);
    const delta = normalizeDelta(angle - lastAngle);
    lastAngle = angle;
    movedTotal += Math.abs(delta);
    dragAccumDeg += delta * 180 / Math.PI;
    const STEP = 16;
    while (Math.abs(dragAccumDeg) >= STEP) {
      const dir = dragAccumDeg > 0 ? 1 : -1;
      dragAccumDeg -= dir * STEP;
      handleScrollTick(dir);
    }
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    const totalMovedDeg = movedTotal * 180 / Math.PI;
    if (totalMovedDeg < 8) {
      triggerAction(zoneFromAngle(startAngle));
    }
  }
  wheelEl.addEventListener('pointerup', endDrag);
  wheelEl.addEventListener('pointercancel', endDrag);

  centerBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
  centerBtn.addEventListener('click', () => {
    if (ipodState.view === 'list') selectHighlighted();
    else togglePlay();
  });

  // ── Keyboard support ──
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('ipod-device')) return;
    switch (e.key) {
      case 'ArrowUp':    if (ipodState.view === 'list') moveSelection(-1); break;
      case 'ArrowDown':  if (ipodState.view === 'list') moveSelection(1);  break;
      case 'Enter':      if (ipodState.view === 'list') selectHighlighted(); else togglePlay(); break;
      case ' ':          e.preventDefault(); togglePlay(); break;
      case 'ArrowLeft':  onPrev(); break;
      case 'ArrowRight': onNext(); break;
      case 'Escape':     goBack(); break;
    }
  });

  // ── Re-render dynamic screen content on language change ──
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.addEventListener('click', () => render());

  updateVolumeIcon();
  render();
}

document.addEventListener('DOMContentLoaded', initIpod);
