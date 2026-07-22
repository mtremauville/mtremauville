// ── Voice recorder — MediaRecorder (audio) + Web Speech API (live transcript) ──
const VOICE_LEVEL_BARS = 16; // analyser.fftSize (2×this) must be a power of 2
const VOICE_MIME_CANDIDATES = [
  { mime: 'audio/webm;codecs=opus', ext: 'webm' },
  { mime: 'audio/webm',             ext: 'webm' },
  { mime: 'audio/mp4',              ext: 'm4a' },
];

function voiceLang() { return (typeof currentLang !== 'undefined') ? currentLang : 'fr'; }

function initVoiceRecorder() {
  const toggleBtn     = document.getElementById('recorder-toggle-btn');
  const toggleLabel   = document.getElementById('record-btn-label');
  const timerEl       = document.getElementById('recorder-timer');
  const levelEl       = document.getElementById('recorder-level');
  const errorEl       = document.getElementById('recorder-error');
  const transcriptEl  = document.getElementById('transcript-text');
  const transcriptNote = document.getElementById('transcript-note');
  const playbackWrap  = document.getElementById('recorder-playback');
  const audioEl       = document.getElementById('recorder-audio');
  const newBtn        = document.getElementById('recorder-new-btn');
  const saveAudioBtn  = document.getElementById('recorder-save-audio-btn');
  const saveTextBtn   = document.getElementById('recorder-save-text-btn');
  if (!toggleBtn || !transcriptEl) return;

  // Build level meter bars
  const bars = [];
  for (let i = 0; i < VOICE_LEVEL_BARS; i++) {
    const bar = document.createElement('span');
    levelEl.appendChild(bar);
    bars.push(bar);
  }

  let mediaRecorder = null;
  let audioStream = null;
  let audioChunks = [];
  let recordedBlob = null;
  let recordedExt = 'webm';
  let audioObjectUrl = null;

  let audioCtx = null;
  let analyser = null;
  let levelRafId = null;

  let timerInterval = null;
  let startTime = null;

  let recognition = null;
  let manualStop = false;
  let finalTranscript = '';
  const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;

  function fmtTime(ms) {
    const total = Math.floor(ms / 1000);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function startTimer() {
    startTime = Date.now();
    timerEl.textContent = '00:00';
    timerInterval = setInterval(() => {
      timerEl.textContent = fmtTime(Date.now() - startTime);
    }, 250);
  }
  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // ── Level meter ──
  function startLevelMeter(stream) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    audioCtx = new Ctx();
    const source = audioCtx.createMediaStreamSource(stream);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = VOICE_LEVEL_BARS * 2;
    source.connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);

    function loop() {
      analyser.getByteFrequencyData(data);
      bars.forEach((bar, i) => {
        const v = data[i] || 0;
        bar.style.height = Math.max(4, Math.round((v / 255) * 40)) + 'px';
      });
      levelRafId = requestAnimationFrame(loop);
    }
    loop();
  }

  function stopLevelMeter() {
    if (levelRafId) { cancelAnimationFrame(levelRafId); levelRafId = null; }
    bars.forEach(bar => { bar.style.height = '4px'; });
    if (audioCtx) { audioCtx.close().catch(() => {}); audioCtx = null; }
  }

  // ── Speech recognition ──
  function createRecognition() {
    const r = new SpeechRecognitionCtor();
    r.continuous = true;
    r.interimResults = true;
    r.lang = voiceLang() === 'fr' ? 'fr-FR' : 'en-US';

    r.onresult = (e) => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalTranscript += t + ' ';
        else interim += t;
      }
      transcriptEl.value = (finalTranscript + interim).trim();
    };

    r.onend = () => {
      if (!manualStop && mediaRecorder && mediaRecorder.state === 'recording') {
        try { r.start(); } catch { /* already starting */ }
      }
    };

    return r;
  }

  // ── Recording lifecycle ──
  function resetUiForNewRecording() {
    errorEl.textContent = '';
    transcriptNote.textContent = '';
    transcriptEl.value = '';
    finalTranscript = '';
    playbackWrap.style.display = 'none';
    newBtn.style.display = 'none';
    saveAudioBtn.style.display = 'none';
    saveTextBtn.style.display = 'none';
    timerEl.textContent = '00:00';
    if (audioObjectUrl) { URL.revokeObjectURL(audioObjectUrl); audioObjectUrl = null; }
    recordedBlob = null;
  }

  function startRecording() {
    resetUiForNewRecording();

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
      errorEl.textContent = voiceLang() === 'fr'
        ? "Ce navigateur ne prend pas en charge l'enregistrement audio."
        : "This browser doesn't support audio recording.";
      return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        audioStream = stream;
        audioChunks = [];

        const picked = VOICE_MIME_CANDIDATES.find(c => MediaRecorder.isTypeSupported(c.mime));
        recordedExt = picked ? picked.ext : 'webm';
        mediaRecorder = picked ? new MediaRecorder(stream, { mimeType: picked.mime }) : new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) audioChunks.push(e.data); };
        mediaRecorder.onstop = () => {
          recordedBlob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
          audioObjectUrl = URL.createObjectURL(recordedBlob);
          audioEl.src = audioObjectUrl;
          playbackWrap.style.display = 'block';
          newBtn.style.display = '';
          saveAudioBtn.style.display = '';
          saveTextBtn.style.display = '';
        };

        mediaRecorder.start();
        startTimer();
        try { startLevelMeter(stream); } catch { /* level meter is a visual extra, never block recording on it */ }

        toggleBtn.classList.add('recording');
        toggleLabel.textContent = voiceLang() === 'fr' ? "Arrêter l'enregistrement" : 'Stop recording';

        if (SpeechRecognitionCtor) {
          manualStop = false;
          recognition = createRecognition();
          try { recognition.start(); } catch { /* no-op */ }
        } else {
          transcriptNote.textContent = voiceLang() === 'fr'
            ? "La transcription automatique n'est pas prise en charge par ce navigateur — tu peux taper le texte manuellement."
            : "Automatic transcription isn't supported by this browser — you can type the text manually.";
        }
      })
      .catch(() => {
        errorEl.textContent = voiceLang() === 'fr'
          ? 'Microphone indisponible ou accès refusé.'
          : 'Microphone unavailable or access denied.';
      });
  }

  function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop();
    if (audioStream) { audioStream.getTracks().forEach(t => t.stop()); audioStream = null; }
    stopTimer();
    stopLevelMeter();

    if (recognition) {
      manualStop = true;
      recognition.stop();
    }

    toggleBtn.classList.remove('recording');
    toggleLabel.textContent = voiceLang() === 'fr' ? "Démarrer l'enregistrement" : 'Start recording';
  }

  function toggleRecording() {
    const isRecording = mediaRecorder && mediaRecorder.state === 'recording';
    if (isRecording) stopRecording();
    else startRecording();
  }

  // ── Save ──
  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  function saveAudio() {
    if (!recordedBlob) return;
    downloadBlob(recordedBlob, `enregistrement-${Date.now()}.${recordedExt}`);
  }

  function saveText() {
    const text = transcriptEl.value.trim();
    if (!text) return;
    downloadBlob(new Blob([text], { type: 'text/plain' }), `transcription-${Date.now()}.txt`);
  }

  function newRecording() {
    resetUiForNewRecording();
  }

  // ── Wiring ──
  toggleBtn.addEventListener('click', toggleRecording);
  newBtn.addEventListener('click', newRecording);
  saveAudioBtn.addEventListener('click', saveAudio);
  saveTextBtn.addEventListener('click', saveText);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.addEventListener('click', () => {
    const isRecording = mediaRecorder && mediaRecorder.state === 'recording';
    toggleLabel.textContent = isRecording
      ? (voiceLang() === 'fr' ? "Arrêter l'enregistrement" : 'Stop recording')
      : (voiceLang() === 'fr' ? "Démarrer l'enregistrement" : 'Start recording');
  });

  window.addEventListener('beforeunload', () => {
    if (audioStream) audioStream.getTracks().forEach(t => t.stop());
    if (recognition) { manualStop = true; recognition.stop(); }
  });
}

document.addEventListener('DOMContentLoaded', initVoiceRecorder);
