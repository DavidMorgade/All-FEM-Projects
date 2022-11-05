import SpecialLink from '../../../../links/SpecialLink';
import {
  CustomParagraph,
  CustomSpan,
  MediumHeading,
} from '../../../../text/StyledHeading';
import StyledTextPart from './StyledTextPart';

const TextPart = () => {
  return (
    <StyledTextPart>
      <MediumHeading>
        <CustomSpan>Design </CustomSpan>is strategic.
      </MediumHeading>
      <CustomParagraph hasQuotes>
        A well-crafted design strategy consistently produces desired outcomes
        and brand awareness. We are firm believers that success lies in creative
        collaboration with our clients.
      </CustomParagraph>
      <SpecialLink>Schedule a Call</SpecialLink>
    </StyledTextPart>
  );
};

export default TextPart;
