// ====================== DOM Elements ======================
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');
const addCommandButton = document.getElementById('addCommandButton');
const ownCommandsInput = document.getElementById('ownCommandsInput');
const startButton = document.getElementById('startButton');
const gameArea = document.getElementById('gameArea');
const commandDescription = document.getElementById('commandDescription');
const commandDisplay = document.getElementById('commandDisplay');
const typingInput = document.getElementById('typingInput');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const encouragementDisplay = document.getElementById('encouragement');
const pointsDisplay = document.getElementById('points');
const speedDisplay = document.getElementById('speed');
const progressBar = document.getElementById('progressBar');
const historyTableBody = document.querySelector('#historyTable tbody');
const pointsChartCanvas = document.getElementById('pointsChart');
const avg5Display = document.getElementById('avg5');
const avg10Display = document.getElementById('avg10');
const starsDisplay = document.getElementById('starsDisplay'); // New Element for Stars

// Initialize Canvas for Points Chart
const ctx = pointsChartCanvas.getContext('2d');

// ====================== Variables ======================
let commands = []; // Array of objects: {command: '', description: ''}
let currentCommand = '';
let currentDescription = '';
let attempts = 0;
const maxAttempts = 5;

let typingPoints = 0; // Accumulated points from characters typed
let starMultiplier = 1; // Starts at 1, doubles with each 200-point streak
let totalStars = 0; // Total stars collected

let points = 0; // Total points including command bonuses
let startTime = null; // To track typing speed
let firstCharTyped = false; // To start timer on first character

let lastFiveWPM = []; // To track last 5 WPM

// ====================== Messages ======================
const encouragementMessages = [
    "Great job! Keep going!",
    "You're doing awesome!",
    "Stay focused!",
    "Almost there!",
    "Keep up the good work!",
    "Don't give up!",
    "You're getting better!",
    "Fantastic effort!",
    "Keep typing!",
    "You're a typing star!",
    "Excellent work!",
    "You're on fire!",
    "Keep the momentum!",
    "Outstanding!",
    "You're improving!",
    "Keep pushing!",
    "Nice typing!",
    "You're nailing it!",
    "Superb!",
    "You're unstoppable!"
];

const mistakeMessages = [
    "You can do better!",
    "Dude, focus!",
    "NO MISTAKES!",
    "Shake it off!",
    "Stay sharp!",
    "Keep trying!",
    "Don't slip up!",
    "Stay on track!",
    "Concentrate!",
    "Keep your eyes on the prize!",
    "Stay alert!",
    "Don't lose focus!",
    "Keep your head in the game!",
    "Stay determined!",
    "You got this!",
    "Keep pushing forward!",
    "Stay motivated!",
    "Focus up!",
    "Don't let it slide!",
    "Keep your concentration!"
];

const gettingPointsMessages = [
    "Awesome! You've earned more points!",
    "Fantastic! Points on the way!",
    "Brilliant! Keep collecting points!",
    "Excellent! Your points are growing!",
    "Super! Points added to your tally!",
    "Great! You're racking up points!",
    "Nice! Points are yours!",
    "Well done! Points awarded!",
    "Impressive! Points boosted!",
    "Outstanding! Points secured!",
    "Terrific! Points incoming!",
    "Marvelous! Points achieved!",
    "Sensational! Points collected!",
    "Remarkable! Points granted!",
    "Phenomenal! Points increased!",
    "Spectacular! Points received!",
    "Stellar! Points boosted!",
    "Fabulous! Points earned!",
    "Magnificent! Points accumulated!",
    "Exemplary! Points credited!"
];

const starMessages = [
    "Congratulations! You've earned a Typing Star!",
    "Well done! Another Typing Star collected!",
    "Awesome! A Typing Star is yours!",
    "Fantastic! You've secured a Typing Star!",
    "Great job! You've gained a Typing Star!"
];

// ====================== Initialization ======================
window.addEventListener('DOMContentLoaded', () => {
    populateDropdown();
    points = getTodayPoints();
    updatePointsDisplay();
    updateStarsDisplay();
    loadHistory();
    updateCharts();
});

