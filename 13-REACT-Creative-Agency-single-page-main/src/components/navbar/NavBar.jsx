import { StyledNavBar } from './StyledNavBar';
import { StyledList } from './StyledNavBar';
import { StyledListItem } from './StyledNavBar';
import Button from '../buttons/Button';
import { StyledLink } from '../links/StyledLink';
import useWindowSize from '../../hooks/useWindowSize';

const NavBar = ({ style, top }) => {
  const size = useWindowSize();
  return (
    <StyledNavBar top={top} style={style}>
      <StyledList>
        <StyledListItem>
          <StyledLink href="#about">About</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="#service">Service</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="#projects">Projects</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <Button
            Width={
              size.width >= 768 && size.width < 1440 ? '14.7rem' : '19.9rem'
            }
            Height="6.4rem"
            bgColor="#191921"
          >
            Schedule a Call
          </Button>
        </StyledListItem>
      </StyledList>
    </StyledNavBar>
  );
};

export default NavBar;
