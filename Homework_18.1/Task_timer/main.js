class Timer {
  constructor(duration, displayElement) {
    this.duration = duration;
    this.displayElement = displayElement;
    this.timer = duration;
    this.intervalId = null;
  }
  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  }
  start() {
    this.updateDisplay();
    this.intervalId = setInterval(() => {
      if (this.timer <= 0) {
        this.stop();
      } else {
        this.timer--;
        this.updateDisplay();
      }
    }, 1000);
  }
  updateDisplay() {
    this.displayElement.textContent = this.formatTime(this.timer);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
const timerDisplay = document.getElementById("timer");
const startTime = 85;
const countdownTimer = new Timer(startTime, timerDisplay);
countdownTimer.start();
