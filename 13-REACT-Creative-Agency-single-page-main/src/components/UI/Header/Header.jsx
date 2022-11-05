// StyledComponents
import StyledHeader from './StyledHeader';
// Images
import { Hamburguer, Logo, Cross } from '../../../images/images';
// Components
import { Image } from '../../images/StyledImg';
import { StyledHamburguerButton } from '../../buttons/StyledButton';
import NavBar from '../../navbar/NavBar';
// Hooks
import { useEffect, useState } from 'react';
import useScrollPosition from '../../../hooks/useScrollPosition';
import useWindowSize from '../../../hooks/useWindowSize';
import { Transition } from 'react-transition-group';
import StickyDiv from './StickyDiv';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [position, setPosition] = useState('');
  const [blur, setBlur] = useState('');
  const [height, setHeight] = useState('11rem');
  const size = useWindowSize();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (size.width < 768) {
      scrollPosition >= 55 ? setPosition('sticky') : setPosition('');
      scrollPosition >= 55 ? setBlur('85.5px') : setBlur('');
      scrollPosition >= 55 ? setHeight('5.5rem') : setHeight('11rem');
    }
    if (size.width >= 768) {
      scrollPosition >= 178 ? setPosition('sticky') : setPosition('');
      scrollPosition >= 178 ? setBlur('85.5px') : setBlur('');
      scrollPosition >= 178 ? setHeight('7rem') : setHeight('17.8rem');
    }
  }, [scrollPosition, size.width]);

  const navOpenHandler = () => {
    setNavOpen((prevState) => !prevState);
  };
  // Transition
  const duration = 100;
  const defaultStyle = {
    transition: `height ${duration}ms linear`,
    height: 0,
  };
  const transitionStyles = {
    entering: { height: '18rem', opacity: 0.8 },
    entered: { height: '29.2rem', opacity: 1 },
    exiting: { height: '18rem', opacity: 0.8 },
    exited: { height: '0', opacity: 0 },
  };
  return (
    <StickyDiv>
      <StyledHeader
        Height={height}
        Opacity="0.98"
        blur={blur}
        position={position}
      >
        <Image src={Logo} alt="creative company logo" />
        {/* MOBILE HEADER */}
        {size.width < 768 && (
          <StyledHamburguerButton onClick={navOpenHandler}>
            <Image src={navOpen ? Cross : Hamburguer} alt="open menu icon" />
          </StyledHamburguerButton>
        )}
        {size.width < 768 && (
          <Transition in={navOpen} timeout={duration}>
            {(state) => (
              <NavBar
                // top={height}
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              />
            )}
          </Transition>
        )}
        {/* MOBILE HEADER */}
        {size.width >= 768 && <NavBar />}
      </StyledHeader>
    </StickyDiv>
  );
};

export default Header;
