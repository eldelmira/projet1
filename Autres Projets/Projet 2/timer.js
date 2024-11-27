

let timerInterval; // Variable to store the interval ID
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
    if (timeDisplay) {
        timeDisplay.textContent = formatTime(elapsedTime);
    }
}

// Start the timer
function start() {
    if (!timerInterval) {
        isPaused = false; // Ensure the timer is not paused
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
    isPaused = true; // Set pause flag to true
}

// Continue the timer
function continuer() {
    isPaused = false; // Set pause flag to false
}

// Reset the timer
function reset() {
    clearInterval(timerInterval); // Clear the interval
    timerInterval = null; // Reset interval ID
    elapsedTime = 0; // Reset elapsed time
    isPaused = false; // Unpause the timer
    updateDisplay(); // Update the display
}

