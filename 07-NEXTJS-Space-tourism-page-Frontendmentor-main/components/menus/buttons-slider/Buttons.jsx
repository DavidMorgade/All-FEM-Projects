import { useTechContext } from '../../../context/useTechContext';
import styles from './Buttons.module.scss';

const Buttons = () => {
  const [tech, setTech] = useTechContext();
  const launchHandler = () => {
    setTech(0);
  };
  const spacePortHandler = () => {
    setTech(1);
  };
  const spaceCapsuleHandler = () => {
    setTech(2);
  };
  return (
    <ul className={styles.list}>
      <li>
        <button
          onClick={launchHandler}
          className={`${styles.list__button} ${
            tech === 0 ? styles.list__button__selected : ''
          }`}
        >
          1
        </button>
      </li>
      <li>
        <button
          onClick={spacePortHandler}
          className={`${styles.list__button} ${
            tech === 1 ? styles.list__button__selected : ''
          }`}
        >
          2
        </button>
      </li>
      <li>
        <button
          onClick={spaceCapsuleHandler}
          className={`${styles.list__button} ${
            tech === 2 ? styles.list__button__selected : ''
          }`}
        >
          3
        </button>
      </li>
    </ul>
  );
};

export default Buttons;
