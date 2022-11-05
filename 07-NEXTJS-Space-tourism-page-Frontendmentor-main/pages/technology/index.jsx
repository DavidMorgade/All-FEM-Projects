// Components
import Container from '../../components/UI/Container';
import Header from '../../components/UI/header/Header';
import LateralMenu from '../../components/menus/LateralMenu';
// hooks
import useWindowSize from '../../hooks/use-window-size';
// images
import {
  BgTechnologyDesktop,
  BgTechnologyPhone,
  BgTechnologyTablet,
} from '../../images/images';
// helpers
import determineBgImage from '../../helpers/determineBgImage';
import { useMenuContext } from '../../context/useMenuContext';
import MainTechnology from '../../components/UI/technology/MainTechnology';
import { TechWrapper } from '../../context/useTechContext';
import Head from 'next/head';

const Technology = () => {
  const [menu, _] = useMenuContext();
  const size = useWindowSize();
  const bgImage = determineBgImage(
    BgTechnologyDesktop.src,
    BgTechnologyTablet.src,
    BgTechnologyPhone.src,
    size.width
  );
  //   const containerHeight = size.width >= 1440 ? '100vh' : '100vh';
  return (
    <TechWrapper>
      <Head>
        <title>Space Tourism - Technology</title>
      </Head>
      <Container style={{ backgroundImage: `url(${bgImage})` }}>
        {menu && size.width < 768 && <LateralMenu />}
        <Header />
        <MainTechnology />
      </Container>
    </TechWrapper>
  );
};

export default Technology;
