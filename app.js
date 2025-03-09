let cancelId;
let startTime;
const countdown = 25 * 60 * 1000;
const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');

function startTimer() {
  startTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  cancelAnimationFrame(cancelId);
}

function resetTimer() {
  
}

function updateTimer() {
  let millisElapsed = Date.now() - startTime;

  let timeLeftInMs = countdown - millisElapsed;
  let secondsLeft = timeLeftInMs / 1000;

  let millisText = timeLeftInMs % 1000;
  let secondsText = Math.floor(secondsLeft) % 60;

  timerMilliseconds.innerHTML = millisText;
  timerSeconds.innerHTML = secondsText;
  cancelId = requestAnimationFrame(updateTimer);
}