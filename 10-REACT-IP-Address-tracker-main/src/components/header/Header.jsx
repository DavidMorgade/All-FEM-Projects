// Components
import IpForm from './IpForm';
import Results from './Results';
// Styled Components
import { Container, Heading } from './styled-header';


const Header = () => {
  return (
    <Container>
      <Heading>IP Address tracker</Heading>
        <IpForm />
      <Results />
    </Container>
  );
};

export default Header;

