import styles from './MainCrew.module.scss';
// Components
import AltPagesHeading from '../destination/main/AltPagesHeading';
import NameHeading from '../text/NameHeading';
import RankHeading from '../text/RankHeading';
import Description from '../text/Description';
import Picture from '../destination/main/Picture';
//Images
import { Anousheh, Douglas, Mark, Victor } from '../../../images/images';
import GrayLine from '../destination/main/GrayLine';
import Slider from '../../menus/buttons-slider/Slider';
//Data
import data from '../../../data/data.json';
import { useMemberContext } from '../../../context/useMemberContext';
// Hooks
import useWindowSize from '../../../hooks/use-window-size';
const image = [Douglas, Mark, Victor, Anousheh];

const MainCrew = (props) => {
  const { crew } = data;
  const size = useWindowSize();
  const [member, _] = useMemberContext(0);
  return (
    <main className={styles.main}>
      <AltPagesHeading page="02" text="Meet Your Crew" />
      {size.width >= 768 && <RankHeading text={crew[member].role} />}
      {size.width >= 768 && <NameHeading text={crew[member].name} />}
      {size.width >= 768 && <Description text={crew[member].bio} />}
      {size.width >= 768 && <Slider />}
      <div className={styles.main__containerImg}>
        <Picture image={image[member]} />
        {size.width < 768 && <GrayLine />}
      </div>
      {size.width < 768 && <Slider />}
      {size.width < 768 && <RankHeading text={crew[member].role} />}
      {size.width < 768 && <NameHeading text={crew[member].name} />}
      {size.width < 768 && <Description text={crew[member].bio} />}
    </main>
  );
};

export default MainCrew;
