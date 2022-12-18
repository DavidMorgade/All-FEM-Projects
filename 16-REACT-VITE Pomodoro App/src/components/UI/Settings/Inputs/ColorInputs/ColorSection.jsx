import SelectorContainer from '../../SelectorContainer';
import { StyledH4 } from '../../../../Headings/Headings';
import ButtonsContainer from '../../ButtonsContainer';
import SelectColorFont from '../../../../Buttons/SelectColorFont';
import { useState } from 'react';

export default function ColorSection() {
  const [redClicked, setRedClicked] = useState(false);
  const [blueClicked, setBlueClicked] = useState(false);
  const [purpleClicked, setPurpleClicked] = useState(false);
  const redClickHandler = (e) => {
    e.preventDefault();
    setRedClicked(true);
    setBlueClicked(false);
    setPurpleClicked(false);
  };
  const blueClickHandler = (e) => {
    e.preventDefault();
    setBlueClicked(true);
    setRedClicked(false);
    setPurpleClicked(false);
  };
  const purpleClickHandler = (e) => {
    e.preventDefault();
    setPurpleClicked(true);
    setBlueClicked(false);
    setRedClicked(false);
  };

  return (
    <SelectorContainer>
      <StyledH4>Color</StyledH4>
      <ButtonsContainer>
        <SelectColorFont
          onClick={redClickHandler}
          bgColor="#F87070"
          name="font"
          weight="700"
          color="white"
        >
          {redClicked && '✔'}
        </SelectColorFont>
        <SelectColorFont
          onClick={blueClickHandler}
          bgColor="#70F3F8"
          name="font"
          weight="400"
          color="white"
        >
          {blueClicked && '✔'}
        </SelectColorFont>
        <SelectColorFont
          onClick={purpleClickHandler}
          bgColor="#D881F8"
          name="font"
          weight="700"
          color="white"
        >
          {purpleClicked && '✔'}
        </SelectColorFont>
      </ButtonsContainer>
    </SelectorContainer>
  );
}
