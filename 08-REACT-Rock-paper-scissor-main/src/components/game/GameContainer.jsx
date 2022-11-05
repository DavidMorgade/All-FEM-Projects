import { useContext } from 'react';
import GameContext from '../../context/game-context';
import styles from './GameContainer.module.css';

const GameContainer = (props) => {
  const gameCtx = useContext(GameContext);
  return (
    <div
      className={`${styles.container} ${
        gameCtx.gameStart === true ? 'dissapear' : 'appear'
      } ${styles.bgImage} `}
    >
      {props.children}
    </div>
  );
};

export default GameContainer;
