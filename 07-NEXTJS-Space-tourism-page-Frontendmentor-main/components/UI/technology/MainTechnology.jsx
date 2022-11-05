import styles from './MainTechnology.module.scss';
// Components
import AltPagesHeading from '../destination/main/AltPagesHeading';
import Picture from '../destination/main/Picture';
import Buttons from '../../menus/buttons-slider/Buttons';
import NameHeading from '../text/NameHeading';
import Description from '../text/Description';
import Image from 'next/image';
// Images
import {
  Launch,
  Capsule,
  SpacePort,
  LaunchPortrait,
  CapsulePortrait,
  SpacePortPortrait,
} from '../../../images/images';
// Hooks
import { useTechContext } from '../../../context/useTechContext';
import useWindowSize from '../../../hooks/use-window-size';
// Data
import data from '../../../data/data.json';

const MainTechnology = () => {
  const size = useWindowSize();
  const alignDesktop = size.width > 1440 ? 'flex-start' : 'center';
  const vehicle =
    size.width <= 1440
      ? [Launch, Capsule, SpacePort]
      : [LaunchPortrait, CapsulePortrait, SpacePortPortrait];
  const { technology } = data;
  const [tech, setTech] = useTechContext();
  return (
    <main className={styles.main}>
      <AltPagesHeading
        column="1 / 3"
        align="flex-start"
        page="03"
        text="space launch 101"
      />
      <div className={styles.main__containerImg}>
        <Image
          alt="technology image"
          src={vehicle[tech]}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <Buttons />
      <section className={styles.section}>
        <h2 className={styles.section__heading}>The terminology...</h2>
        <NameHeading
          gridAlign={alignDesktop}
          align="left"
          margin="0"
          text={technology[tech].name}
        />
        <Description
          width="80%"
          margin="0"
          text={technology[tech].description}
        />
      </section>
    </main>
  );
};

export default MainTechnology;
