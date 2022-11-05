import styles from './Header.module.css';
import HeaderScore from './HeaderScore';
import HeaderText from './HeaderText';

const Header = (props) => {
  return (
    <div className={`${styles.header} ${props.gameStarted}`}>
      <HeaderText />
      <HeaderScore />
    </div>
  );
};

export default Header;
