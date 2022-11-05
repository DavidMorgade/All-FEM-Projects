import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 27.72px;
  text-align: center;
  width: 28.8rem;
  height: 5.6rem;
  color: ${(props) => props.theme.heading};
`;

export default StyledHeading;
