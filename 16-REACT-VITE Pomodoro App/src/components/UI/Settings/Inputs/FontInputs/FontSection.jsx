import SelectorContainer from '../../SelectorContainer';
import { StyledH4 } from '../../../../Headings/Headings';
import ButtonsContainer from '../../ButtonsContainer';
import SelectColorFont from '../../../../Buttons/SelectColorFont';
import { useState } from 'react';

export default function FontSection() {
  const [firstFont, setFirstFont] = useState('white');
  const [secondFont, setSecondFont] = useState('white');
  const [thirdFont, setThirdFont] = useState('white');
  const firstFontHandler = (e) => {
    e.preventDefault();
    setFirstFont('#161932');
    setSecondFont('white');
    setThirdFont('white');
  };
  const secondFontHandler = (e) => {
    e.preventDefault();
    setSecondFont('#161932');
    setFirstFont('white');
    setThirdFont('white');
  };
  const thirdFontHandler = (e) => {
    e.preventDefault();
    setThirdFont('#161932');
    setFirstFont('white');
    setSecondFont('white');
  };
  return (
    <SelectorContainer height="1px">
      <StyledH4>Font</StyledH4>
      <ButtonsContainer>
        <SelectColorFont
          onClick={firstFontHandler}
          bgColor={firstFont}
          color={firstFont}
          selected={true}
          name="font"
          weight="700"
        >
          Aa
        </SelectColorFont>
        <SelectColorFont
          onClick={secondFontHandler}
          bgColor={secondFont}
          color={secondFont}
          name="font"
          weight="400"
        >
          Aa
        </SelectColorFont>
        <SelectColorFont
          onClick={thirdFontHandler}
          bgColor={thirdFont}
          color={thirdFont}
          name="font"
          weight="700"
        >
          Aa
        </SelectColorFont>
      </ButtonsContainer>
    </SelectorContainer>
  );
}
