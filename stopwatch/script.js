let seconds = 0;
let tens = 0;
let interval;

// Get DOM elements
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnReset = document.querySelector('.btn-reset');
let btnStop = document.querySelector('.btn-stop');

// Function to start the timer
function startTimer() {
    interval = setInterval(updateTime, 10);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(interval);
    seconds = 0;
    tens = 0;
    getSeconds.innerHTML = '00';
    getTens.innerHTML = '00';
}

// Function to update the time
function updateTime() {
    tens++;
    if (tens > 99) {
        tens = 0;
        seconds++;
    }

    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    const displayTens = tens < 10 ? '0' + tens : tens;

    getSeconds.innerHTML = displaySeconds;
    getTens.innerHTML = displayTens;
}

// Event listeners for buttons
btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);
