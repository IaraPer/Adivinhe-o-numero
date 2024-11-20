
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;


const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');


function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = `Tentativas: ${attempts}`;

    if (userGuess < secretNumber) {
        message.textContent = 'Tente um número maior!';
        message.style.color = 'red';
    } else if (userGuess > secretNumber) {
        message.textContent = 'Tente um número menor!';
        message.style.color = 'red';
    } else {
        message.textContent = `Parabéns! Você acertou o número ${secretNumber}!`;
        message.style.color = 'green';
        guessInput.disabled = true;
        submitButton.disabled = true;
    }

    guessInput.value = ''; 
}


submitButton.addEventListener('click', checkGuess);
