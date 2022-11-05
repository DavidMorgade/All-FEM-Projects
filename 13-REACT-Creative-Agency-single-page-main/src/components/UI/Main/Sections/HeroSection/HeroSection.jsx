// Styled components
import StyledHeroSection from './StyledHeroSection';
// Images
import {
  HeroDesktop,
  HeroMobile,
  HeroTablet,
} from '../../../../../images/images';
// Components
import { Image } from '../../../../images/StyledImg';
import { StyledHeroText } from './StyledHeroText';
import MainHeading from '../../../../text/MainHeading';
import { CustomParagraph } from '../../../../text/StyledHeading';
import Button from '../../../../buttons/Button';
// Hooks
import useWindowSize from '../../../../../hooks/useWindowSize';

const HeroSection = () => {
  const size = useWindowSize();
  return (
    <StyledHeroSection id="about">
      <Image
        Width={
          size.width < 768
            ? '100%'
            : size.width >= 768 && size.width < 1440
            ? '50%'
            : '65%'
        }
        Height={
          size.width < 768
            ? '20rem'
            : size.width >= 768 && size.width < 1440
            ? '60.6rem'
            : '80rem'
        }
        Object="cover"
        src={
          size.width < 768
            ? HeroMobile
            : size.width >= 768 && size.width < 1440
            ? HeroTablet
            : HeroDesktop
        }
        alt="Design employees working on the office"
      />
      <StyledHeroText>
        <MainHeading>{'Branding & website design agency'}</MainHeading>
        <CustomParagraph Heading>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </CustomParagraph>
        <Button Width="17.7rem" Height="7.2rem">
          {'Learn More'}
        </Button>
      </StyledHeroText>
    </StyledHeroSection>
  );
};

export default HeroSection;
