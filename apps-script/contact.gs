// ── Configuration ──
const RECIPIENT  = 'mickael.tremauville@gmail.com';
const SHEET_NAME = 'Contacts';

// ── Point d'entrée POST ──
function doPost(e) {
  try {
    const raw = JSON.parse(e.postData.contents);

    const prenom  = sanitize(raw.prenom,   50);
    const nom     = sanitize(raw.nom,      50);
    const email   = sanitize(raw.email,   100);
    const message = sanitize(raw.message, 1000);

    // Validation email côté serveur
    const emailOk = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!prenom || !nom || !email || !emailOk || message.length < 10) {
      return json({ success: false, error: 'validation' });
    }

    // Écriture dans Google Sheets
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();
    sheet.appendRow([
      Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm'),
      prenom,
      nom,
      email,
      message,
    ]);

    // Envoi de l'e-mail de notification
    MailApp.sendEmail({
      to:      RECIPIENT,
      subject: `[Portfolio] Message de ${prenom} ${nom}`,
      body: [
        'Nouveau message depuis le portfolio :\n',
        `Prénom  : ${prenom}`,
        `Nom     : ${nom}`,
        `Email   : ${email}`,
        `\nMessage :\n${message}`,
      ].join('\n'),
      replyTo: email,
    });

    return json({ success: true });

  } catch (err) {
    return json({ success: false, error: 'server_error' });
  }
}

// ── Utilitaires ──
function sanitize(val, maxLen) {
  if (val === null || val === undefined) return '';
  return String(val)
    .trim()
    .replace(/[<>"'`]/g, '')
    .slice(0, maxLen);
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Test manuel depuis l'éditeur Apps Script ──
function testDoPost() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        prenom:  'Jean',
        nom:     'Test',
        email:   'jean.test@exemple.com',
        message: 'Ceci est un message de test depuis l\'éditeur.',
      }),
    },
  };
  Logger.log(doPost(mockEvent).getContent());
}
