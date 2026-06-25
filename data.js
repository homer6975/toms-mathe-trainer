// ============================================
// TOMS MATHE-TRAINER - Mathe-Arbeit 4
// Themen: LGS & Prisma
// ============================================

const THEMEN = [
  { id: "lgs", name: "LGS", icon: "📐", farbe: "#4A90D9" },
  { id: "prisma", name: "Prisma", icon: "📦", farbe: "#E8975C" }
];

// ============================================
// ERKLÄRUNGEN (Lern-Modus)
// ============================================

const ERKLAERUNGEN = {
  lgs: [
    {
      titel: "🤔 Was ist ein LGS?",
      inhalt: `
        <p><strong>LGS</strong> heißt <strong>Lineares Gleichungssystem</strong>.</p>
        <p>Das sind <strong>zwei Gleichungen</strong> mit <strong>zwei Unbekannten</strong> (x und y).</p>
        <div class="merkbox">
          <p>👉 Beispiel:</p>
          <p class="formel">x + y = 10</p>
          <p class="formel">x − y = 2</p>
        </div>
        <p>Du suchst die <strong>eine</strong> Lösung für x und y, die <strong>in beiden Gleichungen</strong> passt.</p>
        <div class="analogie">
          🧩 <strong>Stell dir vor:</strong> Zwei Freunde geben dir zwei Hinweise.
          Erst wenn du <strong>beide Hinweise</strong> zusammen nutzt, findest du die richtige Antwort.
        </div>
      `
    },
    {
      titel: "1️⃣ Das Einsetzungsverfahren",
      inhalt: `
        <p>Du <strong>löst eine Gleichung nach einer Variable auf</strong> und setzt sie in die andere ein.</p>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">1</span> Eine Gleichung nach x oder y auflösen</div>
          <div class="schritt"><span class="schrittnummer">2</span> Diesen Ausdruck in die andere Gleichung <strong>einsetzen</strong></div>
          <div class="schritt"><span class="schrittnummer">3</span> Die neue Gleichung lösen</div>
          <div class="schritt"><span class="schrittnummer">4</span> Ergebnis in eine Ausgangsgleichung einsetzen → 2. Variable berechnen</div>
        </div>
        <div class="merkbox">
          <p class="formel">I: y = x + 3</p>
          <p class="formel">II: 2x + y = 12</p>
          <p>👉 y aus I in II einsetzen:</p>
          <p class="formel">2x + (x + 3) = 12 → x = 3</p>
          <p>👉 x = 3 in I einsetzen: y = 6</p>
        </div>
        <div class="tipp">💡 <strong>Tipp:</strong> Nutze dieses Verfahren, wenn schon eine Variable allein steht (z.B. "y = ...").</div>
      `
    },
    {
      titel: "2️⃣ Das Gleichsetzungsverfahren",
      inhalt: `
        <p>Beide Gleichungen werden nach <strong>derselben Variable</strong> aufgelöst. Dann setzt du die rechten Seiten <strong>gleich</strong>.</p>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">1</span> Beide Gleichungen nach z.B. y auflösen</div>
          <div class="schritt"><span class="schrittnummer">2</span> Die beiden rechten Seiten gleichsetzen</div>
          <div class="schritt"><span class="schrittnummer">3</span> Gleichung lösen → x berechnen</div>
          <div class="schritt"><span class="schrittnummer">4</span> x einsetzen → y berechnen</div>
        </div>
        <div class="merkbox">
          <p class="formel">I: y = 2x + 1</p>
          <p class="formel">II: y = −x + 7</p>
          <p>👉 Gleichsetzen:</p>
          <p class="formel">2x + 1 = −x + 7 → x = 2</p>
          <p>👉 x = 2 in I: y = 5</p>
        </div>
        <div class="tipp">💡 <strong>Tipp:</strong> Praktisch, wenn <strong>beide</strong> Gleichungen schon nach y aufgelöst sind.</div>
      `
    },
    {
      titel: "3️⃣ Das Additionsverfahren",
      inhalt: `
        <p>Du <strong>addierst oder subtrahierst</strong> die beiden Gleichungen, damit eine Variable <strong>wegfällt</strong>.</p>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">1</span> Gleichungen ggf. so multiplizieren, dass x oder y gleiche Zahl (mit anderem Vorzeichen) hat</div>
          <div class="schritt"><span class="schrittnummer">2</span> Beide Gleichungen addieren (eine Variable fällt weg)</div>
          <div class="schritt"><span class="schrittnummer">3</span> Übrig gebliebene Gleichung lösen</div>
          <div class="schritt"><span class="schrittnummer">4</span> Ergebnis einsetzen → 2. Variable berechnen</div>
        </div>
        <div class="merkbox">
          <p class="formel">I: x + y = 10</p>
          <p class="formel">II: x − y = 2</p>
          <p>👉 I + II (y fällt weg):</p>
          <p class="formel">2x = 12 → x = 6</p>
          <p>👉 x = 6 in I: y = 4</p>
        </div>
        <div class="tipp">💡 <strong>Tipp:</strong> Achte auf die <strong>Vorzeichen</strong> – das ist die häufigste Fehlerquelle!</div>
      `
    },
    {
      titel: "🔢 Wie viele Lösungen kann ein LGS haben?",
      inhalt: `
        <p>Ein LGS kann <strong>drei verschiedene</strong> Lösungsfälle haben:</p>
        <div class="faelle">
          <div class="fall fall-eins">
            <div class="fallicon">✅</div>
            <strong>Genau eine Lösung</strong>
            <p>Die zwei Geraden schneiden sich in <strong>einem Punkt</strong>.</p>
          </div>
          <div class="fall fall-keine">
            <div class="fallicon">❌</div>
            <strong>Keine Lösung</strong>
            <p>Die Geraden sind <strong>parallel</strong> (gleiche Steigung, kein Schnittpunkt).</p>
          </div>
          <div class="fall fall-unendlich">
            <div class="fallicon">♾️</div>
            <strong>Unendlich viele Lösungen</strong>
            <p>Beide Gleichungen beschreiben <strong>dieselbe Gerade</strong>.</p>
          </div>
        </div>
        <div class="analogie">
          🛣️ <strong>Stell dir zwei Straßen vor:</strong><br>
          Kreuzen sie sich? → 1 Lösung.<br>
          Laufen sie nebeneinander her? → keine Lösung.<br>
          Sind es dieselbe Straße? → unendlich viele Lösungen.
        </div>
        <div class="tipp">💡 <strong>Erkennen ohne Zeichnen:</strong> Beim Rechnen fällt bei "keine Lösung" eine <strong>falsche Aussage</strong> heraus (z.B. 0 = 5). Bei "unendlich viele" eine <strong>wahre Aussage</strong> (z.B. 0 = 0).</div>
      `
    }
  ],
  prisma: [
    {
      titel: "📦 Was ist ein Prisma?",
      inhalt: `
        <p>Ein <strong>Prisma</strong> ist ein Körper mit:</p>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">•</span> zwei <strong>gleichen, parallelen</strong> Grundflächen (z.B. Dreieck, Sechseck)</div>
          <div class="schritt"><span class="schrittnummer">•</span> rechteckigen <strong>Seitenflächen (Mantel)</strong>, die die beiden Grundflächen verbinden</div>
        </div>
        <div class="analogie">
          🍫 <strong>Stell dir einen Schokoriegel</strong> mit Dreieck-Querschnitt vor (Toblerone!).
          Vorne und hinten ist das gleiche Dreieck – das sind die <strong>Grundflächen</strong>.
          Die Seiten dazwischen sind der <strong>Mantel</strong>.
        </div>
        <div class="merkbox">
          <p>👉 Die Grundfläche bestimmt den Namen:</p>
          <p>Dreieck-Grundfläche = <strong>Dreiecksprisma</strong></p>
          <p>Sechseck-Grundfläche = <strong>Sechseckprisma</strong></p>
        </div>
      `
    },
    {
      titel: "🟦 Die Oberfläche berechnen",
      inhalt: `
        <p>Die <strong>Oberfläche</strong> ist die Fläche, die du sehen würdest, wenn du das Prisma <strong>komplett auseinanderfaltest</strong> (Netz).</p>
        <div class="merkbox">
          <p class="formel">O = 2 · G + M</p>
          <p>G = Grundfläche (einmal!)</p>
          <p>M = Mantelfläche (alle Seitenflächen zusammen)</p>
        </div>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">1</span> Grundfläche G berechnen (z.B. Dreiecksfläche)</div>
          <div class="schritt"><span class="schrittnummer">2</span> Mantelfläche M berechnen = Umfang der Grundfläche · Höhe des Prismas</div>
          <div class="schritt"><span class="schrittnummer">3</span> Alles einsetzen: O = 2·G + M</div>
        </div>
        <div class="analogie">
          🎁 <strong>Geschenkpapier-Trick:</strong> Die Oberfläche ist genau so viel Papier,
          wie du brauchst, um das ganze Prisma einzupacken – oben, unten und rundherum.
        </div>
        <div class="tipp">💡 <strong>Tipp:</strong> Zeichne dir das <strong>Netz</strong> (die Abwicklung) auf – dann siehst du sofort, welche Flächen du brauchst.</div>
      `
    },
    {
      titel: "🧊 Das Volumen berechnen",
      inhalt: `
        <p>Das <strong>Volumen</strong> ist, wie viel <strong>Platz im Inneren</strong> des Prismas ist.</p>
        <div class="merkbox">
          <p class="formel">V = G · h</p>
          <p>G = Grundfläche</p>
          <p>h = Höhe des Prismas (Abstand zwischen den beiden Grundflächen)</p>
        </div>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">1</span> Grundfläche G berechnen</div>
          <div class="schritt"><span class="schrittnummer">2</span> G mit der Prisma-Höhe h multiplizieren</div>
        </div>
        <div class="analogie">
          💧 <strong>Wasser-Trick:</strong> Stell dir vor, du füllst das Prisma mit Wasser.
          Das Volumen ist, wie viel Wasser hineinpasst.
          Erst die "Bodenfläche" (G), dann mal "wie hoch das Becken ist" (h).
        </div>
        <div class="tipp">⚠️ <strong>Achtung – häufiger Fehler:</strong> Die Höhe h des Prismas ist <strong>nicht</strong> dasselbe wie die Höhe der Grundfläche-Figur! Genau hinschauen, welche Höhe gemeint ist.</div>
      `
    },
    {
      titel: "🔁 Zusammenfassung & Rückspiegel",
      inhalt: `
        <p>Die wichtigsten Formeln auf einen Blick:</p>
        <div class="merkbox">
          <p class="formel">Oberfläche: O = 2 · G + M</p>
          <p class="formel">Volumen: V = G · h</p>
          <p class="formel">Mantelfläche: M = U · h</p>
          <p>(U = Umfang der Grundfläche, h = Prisma-Höhe)</p>
        </div>
        <div class="faelle">
          <div class="fall fall-eins">
            <div class="fallicon">📐</div>
            <strong>Grundfläche G</strong>
            <p>Fläche der Vorder-/Rückseite (z.B. Dreiecksfläche)</p>
          </div>
          <div class="fall fall-keine">
            <div class="fallicon">📏</div>
            <strong>Umfang U</strong>
            <p>Rand der Grundfläche – einmal außen herum</p>
          </div>
          <div class="fall fall-unendlich">
            <div class="fallicon">📦</div>
            <strong>Höhe h</strong>
            <p>Abstand der beiden Grundflächen voneinander</p>
          </div>
        </div>
        <div class="tipp">💡 <strong>Merksatz:</strong> "Erst die Form anschauen (G und U), dann mit der Prisma-Höhe (h) weiterrechnen."</div>
      `
    }
  ]
};

