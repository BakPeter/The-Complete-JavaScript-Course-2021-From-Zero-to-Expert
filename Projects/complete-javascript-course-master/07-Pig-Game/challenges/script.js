'use strict';
// alert('Section 7: Project 3 - Pig Game');

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playersEl = [player0El, player1El];

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const scoresEl = [score0El, score1El];

const curr0El = document.getElementById('current--0');
const curr1El = document.getElementById('current--1');
const currEl = [curr0El, curr1El];

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
let scores, currScore, activePlayer, playing;

initGame();

function initGame() {
  playing = true;
  scores = [0, 0];
  currScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  playersEl[0].classList.remove('player--winner');
  playersEl[1].classList.remove('player--winner');
  playersEl[0].classList.add('player--active');
  playersEl[1].classList.remove('player--active');
}

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(`btnRoll clicked : random = ${dice}`);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice === 1) {
      //switch players
      // console.log('switch players');
      switchPlayers();
    } else {
      //update current player score
      currScore += dice;
      currEl[activePlayer].textContent = currScore;
      // console.log(`update curr player score to ${currScore}`);
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currScore;
    scoresEl[activePlayer].textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      //game over
      playersEl[activePlayer].classList.add('player--winner');
      playersEl[activePlayer].classList.remove('player--active');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      switchPlayers();
    }
  }
});

btnNew.addEventListener('click', function () {
  console.log('start new game');
  initGame();
});

function switchPlayers() {
  currEl[activePlayer].textContent = 0;
  activePlayer = activePlayer ? 0 : 1;
  currScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
