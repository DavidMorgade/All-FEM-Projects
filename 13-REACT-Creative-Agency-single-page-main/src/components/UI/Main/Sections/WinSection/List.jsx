import { CustomParagraph, LittleHeading } from '../../../../text/StyledHeading';
import { StyledList, StyledListItem } from './StyledList';

const List = () => {
  return (
    <StyledList>
      <StyledListItem content="01">
        <LittleHeading>Brand Strategy</LittleHeading>
        <CustomParagraph>
          Brand strategy is critical for long-term success. Outshining
          competitors and capturing the target audience are key.
        </CustomParagraph>
      </StyledListItem>
      <StyledListItem content="02">
        <LittleHeading>Brand Design</LittleHeading>
        <CustomParagraph>
          Keeping the brand design unique and meaningful helps in communicating
          the brand’s value effectively.
        </CustomParagraph>
      </StyledListItem>
      <StyledListItem content="03">
        <LittleHeading>Web Design</LittleHeading>
        <CustomParagraph>
          A beautifully crafted website is the best tool for brand awareness,
          and ultimately results in increased revenues.
        </CustomParagraph>
      </StyledListItem>
    </StyledList>
  );
};

export default List;
