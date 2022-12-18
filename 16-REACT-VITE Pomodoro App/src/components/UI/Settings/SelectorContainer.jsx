import styled from 'styled-components';

export default function SelectorContainer({ children, height }) {
  return <StyledContainer height={height}>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 4.2rem;
  &::after {
    content: '';
    height: ${(props) => props.height};
    width: 80%;
    position: absolute;
    background-color: ${({ theme }) => theme.line};
    bottom: -2.4rem;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 20rem;
    margin-bottom: 4.9rem;
    &::after {
      width: 90%;
    }
  }
`;
