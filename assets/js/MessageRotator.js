import { MESSAGES, MESSAGE_INTERVAL, TOTAL_TRANSITION, PREFERS_REDUCED_MOTION } from './constants.js';

export class MessageRotator {
  constructor(board) {
    this.board = board;
    this.messages = MESSAGES;
    this.currentIndex = -1;
    this._timer = null;
    this._paused = false;
  }

  start() {
    // Erste Nachricht sofort anzeigen
    this.next();

    // Automatische Rotation nur starten, wenn keine reduzierte Bewegung gewünscht wird.
    // Manuelle Navigation (Tastatur) bleibt in jedem Fall erlaubt.
    if (!PREFERS_REDUCED_MOTION) {
      this._startTimer();
    }
  }

  stop() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;
    this.board.displayMessage(this.messages[this.currentIndex]);
    this._resetAutoRotation();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.messages.length) % this.messages.length;
    this.board.displayMessage(this.messages[this.currentIndex]);
    this._resetAutoRotation();
  }

  // Privater Helper: startet den Auto-Rotations-Timer neu.
  // Zentralisiert den identischen setInterval-Block aus start() und _resetAutoRotation().
  _startTimer() {
    this._timer = setInterval(() => {
      if (!this._paused && !this.board.isTransitioning) {
        this.next();
      }
    }, MESSAGE_INTERVAL + TOTAL_TRANSITION);
  }

  _resetAutoRotation() {
    // Timer nur zurücksetzen, wenn Auto-Rotation aktiv ist (kein PREFERS_REDUCED_MOTION)
    if (this._timer) {
      clearInterval(this._timer);
      this._startTimer();
    }
  }
}
