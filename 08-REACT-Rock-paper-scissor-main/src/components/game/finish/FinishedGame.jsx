import styles from './FinishedGame.module.css';

const FinishedGame = (props) => {
  return (
    <div className={`${styles.container} btnDissapear`}>{props.children}</div>
  );
};

export default FinishedGame;
