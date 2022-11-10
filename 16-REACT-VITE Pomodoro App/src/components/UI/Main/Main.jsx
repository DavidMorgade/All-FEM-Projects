import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 51.8rem;

  @media (min-width: 768px) {
    height: 73.4rem;
    justify-content: space-around;
  }
  @media (min-width: 1440px) {
    height: 60.9rem;
    justify-content: center;
  }
`;

const Main = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <StyledMain>{children}</StyledMain>
    </React.Fragment>
  );
};

export default Main;
