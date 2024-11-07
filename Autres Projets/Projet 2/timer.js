// timer.js
let timerInterval;  // Variable to store the interval ID
let elapsedTime = 0; // Store elapsed time in milliseconds
let isPaused = false;

// Function to format time in HH:MM:SS
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to update the time display
function updateDisplay() {
    const timeDisplay = document.querySelector('.chrono time');
    timeDisplay.textContent = formatTime(elapsedTime);
}

// Start the timer
function start() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (!isPaused) {
                elapsedTime += 1000;
                updateDisplay();
            }
        }, 1000);
    }
}

// Pause the timer
function pause() {
    isPaused = true;
}

// Stop and reset the timer
function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    isPaused = false;
    updateDisplay();
}

// Reset and restart the timer
function reset() {
    elapsedTime = 0;
    isPaused = false;
    updateDisplay();
}


