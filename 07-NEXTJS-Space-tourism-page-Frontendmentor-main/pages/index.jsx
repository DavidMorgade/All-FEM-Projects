import Footer from '../components/UI/footer/Footer';
import Header from '../components/UI/header/Header';
import MainHome from '../components/UI/main/MainHome';
import LateralMenu from '../components/menus/LateralMenu';
import { useMenuContext } from '../context/useMenuContext';
import useWindowSize from '../hooks/use-window-size';
import Container from '../components/UI/Container';
import determineBgImage from '../helpers/determineBgImage';
import { BgHomeDesktop, BgHomeTablet, BgHomePhone } from '../images/images';

const HomePage = () => {
  const [menu, _] = useMenuContext();
  const size = useWindowSize();
  const bgImage = determineBgImage(
    BgHomeDesktop.src,
    BgHomeTablet.src,
    BgHomePhone.src,
    size.width
  );
  return (
    <Container style={{ backgroundImage: `url(${bgImage})` }}>
      {menu && size.width < 768 && <LateralMenu />}
      <Header />
      <MainHome />
      <Footer />
    </Container>
  );
};

export default HomePage;