// ============================================
// KARTEIKARTEN (Flashcards)
// ============================================

const KARTEIKARTEN = {
  lgs: [
    { frage: "Was bedeutet LGS?", antwort: "Lineares Gleichungssystem – zwei Gleichungen mit zwei Unbekannten (x und y)" },
    { frage: "Wie heißen die 3 Lösungsverfahren für LGS?", antwort: "Einsetzungsverfahren, Gleichsetzungsverfahren, Additionsverfahren" },
    { frage: "Wann nutzt man das Einsetzungsverfahren am besten?", antwort: "Wenn eine Variable in einer Gleichung schon allein steht (z.B. y = ...)" },
    { frage: "Wann nutzt man das Gleichsetzungsverfahren am besten?", antwort: "Wenn beide Gleichungen schon nach derselben Variable aufgelöst sind" },
    { frage: "Was macht man beim Additionsverfahren?", antwort: "Beide Gleichungen addieren oder subtrahieren, damit eine Variable wegfällt" },
    { frage: "Wie viele Lösungsfälle kann ein LGS haben?", antwort: "Drei: genau eine Lösung, keine Lösung, unendlich viele Lösungen" },
    { frage: "Wann hat ein LGS keine Lösung?", antwort: "Wenn die zwei Geraden parallel sind (kein Schnittpunkt)" },
    { frage: "Wann hat ein LGS unendlich viele Lösungen?", antwort: "Wenn beide Gleichungen dieselbe Gerade beschreiben" },
    { frage: "Woran erkennt man rechnerisch 'keine Lösung'?", antwort: "Es entsteht eine falsche Aussage, z.B. 0 = 5" },
    { frage: "Woran erkennt man rechnerisch 'unendlich viele Lösungen'?", antwort: "Es entsteht eine wahre Aussage, z.B. 0 = 0" },
    { frage: "Was ist der letzte Schritt bei allen 3 Verfahren?", antwort: "Das berechnete x (oder y) in eine Ausgangsgleichung einsetzen, um die zweite Variable zu finden" },
    { frage: "Was bedeutet geometrisch die Lösung eines LGS?", antwort: "Der Schnittpunkt der zwei Geraden im Koordinatensystem" }
  ],
  prisma: [
    { frage: "Was ist ein Prisma?", antwort: "Ein Körper mit zwei gleichen, parallelen Grundflächen und rechteckigen Seitenflächen (Mantel)" },
    { frage: "Wie lautet die Formel für das Volumen?", antwort: "V = G · h (Grundfläche mal Höhe des Prismas)" },
    { frage: "Wie lautet die Formel für die Oberfläche?", antwort: "O = 2 · G + M (zwei Grundflächen plus Mantelfläche)" },
    { frage: "Wie berechnet man die Mantelfläche M?", antwort: "M = U · h (Umfang der Grundfläche mal Höhe des Prismas)" },
    { frage: "Was ist die Grundfläche G?", antwort: "Die Fläche der Vorder- bzw. Rückseite des Prismas (z.B. ein Dreieck)" },
    { frage: "Was ist der Umfang U bei einem Prisma?", antwort: "Der Rand der Grundfläche – einmal komplett außen herum gemessen" },
    { frage: "Was ist die Höhe h eines Prismas?", antwort: "Der Abstand zwischen den beiden Grundflächen (nicht die Höhe der Grundflächen-Figur!)" },
    { frage: "Wie heißt ein Prisma mit Dreieck als Grundfläche?", antwort: "Dreiecksprisma" },
    { frage: "Was ist der häufigste Fehler beim Volumen?", antwort: "Die Prisma-Höhe h mit der Höhe der Grundflächen-Figur zu verwechseln" },
    { frage: "Wie nennt man die auseinandergefaltete Form eines Prismas?", antwort: "Das Netz (Abwicklung)" },
    { frage: "Was misst die Oberfläche anschaulich?", antwort: "Wie viel Papier man braucht, um das ganze Prisma einzupacken" },
    { frage: "Was misst das Volumen anschaulich?", antwort: "Wie viel Wasser ins Innere des Prismas passt" }
  ]
};

