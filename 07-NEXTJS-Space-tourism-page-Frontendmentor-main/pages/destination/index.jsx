// Hooks
import useWindowSize from '../../hooks/use-window-size';
import { useMenuContext } from '../../context/useMenuContext';
import determineBgImage from '../../helpers/determineBgImage';
// Context
import { PlanetWrapper } from '../../context/usePlanetContext';
// Images
import {
  BgDestinationDesktop,
  BgDestinationPhone,
  BgDestinationTablet,
} from '../../images/images';
// Components
import Container from '../../components/UI/Container';
import Header from '../../components/UI/header/Header';
import LateralMenu from '../../components/menus/LateralMenu';
import PlanetSwiper from '../../components/UI/destination/main/PlanetSwiper';
import Head from 'next/head';

const Destination = () => {
  const [menu, _] = useMenuContext();
  const size = useWindowSize();
  const bgImage = determineBgImage(
    BgDestinationDesktop.src,
    BgDestinationTablet.src,
    BgDestinationPhone.src,
    size.width
  );
  const containerHeight = size.width >= 1440 ? '100vh' : '100%';
  return (
    <PlanetWrapper>
      <Head>
        <title>Space Tourism - Destinations</title>
      </Head>
      <Container
        style={{ backgroundImage: `url(${bgImage})`, height: containerHeight }}
      >
        {menu && size.width < 768 && <LateralMenu />}
        <Header />
        <PlanetSwiper />
      </Container>
    </PlanetWrapper>
  );
};

export default Destination;
