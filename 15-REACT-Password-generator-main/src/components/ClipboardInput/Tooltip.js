import styled from 'styled-components';

const Tooltip = styled.div`
  width: 8rem;
  height: 3rem;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.strong};
  position: absolute;
  right: -1rem;
  bottom: 7rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  @media (min-width: 768px) {
    bottom: 10rem;
    width: 10rem;
    height: 4rem;
  }
`;

const TooltipText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export { Tooltip, TooltipText };