// ====================== Event Listeners ======================

// Toggle dropdown visibility
dropdownButton.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if clicked outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('#dropdownButton')) {
        dropdownContent.style.display = 'none';
    }
});

// Event listener for adding own commands
addCommandButton.addEventListener('click', addOwnCommands);

// Event listener for starting the game
startButton.addEventListener('click', startGame);

// Event listener for typing input
typingInput.addEventListener('input', handleTyping);

// ====================== Functions ======================

/**
 * Populates the dropdown with command categories.
 */
function populateDropdown() {
    for (const category in commandCategories) {
        const button = document.createElement('button');
        button.textContent = category;
        button.addEventListener('click', () => addCommandsFromCategory(category));
        dropdownContent.appendChild(button);
    }
}

/**
 * Adds commands from a selected category to the commands array and updates the UI.
 * @param {string} category - The selected command category.
 */
function addCommandsFromCategory(category) {
    const selectedCommands = commandCategories[category];
    selectedCommands.forEach(cmdObj => {
        // Prevent duplicates
        if (!commands.some(cmd => cmd.command === cmdObj.command)) {
            commands.push({
                command: cmdObj.command,
                description: cmdObj.description
            });
        }
    });

    // Append the selected commands to the text area
    const commandsTextArea = document.getElementById('commandsTextArea'); // Ensure this element exists
    selectedCommands.forEach(cmdObj => {
        commandsTextArea.value += `${cmdObj.command}\n`; // Append command with description
    });

    // Append the category label to the selected categories list
    const selectedCategoriesList = document.getElementById('selectedCategoriesList'); // Ensure this element exists
    const categoryLabel = document.createElement('div');
    categoryLabel.textContent = `Selected Category: ${category}`;
    selectedCategoriesList.appendChild(categoryLabel); // Add label for the category
}

/**
 * Adds user-defined commands to the commands array.
 */
function addOwnCommands() {
    const ownCommandsText = ownCommandsInput.value.trim();
    if (ownCommandsText === '') {
        alert('Please paste your own commands before adding.');
        return;
    }

    const ownCommands = ownCommandsText.split('\n').map(cmd => cmd.trim()).filter(cmd => cmd.length > 0);
    ownCommands.forEach(cmd => {
        // For simplicity, assume description is 'Custom command'
        if (!commands.some(existingCmd => existingCmd.command === cmd)) {
            commands.push({ command: cmd, description: 'Custom command' });
        }
    });

    ownCommandsInput.value = '';
    alert(`Added ${ownCommands.length} custom commands.`);
}

/**
 * Starts the typing game.
 */
function startGame() {
    if (commands.length === 0) {
        alert('Please select at least one command category or add your own commands before starting the game.');
        return;
    }

    // Initialize game variables
    attempts = 0;
    typingPoints = 0;
    starMultiplier = 1;
    totalStars = getTotalStars(); // Retrieve total stars from storage
    points = getTodayPoints();
    updatePointsDisplay();
    updateStarsDisplay();
    attemptsDisplay.textContent = `Attempts: ${attempts} / ${maxAttempts}`;
    feedback.textContent = '';
    encouragementDisplay.textContent = '';
    speedDisplay.textContent = `Typing Speed: N/A WPM`;
    updateProgressBar();
    speakMessage("Game started! Good luck!");

    // Hide selection area and show game area
    const selectionArea = document.getElementById('selectionArea'); // Ensure this element exists
    selectionArea.style.display = 'none';
    gameArea.style.display = 'block';
    typingInput.disabled = false;
    typingInput.value = '';
    typingInput.focus();

    // Reset WPM tracking
    lastFiveWPM = [];

    // Load first command
    loadNewCommand();
}

/**
 * Loads a new command for the user to type.
 */
function loadNewCommand() {
    if (commands.length === 0) {
        gameOver();
        return;
    }

    const randomIndex = Math.floor(Math.random() * commands.length);
    currentCommand = commands[randomIndex].command;
    currentDescription = commands[randomIndex].description;

    commandDescription.textContent = currentDescription;
    speakMessage(currentDescription);
    commandDisplay.textContent = currentCommand;
    typingInput.value = '';
    typingInput.disabled = false;
    feedback.textContent = 'Start typing the command above.';
    encouragementDisplay.textContent = '';
    speedDisplay.textContent = `Typing Speed: N/A WPM`;
    updateProgressBar();
    firstCharTyped = false;
}

