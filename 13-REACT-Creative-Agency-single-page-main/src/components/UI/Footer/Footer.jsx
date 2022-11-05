import { MediumHeading } from '../../text/StyledHeading';
import { StyledFooter } from './StyledFooter';
import Button from '../../buttons/Button';

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <MediumHeading lessWidth Align Color="#191921">
        Let's build something great together.
      </MediumHeading>
      <Button Width="23.9rem" Height="6.4rem">
        Schedule a Call
      </Button>
    </StyledFooter>
  );
};

export default Footer;
