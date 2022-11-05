import { useContext } from 'react';
import GameContext from '../../context/game-context';
import styles from './HeaderScore.module.css';

const HeaderScore = (props) => {
  const gameCtx = useContext(GameContext);
  const currentScore = +gameCtx.score;

  return (
    <div className={styles.container}>
      <p className={styles.text}>SCORE</p>
      <p className={styles.score}>{currentScore}</p>
    </div>
  );
};

export default HeaderScore;
