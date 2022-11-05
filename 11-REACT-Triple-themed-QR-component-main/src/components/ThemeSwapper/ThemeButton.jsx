// Styled Components
import StyledButton from './StyledButton';
import StyledContainer from './StyledContainer';
import StyledIcon from './StyledIcon';
// Switch mode images
import { Light, Dark, Pink } from '../../images/images';
const ThemeButton = ({ theme, toggle }) => {
  return (
    <StyledContainer>
      <StyledButton
        position={
          theme === 'light' ? '-5rem' : theme === 'dark' ? '0rem' : '5rem'
        }
        onClick={toggle}
      >
        <StyledIcon
          alt="theme switcher"
          src={theme === 'light' ? Dark : theme === 'dark' ? Pink : Light}
        />
      </StyledButton>
    </StyledContainer>
  );
};

export default ThemeButton;
