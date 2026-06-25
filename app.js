// ============================================
// TOMS MATHE-TRAINER - App-Logik
// ============================================

// --- Zustand ---
let aktuellesThema = null;
let aktuellerModus = null; // 'lernen' | 'karten' | 'quiz'

let kartenIndex = 0;
let kartenGemischt = [];
let kartenUmgedreht = false;

let quizIndex = 0;
let quizFragen = [];
let quizPunkte = 0;
let quizBeantwortet = false;
let quizAntwortGewaehlt = null;

// --- Hilfsfunktionen ---
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function $(id) {
  return document.getElementById(id);
}

// ============================================
// START / NAVIGATION
// ============================================

function zeigeStartseite() {
  aktuellesThema = null;
  aktuellerModus = null;
  $("app").innerHTML = renderStartseite();
}

function renderStartseite() {
  return `
    <div class="startseite">
      <header class="kopf">
        <div class="kopf-emoji">🧮</div>
        <h1>Toms Mathe-Trainer</h1>
        <p class="kopf-sub">Mathe-Arbeit 4 · 30.06.26</p>
      </header>

      <div class="themen-grid">
        ${THEMEN.map(t => `
          <button class="themen-karte" style="--farbe:${t.farbe}" onclick="waehleThema('${t.id}')">
            <div class="themen-icon">${t.icon}</div>
            <div class="themen-name">${t.name}</div>
          </button>
        `).join("")}
      </div>

      <p class="hinweis">👉 Wähle ein Thema aus, um zu starten!</p>
    </div>
  `;
}

function waehleThema(themaId) {
  aktuellesThema = themaId;
  $("app").innerHTML = renderModusAuswahl(themaId);
}

function renderModusAuswahl(themaId) {
  const thema = THEMEN.find(t => t.id === themaId);
  return `
    <div class="modus-auswahl" style="--farbe:${thema.farbe}">
      <button class="zurueck-btn" onclick="zeigeStartseite()">← Zurück</button>
      <header class="kopf">
        <div class="kopf-emoji">${thema.icon}</div>
        <h1>${thema.name}</h1>
      </header>

      <div class="modus-liste">
        <button class="modus-karte" onclick="starteLernen('${themaId}')">
          <div class="modus-icon">📖</div>
          <div class="modus-text">
            <div class="modus-titel">Erklärung lesen</div>
            <div class="modus-desc">Schritt für Schritt verstehen</div>
          </div>
        </button>
        <button class="modus-karte" onclick="starteKarten('${themaId}')">
          <div class="modus-icon">🔄</div>
          <div class="modus-text">
            <div class="modus-titel">Karteikarten üben</div>
            <div class="modus-desc">Frage → Antwort umdrehen</div>
          </div>
        </button>
        <button class="modus-karte" onclick="starteQuiz('${themaId}')">
          <div class="modus-icon">✅</div>
          <div class="modus-text">
            <div class="modus-titel">Quiz machen</div>
            <div class="modus-desc">Mit Erklärung bei jeder Antwort</div>
          </div>
        </button>
      </div>
    </div>
  `;
}

// ============================================
// LERN-MODUS (Erklärungen)
// ============================================

let lernIndex = 0;

function starteLernen(themaId) {
  aktuellesThema = themaId;
  aktuellerModus = "lernen";
  lernIndex = 0;
  renderLernen();
}

function renderLernen() {
  const thema = THEMEN.find(t => t.id === aktuellesThema);
  const seiten = ERKLAERUNGEN[aktuellesThema];
  const seite = seiten[lernIndex];

  $("app").innerHTML = `
    <div class="lern-ansicht" style="--farbe:${thema.farbe}">
      <button class="zurueck-btn" onclick="waehleThema('${aktuellesThema}')">← Zurück</button>

      <div class="fortschritt-leiste">
        <div class="fortschritt-text">${lernIndex + 1} / ${seiten.length}</div>
        <div class="fortschritt-balken">
          <div class="fortschritt-fuellung" style="width:${((lernIndex + 1) / seiten.length) * 100}%"></div>
        </div>
      </div>

      <div class="lern-karte">
        <h2>${seite.titel}</h2>
        <div class="lern-inhalt">${seite.inhalt}</div>
      </div>

      <div class="lern-navigation">
        <button class="nav-btn" ${lernIndex === 0 ? "disabled" : ""} onclick="lernZurueck()">⬅️ Zurück</button>
        ${lernIndex < seiten.length - 1
          ? `<button class="nav-btn nav-btn-primary" onclick="lernWeiter()">Weiter ➡️</button>`
          : `<button class="nav-btn nav-btn-primary" onclick="waehleThema('${aktuellesThema}')">Fertig 🎉</button>`
        }
      </div>
    </div>
  `;
}

