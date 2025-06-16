const board = document.getElementById("game-board");
const movesCounter = document.getElementById("moves");
const winMessage = document.getElementById("win-message");
const restartBtn = document.getElementById("restart-btn");
const timerDisplay = document.getElementById("timer");
const bestTimeDisplay = document.getElementById("best-time");


const flipSound = document.getElementById("flip-sound");
const matchSound = document.getElementById("match-sound");
const winSound = document.getElementById("win-sound");

const winmsg= document.querySelector('.winmsg')
const title1= document.querySelector('.title1')
const title2= document.querySelector('.title2')
const control= document.querySelector('.controls')

let cardValues = [];
let flippedCards = [];
let matchedCount = 0;
let moves = 0;
let timer = 0;
let timerInterval = null;

const emojis = [
    '\u{1F34E}', //  Apple
    '\u{1F34C}', //  Banana
    '\u{1F353}', //  Strawberry
    '\u{1F347}', //  Grapes
    '\u{1F34D}', //  Pineapple
    '\u{1F95D}', //  Kiwi
    '\u{1F351}', //  Peach
    '\u{1F349}'  //  Watermelon
];

function shuffle(array) {
    for(let i = array.length - 1; i>0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTimer() {
    clearInterval(timerInterval);
    timer = 0;
    timerDisplay.innerHTML = `&#x23F1; Time: 0s`;
    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.innerHTML = `&#x23F1; Time: ${timer}s`;
    }, 1000);
}

function updateBestTime() {
    const bestTime = localStorage.getItem("bestTime");
    if(!bestTime || timer < parseInt(bestTime)) {
        localStorage.setItem("bestTime", timer);
        bestTimeDisplay.innerHTML = `&#x1F3C6; Best Time ${timer}s`;
    } else {
        bestTimeDisplay.innerHTML = `&#x1F3C6; Best Time ${bestTime}s`;
    }
}

function resetGame() {
    board.innerHTML = "";
    winMessage.classList.add("hidden");
    moves = 0;
    matchedCount = 0;
    flippedCards = [];
    cardValues = shuffle([...emojis, ...emojis]);
    movesCounter.textContent = "Moves: 0";
    startTimer();
    createBoard();
}

function createBoard() {
    cardValues.forEach(value => {
        const card = document.createElement("div");
        card.classList.add('card');
        card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">${value}</div>
            <div class="card-back">?</div>
        </div>
        `;
        card.addEventListener('click', () => flipCard(card, value));
        board.appendChild(card);
    });
}

function flipCard(card, value) {
    if(
        card.classList.contains("flipped") ||
        flippedCards.length === 2
    ) return;

    card.classList.add("flipped");
    flipSound.play();
    flippedCards.push({card, value});

    if(flippedCards.length ===2) {
        moves++;
        movesCounter.textContent = `Moves: ${moves}`;
        const [first, second] = flippedCards;

        if(first.value === second.value) {
            matchedCount += 2;
            matchSound.play();      //play match sound
            flippedCards = [];
            if(matchedCount === cardValues.length) {
                clearInterval(timerInterval);
                winSound.play();        //play win sound
                // winMessage.classList.remove("hidden");
                board.classList.add("hidden")
                title1.classList.add("hidden")
                title2.classList.add("hidden")
                control.classList.add("hidden")
                winmsg.style.display="flex"

                updateBestTime();
            }
        } else {
            setTimeout(() => {
                first.card.classList.remove("flipped");
                second.card.classList.remove("flipped");
                flippedCards = [];
            }, 800);
        }
    }
}

restartBtn.addEventListener('click', resetGame);

resetGame();






