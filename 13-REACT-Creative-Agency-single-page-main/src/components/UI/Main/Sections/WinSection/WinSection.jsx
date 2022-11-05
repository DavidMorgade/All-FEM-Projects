import { MediumHeading } from '../../../../text/StyledHeading';
import List from './List';
import StyledWinSection from './StyledWinSection';
//Hooks
import useWindowSize from '../../../../../hooks/useWindowSize';
const WinSection = () => {
  const size = useWindowSize();
  return (
    <StyledWinSection>
      <MediumHeading
        Color={size.width < 768 ? '#FFFFFF' : '#191921'}
        marginTop={size.width < 1440 ? '9.6rem' : ''}
        marginBottom="9.3rem"
        Relative
      >
        Our approach for creating a winning brand
      </MediumHeading>
      <List />
    </StyledWinSection>
  );
};

export default WinSection;
