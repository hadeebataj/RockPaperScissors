const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';
const DEFAULT_VALUE = 'ROCK';

let gameIsRunning = false;
const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} OR ${SCISSORS}?`, '').toUpperCase();
    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${ROCK} for you!`);
        return DEFAULT_VALUE;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

const startGame = () => {
    if(gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerSelection);
    console.log(winner);
    let message = `You picked ${playerSelection || DEFAULT_VALUE} and computer picked ${computerChoice}, therefore you`;
    if (winner === RESULT_DRAW) {
        message = message + ' had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + ' won.';
    } else {
        message = message + ' lost.';
    }
    alert(message);
    gameIsRunning = false;
}

startGameBtn.addEventListener('click', startGame);
