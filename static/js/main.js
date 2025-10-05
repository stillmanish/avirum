// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const loadingSpinner = document.getElementById('loading-spinner');
const problemText = document.getElementById('problem-text');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentProblemElement = document.getElementById('current-problem');
const resultsContainer = document.getElementById('results-container');
const scoreElement = document.getElementById('score');
const playAgainBtn = document.getElementById('play-again-btn');

// Game State
let problems = [];
let userAnswers = [];
let currentProblemIndex = 0;
let score = 0;

// Event Listeners
difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const difficulty = button.dataset.difficulty;
        startGame(difficulty);
    });
});

submitBtn.addEventListener('click', submitAnswer);
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitAnswer();
    }
});

prevBtn.addEventListener('click', () => {
    navigateProblem(-1);
});

nextBtn.addEventListener('click', () => {
    navigateProblem(1);
});

playAgainBtn.addEventListener('click', () => {
    resetGame();
    showScreen(welcomeScreen);
});

// Game Functions
function startGame(difficulty) {
    loadingSpinner.style.display = 'flex';
    
    // Reset game state
    problems = [];
    userAnswers = Array(6).fill('');
    currentProblemIndex = 0;
    score = 0;
    
    // Make API request to get problems
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ difficulty }),
    })
    .then(response => response.json())
    .then(data => {
        problems = data;
        loadingSpinner.style.display = 'none';
        showScreen(gameScreen);
        displayCurrentProblem();
    })
    .catch(error => {
        console.error('Error:', error);
        loadingSpinner.style.display = 'none';
        alert('Error generating problems. Please try again.');
    });
}

function displayCurrentProblem() {
    currentProblemElement.textContent = currentProblemIndex + 1;
    problemText.textContent = problems[currentProblemIndex].problem;
    answerInput.value = userAnswers[currentProblemIndex] || '';
    
    // Update buttons
    prevBtn.disabled = currentProblemIndex === 0;
    nextBtn.disabled = currentProblemIndex === 5 && !userAnswers[currentProblemIndex];
    
    // Set focus to answer input
    answerInput.focus();
}

function submitAnswer() {
    const answer = answerInput.value.trim();
    if (!answer) return;
    
    userAnswers[currentProblemIndex] = answer;
    
    if (currentProblemIndex < 5) {
        navigateProblem(1);
    } else {
        showResults();
    }
}

function navigateProblem(direction) {
    currentProblemIndex += direction;
    
    // Ensure index is within bounds
    if (currentProblemIndex < 0) currentProblemIndex = 0;
    if (currentProblemIndex > 5) currentProblemIndex = 5;
    
    displayCurrentProblem();
}

function showResults() {
    // Calculate score
    score = 0;
    const resultHTML = [];
    
    for (let i = 0; i < problems.length; i++) {
        const problem = problems[i];
        const userAnswer = userAnswers[i];
        
        // Compare answers (simple string comparison for prototype)
        // In a real app, we'd need more sophisticated answer checking
        const isCorrect = userAnswer.toLowerCase() === problem.answer.toLowerCase();
        if (isCorrect) score++;
        
        // Create result item HTML
        resultHTML.push(`
            <div class="result-item">
                <div class="result-item-header ${isCorrect ? 'correct' : 'incorrect'}">
                    <div>Problem ${i + 1}</div>
                    <div>${isCorrect ? '✓ Correct' : '✗ Incorrect'}</div>
                </div>
                <div class="result-item-content active">
                    <p><strong>Problem:</strong> ${problem.problem}</p>
                    <p class="user-answer"><strong>Your Answer:</strong> ${userAnswer}</p>
                    <p class="correct-answer"><strong>Correct Answer:</strong> ${problem.answer}</p>
                </div>
            </div>
        `);
    }
    
    // Update UI
    scoreElement.textContent = score;
    resultsContainer.innerHTML = resultHTML.join('');
    
    // Add event listeners to result headers
    const resultHeaders = document.querySelectorAll('.result-item-header');
    resultHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('active');
        });
    });
    
    showScreen(resultsScreen);
}

function resetGame() {
    problems = [];
    userAnswers = [];
    currentProblemIndex = 0;
    score = 0;
    answerInput.value = '';
}

function showScreen(screen) {
    // Hide all screens
    welcomeScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    
    // Show the selected screen
    screen.classList.add('active');
}
