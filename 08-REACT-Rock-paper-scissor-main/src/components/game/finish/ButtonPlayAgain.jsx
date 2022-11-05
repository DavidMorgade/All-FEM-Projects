import { useContext } from 'react';
import GameContext from '../../../context/game-context';
import styles from './ButtonPlayAgain.module.css';

const ButtonPlayAgain = () => {
  const gameCtx = useContext(GameContext);
  const finishGameHandler = () => {
    gameCtx.startGame(false);
    gameCtx.setSelectedOption('');
    gameCtx.setBrowserOption('');
  };
  return (
    <button onClick={finishGameHandler} className={`${styles.button}`}>
      PLAY AGAIN
    </button>
  );
};

export default ButtonPlayAgain;
