import { useState } from 'react';
import styled from 'styled-components';

export default function SelectColorFont({
  font,
  name,
  weight,
  children,
  defaultColor,
  bgColor,
  onClick,
  color,
}) {
  console.log(defaultColor);
  return (
    <StyledLabel>
      <Button
        bgColor={bgColor}
        onClick={onClick}
        defaultColor={defaultColor}
        name={name}
        type="radio"
        font={font}
      />
      <StyledSpan color={color} weight={weight}>
        {children}
      </StyledSpan>
    </StyledLabel>
  );
}

const Button = styled.button`
  border: none;
  text-align: center;
  cursor: pointer;
  width: 4rem;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  height: 4rem;
  accent-color: ${(props) => props.defaultColor || props.theme.menuText};
`;
const StyledLabel = styled.label`
  width: 4rem;
  height: 4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledSpan = styled.span`
  position: absolute;
  pointer-events: none;
  font-weight: ${({ weight }) => weight};
  color: ${(props) => (props.color === 'white' ? '#161932' : 'white')};
`;