/**
 * Handles the user's typing input.
 * @param {Event} event - The input event.
 */
function handleTyping(event) {
    const userInput = typingInput.value;
    const expectedInput = currentCommand.substring(0, userInput.length);

    // Start timer on first character
    if (!firstCharTyped && userInput.length > 0) {
        startTime = new Date();
        firstCharTyped = true;
    }

    // Initialize attempts tracking if not present
    if (!window.keyAttempts) {
        window.keyAttempts = {};
    }

    const currentKey = userInput.slice(-1); // Get the last entered character

    if (userInput !== expectedInput) {
        // Initialize attempts for this key if not already done
        if (!window.keyAttempts[currentKey]) {
            window.keyAttempts[currentKey] = 0;
        }

        // Increment attempt count for the key
        window.keyAttempts[currentKey] += 1;

        if (window.keyAttempts[currentKey] >= maxAttempts) {
            // Too many mistakes for this key, reset the incorrect portion only
            playBeep();
            feedback.textContent = `Too many mistakes for '${currentKey}'. Restarting from the last correct position...`;
            typingInput.value = currentCommand.substring(0, userInput.length - 1); // Keep the correct portion
            window.keyAttempts[currentKey] = 0; // Reset attempts for the key
        } else {
            // Provide feedback for incorrect key
            playBeep();
            const remainingAttempts = maxAttempts - window.keyAttempts[currentKey];
            feedback.textContent = `Incorrect key '${currentKey}'. ${remainingAttempts} attempts remaining.`;
        }
    } else {
        // Correct key pressed, reset attempts for this key
        delete window.keyAttempts[currentKey];

        // Successfully typed the whole command
        if (userInput === currentCommand) {
            feedback.textContent = 'Well done! You typed the command correctly.';
            const encouragement = getRandomMessage(encouragementMessages);
            encouragementDisplay.textContent = encouragement;
            speakMessage(encouragement);

            // Calculate typing speed
            const endTime = new Date();
            const durationInSeconds = (endTime - startTime) / 1000;
            const cpm = Math.round(currentCommand.length / durationInSeconds * 60);
            const wpm = Math.round(cpm / 5); // Assuming average word length is 5 characters
            speedDisplay.textContent = `Typing Speed: ${wpm} WPM`;

            // Update last five WPM
            lastFiveWPM.push(wpm);
            if (lastFiveWPM.length > 5) {
                lastFiveWPM.shift();
            }

            // Calculate points from characters
            const charPoints = calculateCharacterPoints(currentCommand);
            points += charPoints + 5; // 5 points per command
            typingPoints += charPoints;

            // Update points display
            updatePointsDisplay();

            // Check for star achievement
            checkStarAchievement();

            // Save session data
            saveSessionData(wpm);

            // Load next command after a short delay
            setTimeout(() => {
                loadNewCommand();
            }, 1000);
        } else {
            // Correct so far
            feedback.textContent = 'Keep going...';
            const encouragement = getRandomMessage(encouragementMessages);
            encouragementDisplay.textContent = encouragement;
        }
    }

    // Update progress bar
    updateProgressBar();
}

/**
 * Calculates points based on the characters in the command.
 * Regular characters: 1 point
 * Shift/Special characters: 2 points
 * @param {string} command - The command string.
 * @returns {number} - Total character points.
 */
function calculateCharacterPoints(command) {
    let points = 0;
    for (const char of command) {
        if (isSpecialCharacter(char)) {
            points += 2;
        } else {
            points += 1;
        }
    }
    return points;
}

/**
 * Determines if a character is a special character or requires a shift key.
 * @param {string} char - The character to check.
 * @returns {boolean} - True if special, else false.
 */