function lernWeiter() {
  const seiten = ERKLAERUNGEN[aktuellesThema];
  if (lernIndex < seiten.length - 1) {
    lernIndex++;
    renderLernen();
  }
}

function lernZurueck() {
  if (lernIndex > 0) {
    lernIndex--;
    renderLernen();
  }
}

// ============================================
// KARTEIKARTEN-MODUS
// ============================================

function starteKarten(themaId) {
  aktuellesThema = themaId;
  aktuellerModus = "karten";
  kartenGemischt = shuffle(KARTEIKARTEN[themaId]);
  kartenIndex = 0;
  kartenUmgedreht = false;
  renderKarten();
}

function renderKarten() {
  const thema = THEMEN.find(t => t.id === aktuellesThema);
  const karte = kartenGemischt[kartenIndex];

  $("app").innerHTML = `
    <div class="karten-ansicht" style="--farbe:${thema.farbe}">
      <button class="zurueck-btn" onclick="waehleThema('${aktuellesThema}')">← Zurück</button>

      <div class="fortschritt-leiste">
        <div class="fortschritt-text">Karte ${kartenIndex + 1} / ${kartenGemischt.length}</div>
        <div class="fortschritt-balken">
          <div class="fortschritt-fuellung" style="width:${((kartenIndex + 1) / kartenGemischt.length) * 100}%"></div>
        </div>
      </div>

      <div class="flip-karte ${kartenUmgedreht ? "umgedreht" : ""}" onclick="dreheKarte()">
        <div class="flip-innen">
          <div class="flip-vorne">
            <div class="flip-label">❓ FRAGE</div>
            <div class="flip-text">${karte.frage}</div>
            <div class="flip-hinweis">👆 Tippen zum Umdrehen</div>
          </div>
          <div class="flip-hinten">
            <div class="flip-label">✅ ANTWORT</div>
            <div class="flip-text">${karte.antwort}</div>
            <div class="flip-hinweis">👆 Tippen zum Zurückdrehen</div>
          </div>
        </div>
      </div>

      <div class="lern-navigation">
        <button class="nav-btn" ${kartenIndex === 0 ? "disabled" : ""} onclick="karteZurueck()">⬅️ Zurück</button>
        ${kartenIndex < kartenGemischt.length - 1
          ? `<button class="nav-btn nav-btn-primary" onclick="karteWeiter()">Weiter ➡️</button>`
          : `<button class="nav-btn nav-btn-primary" onclick="starteKarten('${aktuellesThema}')">Neu mischen 🔀</button>`
        }
      </div>
    </div>
  `;
}

function dreheKarte() {
  kartenUmgedreht = !kartenUmgedreht;
  const el = document.querySelector(".flip-karte");
  if (el) el.classList.toggle("umgedreht");
}

function karteWeiter() {
  if (kartenIndex < kartenGemischt.length - 1) {
    kartenIndex++;
    kartenUmgedreht = false;
    renderKarten();
  }
}

function karteZurueck() {
  if (kartenIndex > 0) {
    kartenIndex--;
    kartenUmgedreht = false;
    renderKarten();
  }
}

// ============================================
// QUIZ-MODUS
// ============================================

function starteQuiz(themaId) {
  aktuellesThema = themaId;
  aktuellerModus = "quiz";
  quizFragen = shuffle(QUIZ[themaId]);
  quizIndex = 0;
  quizPunkte = 0;
  quizBeantwortet = false;
  quizAntwortGewaehlt = null;
  renderQuiz();
}

