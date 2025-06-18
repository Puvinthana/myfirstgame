// Get DOM elements
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const answerInput = document.getElementById('answer');
const checkButton = document.getElementById('check');
const newProblemButton = document.getElementById('newProblem');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

let score = 0;

// Function to generate random numbers between 1 and 20
function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

// Function to generate a new problem
function generateNewProblem() {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    num1Element.textContent = num1;
    num2Element.textContent = num2;
    answerInput.value = '';
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
    answerInput.focus();
}

// Function to check the answer
function checkAnswer() {
    const num1 = parseInt(num1Element.textContent);
    const num2 = parseInt(num2Element.textContent);
    const userAnswer = parseInt(answerInput.value);
    const correctAnswer = num1 + num2;

    if (isNaN(userAnswer)) {
        feedbackElement.textContent = 'Please enter a valid number';
        feedbackElement.className = 'feedback incorrect';
        return;
    }

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct! Well done!';
        feedbackElement.className = 'feedback correct';
        score += 1;
    } else {
        feedbackElement.textContent = `Incorrect. The answer is ${correctAnswer}`;
        feedbackElement.className = 'feedback incorrect';
    }
    scoreElement.textContent = score;
}

// Event listeners
checkButton.addEventListener('click', checkAnswer);
newProblemButton.addEventListener('click', generateNewProblem);

// Allow Enter key to check answer
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Generate first problem when page loads
generateNewProblem(); 