function isSpecialCharacter(char) {
    // Define special characters that require shift or are non-alphanumeric
    const specialChars = /[~`!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|]/;
    return specialChars.test(char);
}

/**
 * Updates the points display in the UI.
 */
function updatePointsDisplay() {
    pointsDisplay.textContent = `Points: ${points}`;
}

/**
 * Updates the stars display in the UI.
 */
function updateStarsDisplay() {
    starsDisplay.textContent = `Stars: ${totalStars}`;
}

/**
 * Retrieves today's points from localStorage.
 * @returns {number} - Points accumulated today.
 */
function getTodayPoints() {
    const today = new Date().toISOString().split('T')[0];
    const history = JSON.parse(localStorage.getItem('cap10typez_history')) || {};
    return history[today] || 0;
}

/**
 * Retrieves total stars from localStorage.
 * @returns {number} - Total stars collected.
 */
function getTotalStars() {
    const stars = JSON.parse(localStorage.getItem('cap10typez_totalStars')) || 0;
    return stars;
}

/**
 * Saves session data and updates localStorage.
 * @param {number|null} wpm - Typing speed in WPM or null if game ended.
 */
function saveSessionData(wpm) {
    const today = new Date().toISOString().split('T')[0];
    const history = JSON.parse(localStorage.getItem('cap10typez_history')) || {};
    const sessions = JSON.parse(localStorage.getItem('cap10typez_sessions')) || [];
    let stars = getTotalStars();

    // Update points for today if wpm is not null
    if (wpm !== null) {
        history[today] = points;
    }
    localStorage.setItem('cap10typez_history', JSON.stringify(history));

    // If wpm is not null, save the session
    if (wpm !== null) {
        const session = {
            timestamp: new Date().toISOString(),
            typingSpeed: wpm
        };
        sessions.push(session);
        localStorage.setItem('cap10typez_sessions', JSON.stringify(sessions));
    }

    // Update stars in localStorage
    localStorage.setItem('cap10typez_totalStars', JSON.stringify(totalStars));

    // Update history table and charts
    loadHistory();
    updateCharts();
    updateStarsDisplay();
}

/**
 * Loads and displays the typing history from localStorage.
 */
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('cap10typez_history')) || {};
    historyTableBody.innerHTML = '';

    // Convert history object to sorted array
    const historyArray = Object.keys(history).map(date => ({
        date,
        points: history[date]
    })).sort((a, b) => new Date(b.date) - new Date(a.date));

    // Populate table
    historyArray.forEach(entry => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        const pointsCell = document.createElement('td');

        dateCell.textContent = entry.date;
        pointsCell.textContent = entry.points;

        row.appendChild(dateCell);
        row.appendChild(pointsCell);
        historyTableBody.appendChild(row);
    });
}

/**
 * Draws the points chart for the last 5 days.
 */
function drawPointsChart() {
    // Clear the canvas
    ctx.clearRect(0, 0, pointsChartCanvas.width, pointsChartCanvas.height);

    // Get last 5 days data
    const history = JSON.parse(localStorage.getItem('cap10typez_history')) || {};
    const dates = Object.keys(history).sort();
    const last5Dates = dates.slice(-5);
    const last5Points = last5Dates.map(date => history[date]);

    if (last5Dates.length === 0) {
        ctx.fillStyle = '#fff';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('No data available', pointsChartCanvas.width / 2, pointsChartCanvas.height / 2);
        return;
    }

    // Define chart dimensions
    const padding = 50;
    const chartWidth = pointsChartCanvas.width - padding * 2;
    const chartHeight = pointsChartCanvas.height - padding * 2;

    // Find maximum points for scaling
    const maxPoints = Math.max(...last5Points, 10);

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw labels
    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    last5Dates.forEach((date, index) => {
        const x = padding + (chartWidth / (last5Dates.length - 1)) * index;
        ctx.fillText(date, x, padding + chartHeight + 20);
    });

    ctx.textAlign = 'right';
    ctx.fillText(maxPoints, padding - 10, padding + 5);
    ctx.fillText(0, padding - 10, padding + chartHeight + 5);

    // Draw bars
    last5Points.forEach((point, index) => {
        const barWidth = chartWidth / (last5Points.length * 2);
        const barHeight = (point / maxPoints) * chartHeight;
        const x = padding + (chartWidth / (last5Points.length - 1)) * index - barWidth / 2;
        const y = padding + chartHeight - barHeight;

        ctx.fillStyle = '#00adb5';
        ctx.fillRect(x, y, barWidth, barHeight);

        // Display points above bars
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(point, x + barWidth / 2, y - 5);
    });
}

/**
 * Calculates and displays rolling averages for WPM.
 */
function calculateRollingAverages() {
    const sessions = JSON.parse(localStorage.getItem('cap10typez_sessions')) || [];
    const totalSessions = sessions.length;

    /**
     * Calculates the average WPM for the last N sessions.
     * @param {number} n - Number of sessions to consider.
     * @returns {number|string} - Average WPM or 'N/A' if insufficient data.
     */
    function getAverageWpm(n) {
        if (totalSessions < n) return 'N/A';
        const lastNSessions = sessions.slice(-n);
        const sum = lastNSessions.reduce((acc, session) => acc + session.typingSpeed, 0);
        return Math.round(sum / n);
    }

    const avg5 = getAverageWpm(5);
    const avg10 = getAverageWpm(10);

    avg5Display.textContent = avg5 !== 'N/A' ? `${avg5} WPM` : 'N/A';
    avg10Display.textContent = avg10 !== 'N/A' ? `${avg10} WPM` : 'N/A';
}

/**
 * Draws the points chart and updates rolling averages.
 */
function updateCharts() {
    drawPointsChart();
    calculateRollingAverages();
}

/**
 * Updates the progress bar based on typing points towards the next star.
 */
function updateProgressBar() {
    const targetPoints = 200;
    const progressPercentage = (typingPoints % targetPoints) / targetPoints * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${Math.floor(progressPercentage)}%`;
}

/**
 * Checks if the user has reached the point threshold for earning stars.
 */
function checkStarAchievement() {
    const targetPoints = 200;
    if (typingPoints >= targetPoints) {
        const earnedStars = starMultiplier;
        totalStars += earnedStars;
        alert(getRandomMessage(starMessages)); // Notify the user
        typingPoints -= targetPoints; // Reset typing points
        starMultiplier *= 2; // Double the star multiplier for next streak
        updateStarsDisplay();
        updateProgressBar();
    }
}

/**
 * Ends the game and offers the user to restart.
 */
function gameOver() {
    // Save session data with null WPM
    saveSessionData(null);

    // Reset typing points and star multiplier
    typingPoints = 0;
    starMultiplier = 1;
    updateProgressBar();

    // Offer to restart the game
    setTimeout(() => {
        if (confirm('Game Over! Do you want to play again?')) {
            resetGame();
        }
    }, 1000);
}

/**
 * Resets the game to its initial state.
 */
function resetGame() {
    // Show selection area and hide game area
    const selectionArea = document.getElementById('selectionArea'); // Ensure this element exists
    selectionArea.style.display = 'block';
    gameArea.style.display = 'none';
    startButton.disabled = false;

    // Reset variables
    currentCommand = '';
    currentDescription = '';
    attempts = 0;
    typingPoints = 0;
    starMultiplier = 1;
    points = getTodayPoints();
    updatePointsDisplay();
    updateStarsDisplay();
    attemptsDisplay.textContent = `Attempts: ${attempts} / ${maxAttempts}`;
    feedback.textContent = '';
    encouragementDisplay.textContent = '';
    speedDisplay.textContent = `Typing Speed: N/A WPM`;
    updateProgressBar();
}

/**
 * Plays a beep sound using the Web Audio API.
 */
function playBeep() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A4 note
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();

    // Beep duration
    setTimeout(() => {
        oscillator.stop();
    }, 200);
}

/**
 * Speaks a message using the Web Speech API.
 * @param {string} message - The message to be spoken.
 */
function speakMessage(message) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }
}

/**
 * Retrieves a random message from a given array.
 * @param {string[]} messagesArray - Array of messages.
 * @returns {string} - A random message.
 */
function getRandomMessage(messagesArray) {
    const index = Math.floor(Math.random() * messagesArray.length);
    return messagesArray[index];
}
