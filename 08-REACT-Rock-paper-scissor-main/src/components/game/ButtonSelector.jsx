import styles from './ButtonSelector.module.css';
import '../../styles/Gameitems.css';
import { useContext } from 'react';
import GameContext from '../../context/game-context';
import { randomOption, whoWinsTheGame } from '../../helpers/helpers';

const ButtonSelector = (props) => {
  const gameCtx = useContext(GameContext);

  const gameIsGoing = (e) => {
    const browserOptions = ['rock', 'paper', 'scissors'];
    const selected = e.currentTarget.id;
    const selectedBrowser = browserOptions[randomOption(browserOptions)];
    gameCtx.startGame(true);
    gameCtx.setSelectedOption(selected);
    gameCtx.setBrowserOption(selectedBrowser);
    const winner = whoWinsTheGame(selected, selectedBrowser);
    winner === 'YOU WIN' && gameCtx.setScore(-1);
    winner === 'YOU LOSE' && gameCtx.setScore(1);
    gameCtx.setWinner(winner);
  };

  return (
    <button
      onClick={(e) => {
        gameIsGoing(e);
      }}
      id={props.id}
      className={`${styles.button} ${props.type} ${props.position} `}
    >
      <img className={styles.img} src={props.option} alt="Game Option" />
    </button>
  );
};

export default ButtonSelector;
