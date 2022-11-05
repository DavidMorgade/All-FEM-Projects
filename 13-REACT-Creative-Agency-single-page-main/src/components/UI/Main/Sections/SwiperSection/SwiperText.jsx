import StyledSwiperText from './StyledSwiperText';
import { MediumHeading } from '../../../../text/StyledHeading';

const SwiperText = ({ text }) => {
  return (
    <StyledSwiperText>
      <MediumHeading>{text}</MediumHeading>
    </StyledSwiperText>
  );
};

export default SwiperText;
