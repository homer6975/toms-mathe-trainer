// ============================================
// TOMS MATHE-TRAINER - Mathe-Arbeit 4
// Themen: LGS & Prisma
// Angepasst an Schulbuch S. 105-112 & S. 150-170
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
        <p>Das sind <strong>zwei Gleichungen</strong> mit denselben <strong>zwei Variablen</strong> (x und y).</p>
        <div class="merkbox">
          <p>👉 Beispiel:</p>
          <p class="formel">(1) x + y = 10</p>
          <p class="formel">(2) x − y = 2</p>
        </div>
        <p>Du suchst <strong>ein Zahlenpaar (x ; y)</strong>, das <strong>beide Gleichungen</strong> erfüllt.</p>
        <p>Im Schaubild ist die Lösung der <strong>Schnittpunkt S(x|y)</strong> der zwei zugehörigen Geraden.</p>
        <div class="analogie">
          🧩 <strong>Stell dir vor:</strong> Zwei Freunde geben dir zwei Hinweise.
          Erst wenn du <strong>beide Hinweise</strong> zusammen nutzt, findest du die richtige Antwort.
        </div>
        <div class="tipp">💡 Es gibt 3 Rechenverfahren, um ein LGS zu lösen: <strong>Gleichsetzung, Einsetzung, Addition</strong>. Du lernst sie auf den nächsten Seiten.</div>
      `
    },
    {
      titel: "1️⃣ Das Gleichsetzungsverfahren",
      inhalt: `
        <p>Man löst <strong>beide Gleichungen nach derselben Variable</strong> auf (z.B. nach y). Durch <strong>Gleichsetzen</strong> der Terme erhält man eine Gleichung mit nur einer Variable.</p>
        <div class="analogie">
          ⚖️ <strong>Waagen-Trick:</strong> Zwei Waagen sind im Gleichgewicht. Die linken Waagschalen sind identisch (z.B. beide ein Kürbis) – also müssen auch die rechten Waagschalen gleich schwer sein!
        </div>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">1</span> Beide Gleichungen nach y auflösen</div>
          <div class="schritt"><span class="schrittnummer">2</span> Die beiden rechten Terme <strong>gleichsetzen</strong></div>
          <div class="schritt"><span class="schrittnummer">3</span> Gleichung lösen → x berechnen</div>
          <div class="schritt"><span class="schrittnummer">4</span> Lösung in eine Gleichung einsetzen → y berechnen</div>
          <div class="schritt"><span class="schrittnummer">5</span> Lösung als Zahlenpaar angeben</div>
          <div class="schritt"><span class="schrittnummer">6</span> <strong>Probe:</strong> Beide Gleichungen müssen erfüllt sein!</div>
        </div>
        <div class="merkbox">
          <p class="formel">(1) 3y = 9x − 6 → y = 3x − 2</p>
          <p class="formel">(2) y − x = 1 → y = x + 1</p>
          <p>👉 Gleichsetzen: 3x − 2 = x + 1 → x = 1,5</p>
          <p>👉 x = 1,5 in (2'): y = 1,5 + 1 = 2,5</p>
          <p>Das Zahlenpaar (1,5 ; 2,5) ist die Lösung.</p>
        </div>
        <div class="tipp">💡 <strong>Tipp:</strong> Praktisch, wenn beide Gleichungen leicht nach y aufzulösen sind.</div>
      `
    },
    {
      titel: "2️⃣ Das Einsetzungsverfahren",
      inhalt: `
        <p>Man löst <strong>eine</strong> Gleichung nach einer Variable auf. Durch <strong>Einsetzen</strong> in die andere Gleichung erhält man eine Gleichung mit nur einer Variable.</p>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">1</span> Eine Gleichung nach einer Variable auflösen</div>
          <div class="schritt"><span class="schrittnummer">2</span> Diesen Term in die <strong>andere</strong> Gleichung einsetzen</div>
          <div class="schritt"><span class="schrittnummer">3</span> Gleichung lösen (ausmultiplizieren, zusammenfassen)</div>
          <div class="schritt"><span class="schrittnummer">4</span> Lösung einsetzen → 2. Variable berechnen</div>
          <div class="schritt"><span class="schrittnummer">5</span> Lösung als Zahlenpaar angeben</div>
        </div>
        <div class="merkbox">
          <p class="formel">(1) 3x + 2y = 40</p>
          <p class="formel">(2) y − 2x = 6 → y = 2x + 6</p>
          <p>👉 (2') in (1) einsetzen:</p>
          <p class="formel">3x + 2(2x + 6) = 40</p>
          <p class="formel">3x + 4x + 12 = 40 → 7x = 28 → x = 4</p>
          <p>👉 x = 4 in (2'): y = 2·4 + 6 = 14</p>
          <p>Das Zahlenpaar (4 ; 14) ist die Lösung.</p>
        </div>
        <div class="tipp">⚠️ <strong>Achtung beim Einsetzen:</strong> Klammern setzen und richtig ausmultiplizieren! Das ist die häufigste Fehlerquelle.</div>
      `
    },
    {
      titel: "3️⃣ Das Additionsverfahren",
      inhalt: `
        <p>Man formt beide Gleichungen so um, dass beim <strong>Addieren</strong> beider Gleichungen eine Variable <strong>wegfällt</strong>.</p>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">1</span> Falls nötig: eine oder beide Gleichungen mit einer Zahl multiplizieren</div>
          <div class="schritt"><span class="schrittnummer">2</span> Beide Gleichungen addieren (eine Variable fällt weg)</div>
          <div class="schritt"><span class="schrittnummer">3</span> Übrig gebliebene Gleichung lösen</div>
          <div class="schritt"><span class="schrittnummer">4</span> Lösung in eine Gleichung einsetzen → 2. Variable berechnen</div>
          <div class="schritt"><span class="schrittnummer">5</span> Lösung als Zahlenpaar angeben</div>
        </div>
        <div class="merkbox">
          <p><strong>Beispiel a) direkt addieren:</strong></p>
          <p class="formel">(1) 5x + 2y = 36</p>
          <p class="formel">(2) 3x − 2y = 12</p>
          <p>👉 (1) + (2): 8x = 48 → x = 6</p>
          <p>👉 x = 6 in (1): y = 3</p>
          <p>Zahlenpaar (6 ; 3)</p>
        </div>
        <div class="merkbox">
          <p><strong>Beispiel b) erst multiplizieren:</strong></p>
          <p class="formel">(1) 3x + 2y = 8  | · 3</p>
          <p class="formel">(2) 5x − 3y = 7  | · 2</p>
          <p class="formel">(1') 9x + 6y = 24</p>
          <p class="formel">(2') 10x − 6y = 14</p>
          <p>👉 (1') + (2'): 19x = 38 → x = 2</p>
        </div>
        <div class="tipp">💡 <strong>Tipp:</strong> Achte auf die <strong>Vorzeichen</strong> – das ist hier die häufigste Fehlerquelle! Man kann statt zu addieren auch <strong>subtrahieren</strong> (Subtraktionsverfahren), wenn das einfacher ist.</div>
      `
    },
    {
      titel: "🔢 Lösungsvielfalt: Wie viele Lösungen?",
      inhalt: `
        <p>Ein LGS mit zwei Variablen kann <strong>genau eine Lösung</strong>, <strong>keine Lösung</strong> oder <strong>unendlich viele Lösungen</strong> haben. Die Anzahl kann man an der <strong>Lage der zugehörigen Geraden</strong> ablesen.</p>
        <div class="faelle">
          <div class="fall fall-eins">
            <div class="fallicon">✅</div>
            <strong>Genau eine Lösung</strong>
            <p>Die Steigung m ist bei beiden Gleichungen <strong>unterschiedlich</strong>. Die Geraden schneiden sich in einem Punkt.</p>
          </div>
          <div class="fall fall-keine">
            <div class="fallicon">❌</div>
            <strong>Keine Lösung</strong>
            <p>Die Steigung m ist <strong>gleich</strong>, aber der y-Achsenabschnitt c ist <strong>unterschiedlich</strong>. Die Geraden sind parallel.</p>
          </div>
          <div class="fall fall-unendlich">
            <div class="fallicon">♾️</div>
            <strong>Unendlich viele Lösungen</strong>
            <p>Steigung m <strong>und</strong> y-Achsenabschnitt c sind bei beiden Gleichungen <strong>gleich</strong>. Die Geraden liegen aufeinander.</p>
          </div>
        </div>
        <div class="tipp">💡 <strong>Erkennen beim Rechnen (ohne zeichnen):</strong><br>
        Beim Gleichsetzen entsteht eine <strong>falsche Aussage</strong> (z.B. 1,5 = 0,5) → keine Lösung.<br>
        Beim Gleichsetzen entsteht eine <strong>wahre Aussage</strong> (z.B. −1 = −1) → unendlich viele Lösungen.</div>
        <div class="analogie">
          🛣️ <strong>Stell dir zwei Straßen vor:</strong><br>
          Unterschiedliche Richtung? → Sie kreuzen sich einmal (1 Lösung).<br>
          Gleiche Richtung, aber versetzt? → Sie laufen parallel (keine Lösung).<br>
          Gleiche Richtung UND genau übereinander? → Es ist dieselbe Straße (unendlich viele Lösungen).
        </div>
      `
    }
  ],
  prisma: [
    {
      titel: "📦 Was ist ein Prisma?",
      inhalt: `
        <p>Ein <strong>Prisma</strong> wird begrenzt durch die <strong>Grundfläche</strong>, die <strong>Deckfläche</strong> und die <strong>Mantelfläche</strong>.</p>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">•</span> Grundfläche und Deckfläche sind <strong>deckungsgleich</strong> (kongruent) und <strong>parallel</strong> zueinander</div>
          <div class="schritt"><span class="schrittnummer">•</span> Die Mantelfläche besteht aus <strong>Rechtecken</strong></div>
          <div class="schritt"><span class="schrittnummer">•</span> Der Abstand zwischen Grund- und Deckfläche ist die <strong>Körperhöhe h</strong></div>
        </div>
        <div class="analogie">
          🍫 <strong>Stell dir einen Schokoriegel</strong> mit Dreieck-Querschnitt vor (Toblerone!).
          Die zwei Dreiecke vorne und hinten sind <strong>Grund-</strong> und <strong>Deckfläche</strong>.
          Die Rechtecke dazwischen sind die <strong>Mantelfläche</strong>.
        </div>
        <div class="merkbox">
          <p>👉 Die Grundfläche gibt dem Prisma den Namen:</p>
          <p>Dreieck → <strong>Dreieckprisma</strong> · Sechseck → <strong>Sechseckprisma</strong></p>
        </div>
        <div class="tipp">💡 <strong>Achtung:</strong> Ein Prisma kann auf der Grundfläche <strong>stehen</strong> ODER auf einem Mantelrechteck <strong>liegen</strong> – das ändert nichts an den Formeln! Auch Quader und Würfel sind übrigens besondere Prismen.</div>
      `
    },
    {
      titel: "🟦 Der Oberflächeninhalt",
      inhalt: `
        <p>Grundfläche, Deckfläche und Mantelfläche bilden zusammen die <strong>Oberfläche</strong>. Faltet man sie in die Ebene, erhält man das <strong>Netz</strong> des Prismas.</p>
        <div class="merkbox">
          <p class="formel">Mantelflächeninhalt: M = u · h</p>
          <p>u = Umfang der Grundfläche, h = Körperhöhe</p>
          <p class="formel">Oberflächeninhalt: O = 2 · G + M</p>
          <p>(G und D sind gleich groß, deshalb "2 · G")</p>
        </div>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">1</span> Grundfläche G berechnen</div>
          <div class="schritt"><span class="schrittnummer">2</span> Umfang u der Grundfläche berechnen</div>
          <div class="schritt"><span class="schrittnummer">3</span> Mantelfläche M = u · h berechnen</div>
          <div class="schritt"><span class="schrittnummer">4</span> Oberfläche O = 2 · G + M berechnen</div>
        </div>
        <div class="merkbox">
          <p><strong>Beispiel (Dreieckprisma):</strong></p>
          <p class="formel">G = ½ · c · h_c = ½ · 4 · 3 = 6 cm²</p>
          <p class="formel">u = 5 + 3 + 4 = 12 cm</p>
          <p class="formel">M = u · h = 12 · 2,5 = 30 cm²</p>
          <p class="formel">O = 2 · 6 + 30 = 42 cm²</p>
        </div>
        <div class="analogie">
          🎁 <strong>Geschenkpapier-Trick:</strong> Die Oberfläche ist genau so viel Papier, wie du brauchst, um das Prisma komplett einzupacken.
        </div>
        <div class="tipp">💡 <strong>Tipp:</strong> Skizziere das <strong>Netz</strong> (Bandnetz oder Sternnetz) – dann siehst du sofort, welche Flächen du brauchst.</div>
      `
    },
    {
      titel: "🧊 Das Volumen",
      inhalt: `
        <p>Das <strong>Volumen</strong> sagt, wie viel <strong>Platz im Inneren</strong> des Prismas ist.</p>
        <div class="merkbox">
          <p class="formel">V = G · h</p>
          <p>G = Grundflächeninhalt, h = Körperhöhe</p>
        </div>
        <div class="schritte">
          <div class="schritt"><span class="schrittnummer">1</span> Grundfläche G berechnen</div>
          <div class="schritt"><span class="schrittnummer">2</span> G mit der Körperhöhe h multiplizieren</div>
        </div>
        <div class="merkbox">
          <p><strong>Beispiel (Trapezprisma):</strong></p>
          <p class="formel">G = ½ · (a + c) · h_T = ½ · (9 + 6) · 4 = 30 cm²</p>
          <p class="formel">V = G · h = 30 · 5 = 150 cm³</p>
        </div>
        <div class="merkbox">
          <p><strong>Rückwärts rechnen:</strong> V = 125 cm³, h = 5 cm. Wie groß ist G?</p>
          <p class="formel">V = G · h → 125 = G · 5 → G = 25 cm²</p>
        </div>
        <div class="analogie">
          💧 <strong>Wasser-Trick:</strong> Stell dir vor, du füllst das Prisma mit Wasser.
          Das Volumen ist, wie viel Wasser hineinpasst.
        </div>
        <div class="tipp">⚠️ <strong>Achtung – häufiger Fehler:</strong> Die <strong>Körperhöhe h</strong> des Prismas ist <strong>nicht</strong> dasselbe wie die Höhe der Grundflächen-Figur (z.B. h_T beim Trapez oder h_c beim Dreieck)! Genau hinschauen, welche Höhe gemeint ist.</div>
      `
    },
    {
      titel: "🔁 Zusammenfassung",
      inhalt: `
        <p>Die wichtigsten Begriffe und Formeln auf einen Blick:</p>
        <div class="merkbox">
          <p class="formel">Mantelflächeninhalt: M = u · h</p>
          <p class="formel">Oberflächeninhalt: O = 2 · G + M</p>
          <p class="formel">Volumen: V = G · h</p>
        </div>
        <div class="faelle">
          <div class="fall fall-eins">
            <div class="fallicon">📐</div>
            <strong>Grundfläche G</strong>
            <p>Fläche von Vorder- bzw. Rückseite (= Deckfläche D)</p>
          </div>
          <div class="fall fall-keine">
            <div class="fallicon">📏</div>
            <strong>Umfang u</strong>
            <p>Rand der Grundfläche – einmal außen herum</p>
          </div>
          <div class="fall fall-unendlich">
            <div class="fallicon">📦</div>
            <strong>Körperhöhe h</strong>
            <p>Abstand zwischen Grund- und Deckfläche</p>
          </div>
        </div>
        <div class="tipp">💡 <strong>Merksatz:</strong> "Erst die Form anschauen (G und u berechnen), dann mit der Körperhöhe h weiterrechnen."</div>
        <div class="tipp">📝 <strong>Sachaufgaben-Tipp:</strong> Bei Zelten, Dächern, Rampen oder Deichen im Querschnitt handelt es sich oft um Prismen! Erkenne zuerst die Grundfläche (meist ein Dreieck oder Trapez).</div>
      `
    }
  ]
};

// ============================================
// KARTEIKARTEN (Flashcards)
// ============================================

const KARTEIKARTEN = {
  lgs: [
    { frage: "Was bedeutet LGS?", antwort: "Lineares Gleichungssystem – zwei Gleichungen mit denselben zwei Variablen (x und y)" },
    { frage: "Wie heißen die 3 Lösungsverfahren für LGS?", antwort: "Gleichsetzungsverfahren, Einsetzungsverfahren, Additionsverfahren" },
    { frage: "Was macht man beim Gleichsetzungsverfahren?", antwort: "Beide Gleichungen nach derselben Variable auflösen, dann die rechten Terme gleichsetzen" },
    { frage: "Was macht man beim Einsetzungsverfahren?", antwort: "Eine Gleichung nach einer Variable auflösen und in die andere Gleichung einsetzen" },
    { frage: "Was macht man beim Additionsverfahren?", antwort: "Beide Gleichungen so umformen, dass beim Addieren eine Variable wegfällt" },
    { frage: "Wann nutzt man das Gleichsetzungsverfahren am besten?", antwort: "Wenn beide Gleichungen leicht nach derselben Variable aufzulösen sind" },
    { frage: "Wann nutzt man das Einsetzungsverfahren am besten?", antwort: "Wenn eine Variable in einer Gleichung schon allein steht (z.B. y = ...)" },
    { frage: "Wie viele Lösungsfälle kann ein LGS haben?", antwort: "Drei: genau eine Lösung, keine Lösung, unendlich viele Lösungen" },
    { frage: "Wann hat ein LGS genau eine Lösung?", antwort: "Wenn die Steigung m bei beiden Gleichungen unterschiedlich ist" },
    { frage: "Wann hat ein LGS keine Lösung?", antwort: "Wenn die Steigung m gleich ist, aber der y-Achsenabschnitt c unterschiedlich ist (Geraden parallel)" },
    { frage: "Wann hat ein LGS unendlich viele Lösungen?", antwort: "Wenn Steigung m UND y-Achsenabschnitt c bei beiden Gleichungen gleich sind" },
    { frage: "Woran erkennt man rechnerisch 'keine Lösung'?", antwort: "Beim Gleichsetzen entsteht eine falsche Aussage, z.B. 1,5 = 0,5" },
    { frage: "Woran erkennt man rechnerisch 'unendlich viele Lösungen'?", antwort: "Beim Gleichsetzen entsteht eine wahre Aussage, z.B. −1 = −1" },
    { frage: "Was ist der letzte Pflicht-Schritt nach dem Lösen eines LGS?", antwort: "Die Probe: Die Lösung in beide Ausgangsgleichungen einsetzen und prüfen" },
    { frage: "Was bedeutet geometrisch die Lösung eines LGS?", antwort: "Der Schnittpunkt S(x|y) der zwei zugehörigen Geraden" }
  ],
  prisma: [
    { frage: "Wodurch wird ein Prisma begrenzt?", antwort: "Durch die Grundfläche, die Deckfläche und die Mantelfläche" },
    { frage: "Welche Eigenschaften haben Grund- und Deckfläche?", antwort: "Sie sind deckungsgleich (kongruent) und liegen parallel zueinander" },
    { frage: "Woraus besteht die Mantelfläche eines Prismas?", antwort: "Aus Rechtecken" },
    { frage: "Wie lautet die Formel für das Volumen?", antwort: "V = G · h (Grundflächeninhalt mal Körperhöhe)" },
    { frage: "Wie lautet die Formel für den Oberflächeninhalt?", antwort: "O = 2 · G + M (zweimal Grundfläche plus Mantelflächeninhalt)" },
    { frage: "Wie berechnet man den Mantelflächeninhalt M?", antwort: "M = u · h (Umfang der Grundfläche mal Körperhöhe)" },
    { frage: "Was ist die Körperhöhe h?", antwort: "Der Abstand zwischen Grundfläche und Deckfläche" },
    { frage: "Wie heißt ein Prisma mit Dreieck als Grundfläche?", antwort: "Dreieckprisma" },
    { frage: "Was ist der häufigste Fehler beim Volumen?", antwort: "Die Körperhöhe h mit der Höhe der Grundflächen-Figur (z.B. h_T oder h_c) zu verwechseln" },
    { frage: "Wie nennt man die auseinandergefaltete Form eines Prismas?", antwort: "Das Netz – z.B. als Bandnetz oder Sternnetz" },
    { frage: "Kann ein Prisma auch liegen statt zu stehen?", antwort: "Ja – ein Prisma kann auf der Grundfläche stehen oder auf einem Mantelrechteck liegen" },
    { frage: "Was misst der Oberflächeninhalt anschaulich?", antwort: "Wie viel Papier man braucht, um das ganze Prisma einzupacken" },
    { frage: "Was misst das Volumen anschaulich?", antwort: "Wie viel Wasser ins Innere des Prismas passt" },
    { frage: "Welche zwei besonderen Prismen kennst du?", antwort: "Quader und Würfel" }
  ]
};

// ============================================
// QUIZ (Multiple Choice)
// ============================================

const QUIZ = {
  lgs: [
    {
      frage: "Löse mit dem Gleichsetzungsverfahren: (1) y = 2x + 1, (2) y = −x + 7",
      antworten: ["x = 2, y = 5", "x = 5, y = 2", "x = 3, y = 4", "x = 1, y = 6"],
      richtig: 0,
      erklaerung: "Gleichsetzen: 2x+1 = −x+7 → 3x = 6 → x = 2. Dann y = 2·2+1 = 5."
    },
    {
      frage: "Welches Verfahren passt am besten zu: (1) y = 3x − 1, (2) y = −2x + 9 ?",
      antworten: ["Additionsverfahren", "Gleichsetzungsverfahren", "Einsetzungsverfahren", "Keines davon"],
      richtig: 1,
      erklaerung: "Beide Gleichungen sind schon nach y aufgelöst – ideal für das Gleichsetzungsverfahren: 3x−1 = −2x+9."
    },
    {
      frage: "Löse mit dem Einsetzungsverfahren: (1) y = x + 2, (2) 2x + y = 11",
      antworten: ["x = 3, y = 5", "x = 5, y = 3", "x = 4, y = 6", "x = 2, y = 4"],
      richtig: 0,
      erklaerung: "y aus (1) in (2) einsetzen: 2x + (x+2) = 11 → 3x = 9 → x = 3. Dann y = 3+2 = 5."
    },
    {
      frage: "Löse mit dem Additionsverfahren: (1) x + y = 8, (2) x − y = 2",
      antworten: ["x = 5, y = 3", "x = 4, y = 4", "x = 3, y = 5", "x = 6, y = 2"],
      richtig: 0,
      erklaerung: "(1) + (2): 2x = 10 → x = 5. Dann in (1): 5 + y = 8 → y = 3."
    },
    {
      frage: "Beim Gleichsetzen entsteht die Aussage 1,5 = 0,5. Was bedeutet das?",
      antworten: ["Unendlich viele Lösungen", "Keine Lösung", "Genau eine Lösung", "Rechenfehler, nochmal rechnen"],
      richtig: 1,
      erklaerung: "Eine falsche Aussage (1,5 = 0,5 ist nie wahr) bedeutet: Das LGS hat keine Lösung. Die Geraden sind parallel (gleiche Steigung, anderer y-Achsenabschnitt)."
    },
    {
      frage: "Beim Gleichsetzen entsteht die Aussage −1 = −1. Was bedeutet das?",
      antworten: ["Keine Lösung", "Genau eine Lösung", "Unendlich viele Lösungen", "Das LGS ist falsch gestellt"],
      richtig: 2,
      erklaerung: "Eine wahre Aussage bedeutet: Beide Gleichungen beschreiben dieselbe Gerade (gleiche Steigung UND gleicher y-Achsenabschnitt) → unendlich viele Lösungen."
    },
    {
      frage: "(1) y = 2x − 3 und (2) y = 2x + 1. Wie viele Lösungen hat das LGS?",
      antworten: ["Genau eine Lösung", "Keine Lösung", "Unendlich viele Lösungen", "Das kann man nicht sagen"],
      richtig: 1,
      erklaerung: "Beide Geraden haben die gleiche Steigung (m = 2), aber unterschiedlichen y-Achsenabschnitt (−3 bzw. 1). Die Geraden sind parallel → keine Lösung."
    },
    {
      frage: "Was ist beim Additionsverfahren der wichtigste Schritt, wenn die Variablen nicht direkt wegfallen?",
      antworten: ["Eine Gleichung weglassen", "Eine oder beide Gleichungen mit einer Zahl multiplizieren", "Beide Gleichungen durch 2 teilen", "x und y vertauschen"],
      richtig: 1,
      erklaerung: "Man multipliziert so, dass eine Variable in beiden Gleichungen den gleichen Betrag (aber unterschiedliches Vorzeichen) hat – dann fällt sie beim Addieren weg."
    },
    {
      frage: "Geometrisch betrachtet: Was ist die Lösung eines LGS mit 2 Variablen?",
      antworten: ["Der Mittelpunkt der zwei Geraden", "Der Schnittpunkt der zwei Geraden", "Die Steigung der Geraden", "Der y-Achsenabschnitt"],
      richtig: 1,
      erklaerung: "Die Lösung (x,y) ist genau der Punkt S(x|y), an dem sich die beiden Geraden im Koordinatensystem schneiden."
    },
    {
      frage: "Was macht man zum Schluss IMMER, nachdem man ein LGS gelöst hat?",
      antworten: ["Nichts, fertig ist fertig", "Die Probe machen: Lösung in beide Gleichungen einsetzen", "Das Ergebnis runden", "Eine neue Gleichung aufstellen"],
      richtig: 1,
      erklaerung: "Die Probe gehört immer dazu: Man setzt die Lösung in beide Ausgangsgleichungen ein und prüft, ob beide Aussagen stimmen."
    }
  ],
  prisma: [
    {
      frage: "Ein Dreieckprisma hat Grundfläche G = 12 cm² und Körperhöhe h = 5 cm. Wie groß ist das Volumen?",
      antworten: ["60 cm³", "17 cm³", "30 cm³", "120 cm³"],
      richtig: 0,
      erklaerung: "V = G · h = 12 cm² · 5 cm = 60 cm³."
    },
    {
      frage: "Was brauchst du zusätzlich zur Grundfläche, um den Oberflächeninhalt eines Prismas zu berechnen?",
      antworten: ["Nur die Körperhöhe h", "Den Mantelflächeninhalt M", "Das Volumen V", "Den Radius"],
      richtig: 1,
      erklaerung: "O = 2 · G + M. Du brauchst die Grundfläche zweimal (Grund- und Deckfläche) und zusätzlich den Mantelflächeninhalt."
    },
    {
      frage: "Ein Prisma hat eine Grundfläche mit Umfang u = 18 cm und Körperhöhe h = 6 cm. Wie groß ist der Mantelflächeninhalt?",
      antworten: ["108 cm²", "24 cm²", "54 cm²", "12 cm²"],
      richtig: 0,
      erklaerung: "M = u · h = 18 cm · 6 cm = 108 cm²."
    },
    {
      frage: "Was ist der Unterschied zwischen der Körperhöhe h und der Höhe der Grundflächen-Figur (z.B. h_T)?",
      antworten: ["Es gibt keinen Unterschied", "h misst den Abstand der zwei Grundflächen, h_T gehört zur Form selbst (z.B. Trapezhöhe)", "h ist immer kleiner", "h wird nur für die Oberfläche gebraucht"],
      richtig: 1,
      erklaerung: "Die Körperhöhe h misst den Abstand zwischen Grund- und Deckfläche. Die Höhe der Grundflächen-Figur (z.B. h_T beim Trapez, h_c beim Dreieck) ist etwas anderes und wird nur zur Berechnung von G gebraucht."
    },
    {
      frage: "Ein Dreieckprisma: G = 8 cm², Umfang der Grundfläche u = 14 cm, Körperhöhe h = 4 cm. Wie groß ist der Oberflächeninhalt?",
      antworten: ["72 cm²", "56 cm²", "88 cm²", "16 cm²"],
      richtig: 0,
      erklaerung: "M = u · h = 14 · 4 = 56 cm². O = 2·G + M = 2·8 + 56 = 16 + 56 = 72 cm²."
    },
    {
      frage: "Welche Aussage über ein Prisma ist richtig?",
      antworten: ["Grund- und Deckfläche sind unterschiedlich groß", "Grund- und Deckfläche sind deckungsgleich und parallel", "Ein Prisma hat nur eine Grundfläche", "Die Mantelfläche besteht immer aus Dreiecken"],
      richtig: 1,
      erklaerung: "Grund- und Deckfläche eines Prismas sind per Definition deckungsgleich (kongruent) und liegen parallel. Die Mantelfläche besteht aus Rechtecken, nicht aus Dreiecken."
    },
    {
      frage: "Wofür steht u in der Formel M = u · h?",
      antworten: ["Umfang der Grundfläche", "Unbekannte Variable", "Umfang des Mantels", "Untere Fläche"],
      richtig: 0,
      erklaerung: "u steht für den Umfang der Grundfläche – also den Rand der Grundfläche einmal komplett außen herum."
    },
    {
      frage: "Ein Becken in Form eines Sechseckprismas soll mit Wasser gefüllt werden. Welche Größe brauchst du dafür?",
      antworten: ["Den Oberflächeninhalt", "Den Umfang", "Das Volumen", "Den Mantelflächeninhalt"],
      richtig: 2,
      erklaerung: "Wie viel Wasser hineinpasst, ist genau das Volumen (V = G · h)."
    },
    {
      frage: "Ein Prisma hat das Volumen V = 120 cm³ und die Körperhöhe h = 15 cm. Wie groß ist die Grundfläche?",
      antworten: ["8 cm²", "18 cm²", "1800 cm²", "105 cm²"],
      richtig: 0,
      erklaerung: "V = G · h → 120 = G · 15 → G = 8 cm²."
    },
    {
      frage: "Kann ein Prisma auf einem Mantelrechteck liegen statt auf der Grundfläche zu stehen?",
      antworten: ["Nein, ein Prisma muss immer stehen", "Ja, das ändert aber die Formeln für O und V", "Ja, und die Formeln für O und V bleiben gleich", "Nur bei Würfeln ist das möglich"],
      richtig: 2,
      erklaerung: "Ein Prisma kann auf der Grundfläche stehen oder auf einem Mantelrechteck liegen. Die Formeln O = 2·G + M und V = G·h gelten in beiden Fällen gleich."
    }
  ]
};

// ============================================
// EXPORT
// ============================================
if (typeof module !== "undefined") {
  module.exports = { THEMEN, ERKLAERUNGEN, KARTEIKARTEN, QUIZ };
}
