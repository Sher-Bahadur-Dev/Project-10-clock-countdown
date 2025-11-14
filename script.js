// DIGITAL CLOCK
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// COUNTDOWN TIMER
let countdownInterval;

document.getElementById('startBtn').addEventListener('click', () => {
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;
  let totalSeconds = minutes * 60 + seconds;

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').textContent = "⏰ Time's Up!";
      return;
    }
    totalSeconds--;
    const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    document.getElementById('countdown').textContent = `${m}:${s}`;
  }, 1000);
});

document.getElementById('resetBtn').addEventListener('click', () => {
  clearInterval(countdownInterval);
  document.getElementById('countdown').textContent = "00:00";
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
});
