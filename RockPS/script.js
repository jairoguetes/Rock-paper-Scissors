let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'tie.';
    } else if (computerMove === 'Paper') {
      result = 'you lose.';
    } else if (computerMove === 'Scissors') {
      result = 'you win.';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'you win.';
    } else if (computerMove === 'Paper') {
      result = 'tie.';
    } else if (computerMove === 'Scissors') {
      result = 'you lose.';
    }
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'you lose.';
    } else if (computerMove === 'Paper') {
      result = 'you win.';
    } else if (computerMove === 'Scissors') {
      result = 'tie.';
    }
  }

  if (result === 'you win.') {
    score.wins += 1;
  } else if (result === 'you lose.') {
    score.losses += 1;
  } else if (result === 'tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = `
    You: <img src="assets/${playerMove}-emoji.png" class="move-icon">
    Computer: <img src="assets/${computerMove}-emoji.png" class="move-icon">
  `;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, ties ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}