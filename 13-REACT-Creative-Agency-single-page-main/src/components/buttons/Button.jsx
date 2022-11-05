import { StyledButton } from './StyledButton';
const Button = ({ children, Width, Height, bgColor }) => {
  return (
    <StyledButton bgColor={bgColor} Width={Width} Height={Height}>
      {children}
    </StyledButton>
  );
};

export default Button;
