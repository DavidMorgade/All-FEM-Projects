import styles from './HeaderText.module.css';

const HeaderText = (props) => {
  return (
    <h1 className={styles.text}>
      ROCK<span>PAPER</span>
      <span>SCISSORS</span>
    </h1>
  );
};

export default HeaderText;
