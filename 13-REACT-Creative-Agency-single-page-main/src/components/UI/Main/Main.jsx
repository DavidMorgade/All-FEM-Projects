import DesignSection from './Sections/DesignSection/DesignSection';
import HeroSection from './Sections/HeroSection/HeroSection';
import SwiperSection from './Sections/SwiperSection/SwiperSection';
import WinSection from './Sections/WinSection/WinSection';
import StyledMain from './StyledMain';

const Main = () => {
  return (
    <StyledMain>
      <HeroSection />
      <DesignSection />
      <WinSection />
      <SwiperSection />
    </StyledMain>
  );
};

export default Main;
