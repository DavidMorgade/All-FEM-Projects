import { usePlanetContext } from '../../../../context/usePlanetContext';
import styles from './SwiperMenu.module.scss';

const SwiperMenu = () => {
  const [planet, setPlanet] = usePlanetContext();
  const moonContextHandler = () => {
    setPlanet(0);
  };
  const marsContextHandler = () => {
    setPlanet(1);
  };
  const europaContextHandler = () => {
    setPlanet(2);
  };
  const titanContextHandler = () => {
    setPlanet(3);
  };

  return (
    <ul className={styles.list}>
      <li>
        <button
          onClick={moonContextHandler}
          className={`${styles.list__button} ${
            planet === 0 ? styles.list__button__selected : ''
          }`}
        >
          Moon
        </button>
      </li>
      <li>
        <button
          onClick={marsContextHandler}
          className={`${styles.list__button} ${
            planet === 1 ? styles.list__button__selected : ''
          }`}
        >
          Mars
        </button>
      </li>
      <li>
        <button
          onClick={europaContextHandler}
          className={`${styles.list__button} ${
            planet === 2 ? styles.list__button__selected : ''
          }`}
        >
          Europa
        </button>
      </li>
      <li>
        <button
          onClick={titanContextHandler}
          className={`${styles.list__button} ${
            planet === 3 ? styles.list__button__selected : ''
          }`}
        >
          Titan
        </button>
      </li>
    </ul>
  );
};

export default SwiperMenu;
