import styled from 'styled-components';

const StyledNavBar = styled.nav`
  background-color: ${(props) => props.theme.mainBlack};
  position: absolute;
  width: 25.2rem;
  height: 29.2rem;
  top: ${(props) => props.top || '11rem'};
  right: 2.6rem;
  z-index: 1001111111;
  @media (min-width: 768px) {
    position: static;
    display: flex;
    width: 43.8rem;
    height: 100%;
    padding: 0 4rem 0 3.3rem;
    background-color: ${(props) => props.theme.main};
  }
  @media (min-width: 1440px) {
    width: 70.5rem;
    padding-right: 16.5rem;
    padding-left: 6.9rem;
  }
`;
const StyledList = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;
const StyledListItem = styled.li`
  color: ${(props) => props.theme.text};
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 3.2rem;
  text-align: center;
  transition: color 0.5s ease;
  &:hover {
    color: ${(props) => props.theme.main};
  }
  @media (min-width: 768px) {
    &:hover {
      color: ${(props) => props.theme.mainBlack};
    }
  }
`;

export { StyledNavBar, StyledList, StyledListItem };
