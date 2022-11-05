// Components
import Container from '../../components/UI/Container';
import Header from '../../components/UI/header/Header';
import LateralMenu from '../../components/menus/LateralMenu';
import MainCrew from '../../components/UI/crew/MainCrew';
// Images
import { BgCrewDesktop, BgCrewPhone, BgCrewTablet } from '../../images/images';

// Helpers
import determineBgImage from '../../helpers/determineBgImage';
// Hooks
import useWindowSize from '../../hooks/use-window-size';
import { useMenuContext } from '../../context/useMenuContext';
import { MemberWrapper } from '../../context/useMemberContext';
import Head from 'next/head';

const Crew = () => {
  const [menu, _] = useMenuContext();
  const size = useWindowSize();
  const bgImage = determineBgImage(
    BgCrewDesktop.src,
    BgCrewTablet.src,
    BgCrewPhone.src,
    size.width
  );
  //   const containerHeight = size.width >= 1440 ? '100vh' : '100%';
  return (
    <MemberWrapper>
      <Head>
        <title>Space Tourism - Crew</title>
      </Head>
      <Container style={{ backgroundImage: `url(${bgImage})` }}>
        {menu && size.width < 768 && <LateralMenu />}
        <Header />
        <MainCrew />
      </Container>
    </MemberWrapper>
  );
};

export default Crew;
