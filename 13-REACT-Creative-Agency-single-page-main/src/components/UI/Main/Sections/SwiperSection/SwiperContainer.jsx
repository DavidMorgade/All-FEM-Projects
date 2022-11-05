import StyledSwiperContainer from './StyledSwiperContainer';
import { Image } from '../../../../images/StyledImg';
import {
  CustomParagraph,
  StyledDate,
  StyledFigcaption,
} from '../../../../text/StyledHeading';
import StyledFigure from '../../../../containers/Figure';
import SwiperText from './SwiperText';
import useWindowSize from '../../../../../hooks/useWindowSize';

const SwiperContainer = ({ src, figcaption, date, text }) => {
  const size = useWindowSize();
  return (
    <StyledSwiperContainer>
      <StyledFigure>
        <Image
          src={src}
          Object="cover"
          Width="100%"
          Height={size < 1440 ? '47.2rem' : '100%'}
          alt="Company related projects"
          hasGradient
        />
        <StyledFigcaption>
          <CustomParagraph FontSize="2rem" fontBold>
            {figcaption}
          </CustomParagraph>
          <StyledDate>{date}</StyledDate>
        </StyledFigcaption>
      </StyledFigure>
      <SwiperText text={text} />
    </StyledSwiperContainer>
  );
};

export default SwiperContainer;
