
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsText = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

let randomNumber;
let attempts;


// Start new game
function startGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;

    attempts = 0;

    message.textContent = '';
    attemptsText.textContent = '0';

    guessInput.value = '';
    guessInput.disabled = false;
    guessBtn.disabled = false;
}


// Guess button
// guessBtn.addEventListener('click', () => {

//     const userGuess = Number(guessInput.value);

//     // Check valid number
//     if (
//         guessInput.value === '' ||
//         userGuess < 1 ||
//         userGuess > 10 ||
//         !Number.isInteger(userGuess)
//     ) {
//         message.textContent =
//             'Please enter a valid number between 1 and 10.';
//         return;
//     }

//     // Increase attempts
//     attempts++;

//     attemptsText.textContent = attempts;

    // Check the guess
//     if (userGuess === randomNumber) {

//         message.textContent =
//             `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;

//         guessInput.disabled = true;
//         guessBtn.disabled = true;

//     } else if (userGuess < randomNumber) {

//         message.textContent = 'Too low! Try a bigger number.';

//     } else {

//         message.textContent = 'Too high! Try a smaller number.';

//     }

// });


// Reset game
// resetBtn.addEventListener('click', startGame);


// Start game when page loads
// startGame();
