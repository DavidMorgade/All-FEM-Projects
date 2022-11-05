import styles from './GameStartContainer.module.css';

const GameStartContainer = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default GameStartContainer;