// ============================================
// QUIZ (Multiple Choice)
// ============================================

const QUIZ = {
  lgs: [
    {
      frage: "Löse mit dem Einsetzungsverfahren: I: y = x + 2, II: 2x + y = 11",
      antworten: ["x = 3, y = 5", "x = 5, y = 3", "x = 4, y = 6", "x = 2, y = 4"],
      richtig: 0,
      erklaerung: "y aus I in II einsetzen: 2x + (x+2) = 11 → 3x = 9 → x = 3. Dann y = 3+2 = 5."
    },
    {
      frage: "Welches Verfahren passt am besten zu: I: y = 3x − 1, II: y = −2x + 9 ?",
      antworten: ["Additionsverfahren", "Gleichsetzungsverfahren", "Einsetzungsverfahren", "Keines davon"],
      richtig: 1,
      erklaerung: "Beide Gleichungen sind schon nach y aufgelöst – ideal für das Gleichsetzungsverfahren: 3x−1 = −2x+9."
    },
    {
      frage: "Löse mit dem Additionsverfahren: I: x + y = 8, II: x − y = 2",
      antworten: ["x = 5, y = 3", "x = 4, y = 4", "x = 3, y = 5", "x = 6, y = 2"],
      richtig: 0,
      erklaerung: "I + II: 2x = 10 → x = 5. Dann in I: 5 + y = 8 → y = 3."
    },
    {
      frage: "Beim Lösen entsteht die Aussage 0 = 7. Was bedeutet das?",
      antworten: ["Unendlich viele Lösungen", "Keine Lösung", "Genau eine Lösung", "Rechenfehler, nochmal rechnen"],
      richtig: 1,
      erklaerung: "Eine falsche Aussage (0 = 7 ist nie wahr) bedeutet: Das LGS hat keine Lösung. Die Geraden sind parallel."
    },
    {
      frage: "Beim Lösen entsteht die Aussage 4 = 4. Was bedeutet das?",
      antworten: ["Keine Lösung", "Genau eine Lösung", "Unendlich viele Lösungen", "Das LGS ist falsch gestellt"],
      richtig: 2,
      erklaerung: "Eine wahre Aussage (4 = 4 stimmt immer) bedeutet: Beide Gleichungen beschreiben dieselbe Gerade → unendlich viele Lösungen."
    },
    {
      frage: "Was ist beim Additionsverfahren der wichtigste Schritt vorab, wenn die Variablen nicht direkt wegfallen?",
      antworten: ["Eine Gleichung weglassen", "Eine oder beide Gleichungen mit einer Zahl multiplizieren", "Beide Gleichungen durch 2 teilen", "x und y vertauschen"],
      richtig: 1,
      erklaerung: "Man multipliziert so, dass eine Variable in beiden Gleichungen den gleichen Betrag (aber unterschiedliches Vorzeichen) hat – dann fällt sie beim Addieren weg."
    },
    {
      frage: "Geometrisch betrachtet: Was ist die Lösung eines LGS mit 2 Variablen?",
      antworten: ["Der Mittelpunkt der zwei Geraden", "Der Schnittpunkt der zwei Geraden", "Die Steigung der Geraden", "Der y-Achsenabschnitt"],
      richtig: 1,
      erklaerung: "Die Lösung (x,y) ist genau der Punkt, an dem sich die beiden Geraden im Koordinatensystem schneiden."
    },
    {
      frage: "Löse mit dem Gleichsetzungsverfahren: I: y = x + 1, II: y = 2x − 3",
      antworten: ["x = 4, y = 5", "x = 2, y = 1", "x = 4, y = 4", "x = 3, y = 4"],
      richtig: 0,
      erklaerung: "Gleichsetzen: x+1 = 2x−3 → 4 = x. Dann y = x+1 = 5."
    }
  ],
  prisma: [
    {
      frage: "Ein Dreiecksprisma hat Grundfläche G = 12 cm² und Höhe h = 5 cm. Wie groß ist das Volumen?",
      antworten: ["60 cm³", "17 cm³", "30 cm³", "120 cm³"],
      richtig: 0,
      erklaerung: "V = G · h = 12 cm² · 5 cm = 60 cm³."
    },
    {
      frage: "Was brauchst du zusätzlich zur Grundfläche, um die Oberfläche eines Prismas zu berechnen?",
      antworten: ["Nur die Höhe h", "Die Mantelfläche M", "Das Volumen V", "Den Radius"],
      richtig: 1,
      erklaerung: "O = 2 · G + M. Du brauchst die Grundfläche zweimal und zusätzlich die Mantelfläche."
    },
    {
      frage: "Ein Prisma hat eine Grundfläche mit Umfang U = 18 cm und Höhe h = 6 cm. Wie groß ist die Mantelfläche?",
      antworten: ["108 cm²", "24 cm²", "54 cm²", "12 cm²"],
      richtig: 0,
      erklaerung: "M = U · h = 18 cm · 6 cm = 108 cm²."
    },
    {
      frage: "Was ist der Unterschied zwischen der Höhe h eines Prismas und der Höhe der Grundflächen-Figur?",
      antworten: ["Es gibt keinen Unterschied", "h ist der Abstand der zwei Grundflächen, die andere Höhe gehört zur Form selbst (z.B. Dreieckshöhe)", "h ist immer kleiner", "h wird nur für die Oberfläche gebraucht"],
      richtig: 1,
      erklaerung: "Die Prisma-Höhe h misst den Abstand zwischen den beiden parallelen Grundflächen. Die Höhe der Grundflächen-Figur (z.B. Dreieckshöhe) ist etwas ganz anderes und wird nur für die Berechnung von G gebraucht."
    },
    {
      frage: "Ein Dreiecksprisma: Grundfläche (Dreieck) = 8 cm², Umfang der Grundfläche = 14 cm, Prisma-Höhe = 4 cm. Wie groß ist die Oberfläche?",
      antworten: ["72 cm²", "56 cm²", "88 cm²", "16 cm²"],
      richtig: 0,
      erklaerung: "M = U · h = 14 · 4 = 56 cm². O = 2·G + M = 2·8 + 56 = 16 + 56 = 72 cm²."
    },
    {
      frage: "Welche Aussage über ein Prisma ist richtig?",
      antworten: ["Die zwei Grundflächen sind unterschiedlich groß", "Die zwei Grundflächen sind gleich und parallel", "Ein Prisma hat nur eine Grundfläche", "Der Mantel besteht immer aus Dreiecken"],
      richtig: 1,
      erklaerung: "Ein Prisma hat per Definition zwei gleiche, parallele Grundflächen. Der Mantel besteht aus Rechtecken (nicht Dreiecken)."
    },
    {
      frage: "Wofür steht U in der Formel M = U · h?",
      antworten: ["Umfang der Grundfläche", "Unbekannte Variable", "Umfang des Mantels", "Untere Fläche"],
      richtig: 0,
      erklaerung: "U steht für den Umfang der Grundfläche – also den Rand der Grundfläche einmal komplett außen herum."
    },
    {
      frage: "Ein Becken in Form eines Sechseckprismas soll mit Wasser gefüllt werden. Welche Größe brauchst du dafür?",
      antworten: ["Die Oberfläche", "Den Umfang", "Das Volumen", "Die Mantelfläche"],
      richtig: 2,
      erklaerung: "Wie viel Wasser hineinpasst, ist genau das Volumen (V = G · h)."
    }
  ]
};

// ============================================
// EXPORT
// ============================================
if (typeof module !== "undefined") {
  module.exports = { THEMEN, ERKLAERUNGEN, KARTEIKARTEN, QUIZ };
}
