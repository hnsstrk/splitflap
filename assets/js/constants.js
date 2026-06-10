export const GRID_COLS = 20;
export const GRID_ROWS = 7;

export const SCRAMBLE_DURATION = 800;
export const FLIP_DURATION = 300;
export const STAGGER_DELAY = 25;
export const TOTAL_TRANSITION = 3800;
export const MESSAGE_INTERVAL = 4000;

export const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,-!?\'/: ';

// Lese Farben aus CSS Custom Properties (theme-aware)
function getCSSColor(varName) {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

export function getScrambleColors() {
  return [
    getCSSColor('--scramble-1'),
    getCSSColor('--scramble-2'),
    getCSSColor('--scramble-3'),
    getCSSColor('--scramble-4'),
    getCSSColor('--scramble-5'),
    getCSSColor('--scramble-6'),
  ];
}

export function getAccentColors() {
  return [
    getCSSColor('--accent-bar-1'),
    getCSSColor('--accent-bar-2'),
    getCSSColor('--accent-bar-3'),
    getCSSColor('--accent-bar-4'),
    getCSSColor('--accent-bar-5'),
  ];
}

// Generische Default-Nachrichten für das Theme.
// Jede Nachricht ist ein Array mit bis zu GRID_ROWS (7) Zeilen;
// kürzere Arrays sind sicher, da Board._formatToGrid fehlende Zeilen als '' behandelt.
// Nur Zeichen aus CHARSET erlaubt (Großbuchstaben, Ziffern, .,-!?'/: und Leerzeichen).
// Maximale Zeilenlänge: GRID_COLS = 20 Zeichen.
const DEFAULT_MESSAGES = [
  [
    '',
    '',
    'SPLITFLAP',
    'A HUGO THEME',
    '',
    '',
    ''
  ],
  [
    '',
    '',
    'SPLIT-FLAP DISPLAY',
    '',
    'AYU + MONASPACE',
    '',
    ''
  ],
  [
    '',
    '',
    '',
    'YOUR MESSAGE HERE',
    '',
    '',
    ''
  ]
];

// Nachrichten aus der Hugo-Site-Konfiguration lesen (params.board.messages),
// falls vom Theme-Nutzer gesetzt. Jede Zeile wird normalisiert:
// String-Konvertierung, Uppercase, Beschneidung auf GRID_COLS Zeichen.
// Rückfall auf DEFAULT_MESSAGES, wenn kein gültiger Override vorhanden.
function resolveMessages() {
  if (
    typeof window !== 'undefined' &&
    Array.isArray(window.splitflapMessages) &&
    window.splitflapMessages.length > 0
  ) {
    return window.splitflapMessages.map((msg) => {
      // Jede Nachricht muss ein Array von Zeilen sein
      const lines = Array.isArray(msg) ? msg : [msg];
      // Zeilen normalisieren: String, Uppercase, auf 20 Zeichen kürzen
      const normalized = lines.map((line) =>
        String(line).toUpperCase().slice(0, GRID_COLS)
      );
      // Auf GRID_ROWS Zeilen auffüllen
      while (normalized.length < GRID_ROWS) normalized.push('');
      return normalized.slice(0, GRID_ROWS);
    });
  }
  return DEFAULT_MESSAGES;
}

export const MESSAGES = resolveMessages();
