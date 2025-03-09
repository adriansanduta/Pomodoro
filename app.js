let cancelId;
let startTime;
const countdown = 25 * 60 * 1000;
const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');

function startTimer() {
  let startTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
 cancelAnimationFrame(cancelId)
}

function resetTimer() {

}

function updateTimer() {
    let millisElapsed = Date.now() - startTime;
    let timeLeft = countdown - millisElapsed;
    let secondsLeft = timeLeftInMs / 1000;
    let millisText = timeLeft % 1000;
    timerMilliseconds.innerHTML = millisText;
    timerSeconds.innerHTML = Math.floor(secondsLeft) % 60;
 cancelId = requestAnimationFrame(updateTimer)
}