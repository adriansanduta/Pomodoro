let cancelId;

function startTimer() {
  let startTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {

}

function resetTimer() {

}

function updateTimer() {
 requestAnimationFrame(updateTimer)
}