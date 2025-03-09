let cancelId;
let startTime;
let savedTime = 0;
const countdown = 25 * 60 * 1000;
const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');
const timerMinutes = document.querySelector('.timer__minutes');

function startTimer() {
  startTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  savedTime = Date.now() - startTime + savedTime;
  cancelAnimationFrame(cancelId);
}

function resetTimer() {

}

function updateTimer() {
  let millisElapsed = Date.now() - startTime + savedTime;

  let millisLeft = countdown - millisElapsed;
  let secondsLeft = millisLeft / 1000;
  let minutesLeft = secondsLeft / 60;

  let millisText = millisLeft % 1000;
  let secondsText = Math.floor(secondsLeft) % 60;
  let minutesText = Math.floor(minutesLeft);

  if (minutesText.toString().length < 2) {
    minutesText = minutesText.toString().padStart(2, '0');
  }
   
  if (secondsText.toString().length < 2) {
    secondsText = secondsText.toString().padStart(2, '0');
  }

  if (millisText.toString().length < 3) {
    millisText = millisText.toString().padStart(3, '0');
  }

  timerMilliseconds.innerHTML = millisText;
  timerSeconds.innerHTML = secondsText;
  timerMinutes.innerHTML = minutesText;
  cancelId = requestAnimationFrame(updateTimer);
}