// Styled components
import StyledDesignSection from './StyledDesignSection';
//Images
import {
  DesignDesktop,
  DesignMobile,
  DesignTablet,
} from '../../../../../images/images';
// Components
import { Image } from '../../../../images/StyledImg';
import TextPart from './TextPart';
import ContainerImage from '../../../../containers/ContainerImage';
//hooks
import useWindowSize from '../../../../../hooks/useWindowSize';

const DesignSection = () => {
  const size = useWindowSize();
  return (
    <StyledDesignSection id="service">
      <ContainerImage>
        <Image
          Width="100%"
          Height={
            size.width < 768
              ? '20rem'
              : size.width >= 768 && size.width < 1440
              ? '65.8rem'
              : '98.4rem'
          }
          Object="cover"
          src={
            size.width < 768
              ? DesignMobile
              : size.width >= 768 && size.width < 1440
              ? DesignTablet
              : DesignDesktop
          }
          alt="Design creativity company is strategic"
        />
      </ContainerImage>
      <TextPart />
    </StyledDesignSection>
  );
};

export default DesignSection;
