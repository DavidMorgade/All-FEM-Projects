import styled from 'styled-components';

const StickyDiv = styled.div`
  height: 11rem;
  position: sticky;
  top: -1px;
  z-index: 500000;
  @media (min-width: 768px) {
    height: 17.8rem;
  }
`;

export default StickyDiv;
