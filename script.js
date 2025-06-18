let score = 0;
let currentAnswer = 0;

function generateProblem() {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    currentAnswer = num1 + num2;
    document.getElementById('problem').textContent = `${num1} + ${num2} = ?`;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('answer').focus();
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const feedback = document.getElementById('feedback');

    if (isNaN(userAnswer)) {
        feedback.textContent = 'Please enter a valid number';
        feedback.className = 'feedback incorrect';
        return;
    }

    if (userAnswer === currentAnswer) {
        score += 1;
        feedback.textContent = 'Correct!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `Incorrect. The answer was ${currentAnswer}`;
        feedback.className = 'feedback incorrect';
    }

    document.getElementById('score').textContent = score;
    setTimeout(generateProblem, 1500);
}

// Handle Enter key press
document.getElementById('answer').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Start the game
generateProblem(); 