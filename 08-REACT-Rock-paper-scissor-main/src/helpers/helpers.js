// Randomize array option for browser

const randomOption = (arr) => Math.floor(Math.random() * arr.length);

// Logic for the winner of the game

const whoWinsTheGame = (human, browser) => {
  const result =
    human === 'rock' && browser === 'paper'
      ? 'YOU LOSE'
      : human === 'rock' && browser === 'scissors'
      ? 'YOU WIN'
      : human === 'rock' && browser === 'rock'
      ? 'TIE'
      : human === 'paper' && browser === 'paper'
      ? 'TIE'
      : human === 'paper' && browser === 'scissors'
      ? 'YOU LOSE'
      : human === 'paper' && browser === 'rock'
      ? 'YOU WIN'
      : human === 'scissors' && browser === 'paper'
      ? 'YOU WIN'
      : human === 'scissors' && browser === 'scissors'
      ? 'TIE'
      : human === 'scissors' && browser === 'rock'
      ? 'YOU LOSE'
      : undefined;
  return result;
};

export { randomOption, whoWinsTheGame };
