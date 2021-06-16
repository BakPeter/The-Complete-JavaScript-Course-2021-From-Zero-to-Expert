'use strict';
// alert('Guess my number, Section 7');
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '👩‍🦰';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = '23';
// console.log(document.querySelector('.guess').value);
let secretNumber = 0;
let score = 0;
let highScore = 1000;
startNewGame();

function startNewGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  score = 5;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.highscore').textContent = highScore;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    wonGame();
  } else if (guess > secretNumber) {
    if (!gameOver()) {
      decrementScore();
      document.querySelector('.message').textContent = '📈 Too High!';
    }
  } else if (guess < secretNumber) {
    if (!gameOver()) {
      decrementScore();
      document.querySelector('.message').textContent = '📉 Too Low!';
    }
  }
});

function decrementScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function gameOver() {
  if (score <= 1) {
    if (score == 1) decrementScore();
    gameLost();
    return true;
  } else {
    return false;
  }
}

function wonGame() {
  document.querySelector('.message').textContent = '🎉 Currect Number';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';

  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}

function gameLost() {
  document.querySelector('.message').textContent = '💥 You Lost the Game!';
  document.querySelector('body').style.backgroundColor = '#fc0303';
  document.querySelector('.number').style.width = '15rem';
}

// document.querySelector('.again').addEventListener('click', function () {
//   alert('again clickes!');
//   startNewGame();
// });
document.querySelector('.again').addEventListener('click', startNewGame);
