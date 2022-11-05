import styles from './PlanetSwiper.module.scss';
import { Fragment } from 'react';
import { Moon, Mars, Europa, Titan } from '../../../../images/images';
import Picture from './Picture';
import SwiperMenu from './SwiperMenu';
import data from '../../../../data/data.json';
import { usePlanetContext } from '../../../../context/usePlanetContext';
import AltPagesHeading from './AltPagesHeading';
import GrayLine from './GrayLine';

const image = [Moon, Mars, Europa, Titan];
const PlanetSwiper = () => {
  const { destinations } = data;
  const [planet, setPlanet] = usePlanetContext(0);

  return (
    <Fragment>
      <main className={styles.section}>
        <AltPagesHeading text="Pick your destination" page="01" />
        <h2 className={styles.section__heading}></h2>
        <Picture image={image[planet]} />
        <SwiperMenu />
        <h1 className={styles.section__planet}>{destinations[planet].name}</h1>
        <p className={styles.section__text}>
          {destinations[planet].description}
        </p>
        <GrayLine />
      </main>
      <footer className={styles.footer}>
        <div>
          <h5 className={styles.footer__distance}>AVG. Distance</h5>
          <p className={styles.footer__number}>
            {destinations[planet].distance}
          </p>
        </div>
        <div>
          <h5 className={styles.footer__travel}>EST. Travel Time</h5>
          <p className={styles.footer__time}>{destinations[planet].travel}</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default PlanetSwiper;
