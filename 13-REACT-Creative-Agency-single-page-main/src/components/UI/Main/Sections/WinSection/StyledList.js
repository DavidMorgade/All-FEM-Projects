import styled from 'styled-components';

const StyledList = styled.ul`
  min-height: 55.7rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1.6rem;
  @media (min-width: 768px) {
    height: 100%;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.main};
    padding: 0 4.3rem 0 4rem;
    margin-bottom: 20.4rem;
  }
  @media (min-width: 1440px) {
    align-items: flex-end;
    padding: 10rem 10.6rem 35rem 30.5rem;
    min-height: 140rem;
    min-width: 89.5rem;
    margin-bottom: 17rem;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  &::before {
    content: ${(props) =>
      props.content === '01'
        ? "'01'"
        : props.content === '02'
        ? "'02'"
        : "'03'"};
    display: block;
    position: absolute;
    width: 9.2rem;
    height: 8.8rem;
    font-size: 8rem;
    line-height: 8.8rem;
    font-weight: 800;
    bottom: 7rem;
    left: -2rem;
    opacity: 0.25;
    color: #fff;
  }
`;

export { StyledList, StyledListItem };
