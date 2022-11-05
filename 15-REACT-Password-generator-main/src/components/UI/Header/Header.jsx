import { StyledHeading } from '../../Text/StyledText';
import StyledHeader from './StyledHeader';
import { StyledInput, StyledInputContainer } from './StyledTheme';

const Header = ({ toggle, theme }) => {
  const toggleThemeHandler = (e) => {
    toggle(e);
  };

  return (
    <StyledHeader>
      <StyledHeading>Password Generator</StyledHeading>
      <StyledInputContainer>
        <label>
          <StyledInput
            type="range"
            min="0"
            max="1"
            value={theme === 'light' ? '0' : '1'}
            onChange={toggleThemeHandler}
          />
        </label>
      </StyledInputContainer>
    </StyledHeader>
  );
};

export default Header;
