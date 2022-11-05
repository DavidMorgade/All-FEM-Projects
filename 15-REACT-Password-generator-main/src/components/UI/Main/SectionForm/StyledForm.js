import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 31.1rem;
  height: 38.6rem;
  @media (min-width: 768px) {
    width: 47.6rem;
    height: 47.2rem;
  }
`;
export const LengthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 47.6rem;
    height: 4.3rem;
  }
`;
export const StyledRange = styled.input`
  margin: 1.6rem auto 2rem;
  width: 31.1rem;
  height: 2.8rem;
  accent-color: ${(props) => props.theme.strong};
  background-color: ${(props) => props.theme.main};
  outline: none;
  @media (min-width: 768px) {
    width: 47.6rem;
    height: 2.8rem;
    cursor: pointer;
  }
`;

export const StyledIncludeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28rem;
  height: 13.2rem;
  position: relative;
  z-index: 0;
  gap: 1.6rem;
  @media (min-width: 768px) {
    width: 31.5rem;
    height: 15.2rem;
    gap: 1.9rem;
  }
`;
export const StyledInputSquare = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0.25rem;
    width: 1.9rem;
    height: 1.9rem;
    border: 2px solid #e6e5ea;
    z-index: -1;
  }
`;
export const StyledSquareInput = styled.input`
  position: relative;
  z-index: 10;
  width: 2rem;
  height: 2rem;
  visibility: hidden;
  accent-color: ${(props) => props.theme.strong};
  &:checked {
    visibility: visible;
  }
`;
export const StyledStrengthContainer = styled.div`
  width: 31.1rem;
  height: 5.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 1.6rem;
  background-color: ${(props) => props.theme.body};
  margin-top: 3.2rem;
  box-shadow: 0px 16px 5px -10px rgba(70, 96, 187, 0.198567);
  @media (min-width: 768px) {
    width: 47.6rem;
    height: 7.2rem;
    padding: 2.1rem 3.2rem 2rem;
  }
`;
export const SquaresContainer = styled.div`
  width: 6.4rem;
  height: 2.8rem;
  display: flex;
  justify-content: space-between;
`;
export const StyledSquare = styled.div`
  border: 2px solid ${(props) => props.border || props.theme.text};
  box-sizing: border-box;
  width: 1rem;
  height: 2.8rem;
  background-color: ${(props) => props.BgColor};
`;