function renderQuiz() {
  const thema = THEMEN.find(t => t.id === aktuellesThema);
  const frage = quizFragen[quizIndex];

  $("app").innerHTML = `
    <div class="quiz-ansicht" style="--farbe:${thema.farbe}">
      <button class="zurueck-btn" onclick="waehleThema('${aktuellesThema}')">← Zurück</button>

      <div class="fortschritt-leiste">
        <div class="fortschritt-text">Frage ${quizIndex + 1} / ${quizFragen.length} · ⭐ ${quizPunkte} Punkte</div>
        <div class="fortschritt-balken">
          <div class="fortschritt-fuellung" style="width:${((quizIndex + 1) / quizFragen.length) * 100}%"></div>
        </div>
      </div>

      <div class="quiz-karte">
        <h2 class="quiz-frage">${frage.frage}</h2>
        <div class="quiz-antworten">
          ${frage.antworten.map((antwort, i) => `
            <button class="quiz-antwort-btn ${quizBeantwortet ? antwortKlasse(i, frage) : ""}"
                    ${quizBeantwortet ? "disabled" : ""}
                    onclick="waehleAntwort(${i})">
              ${antwort}
            </button>
          `).join("")}
        </div>

        ${quizBeantwortet ? `
          <div class="quiz-erklaerung ${quizAntwortGewaehlt === frage.richtig ? "richtig" : "falsch"}">
            <div class="quiz-erklaerung-icon">${quizAntwortGewaehlt === frage.richtig ? "🎉 Richtig!" : "💡 Nicht ganz!"}</div>
            <p>${frage.erklaerung}</p>
          </div>
        ` : ""}
      </div>

      ${quizBeantwortet ? `
        <div class="lern-navigation">
          ${quizIndex < quizFragen.length - 1
            ? `<button class="nav-btn nav-btn-primary" onclick="quizWeiter()">Nächste Frage ➡️</button>`
            : `<button class="nav-btn nav-btn-primary" onclick="zeigeQuizErgebnis()">Ergebnis ansehen 🏁</button>`
          }
        </div>
      ` : ""}
    </div>
  `;
}

function antwortKlasse(i, frage) {
  if (i === frage.richtig) return "richtig-antwort";
  if (i === quizAntwortGewaehlt) return "falsch-antwort";
  return "";
}

function waehleAntwort(i) {
  if (quizBeantwortet) return;
  quizBeantwortet = true;
  quizAntwortGewaehlt = i;
  if (i === quizFragen[quizIndex].richtig) {
    quizPunkte++;
  }
  renderQuiz();
}

function quizWeiter() {
  quizIndex++;
  quizBeantwortet = false;
  quizAntwortGewaehlt = null;
  renderQuiz();
}

function zeigeQuizErgebnis() {
  const thema = THEMEN.find(t => t.id === aktuellesThema);
  const prozent = Math.round((quizPunkte / quizFragen.length) * 100);
  let nachricht, emoji;

  if (prozent === 100) {
    nachricht = "Perfekt! Du hast alles richtig! 🌟";
    emoji = "🏆";
  } else if (prozent >= 75) {
    nachricht = "Super gemacht! Du kennst dich schon richtig gut aus!";
    emoji = "🎉";
  } else if (prozent >= 50) {
    nachricht = "Guter Start! Schau dir die Erklärung nochmal an, dann wird's noch besser.";
    emoji = "💪";
  } else {
    nachricht = "Kein Problem! Lies die Erklärung nochmal in Ruhe durch und übe weiter.";
    emoji = "🌱";
  }

  $("app").innerHTML = `
    <div class="ergebnis-ansicht" style="--farbe:${thema.farbe}">
      <div class="ergebnis-emoji">${emoji}</div>
      <h1>${quizPunkte} / ${quizFragen.length} Punkte</h1>
      <p class="ergebnis-prozent">${prozent}%</p>
      <p class="ergebnis-nachricht">${nachricht}</p>

      <div class="ergebnis-navigation">
        <button class="nav-btn nav-btn-primary" onclick="starteQuiz('${aktuellesThema}')">🔁 Nochmal versuchen</button>
        <button class="nav-btn" onclick="starteLernen('${aktuellesThema}')">📖 Erklärung lesen</button>
        <button class="nav-btn" onclick="zeigeStartseite()">🏠 Zur Startseite</button>
      </div>
    </div>
  `;
}

// ============================================
// INIT
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  zeigeStartseite();
});
