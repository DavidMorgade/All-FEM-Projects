import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;
  width: 15rem;
  height: 5rem;
  background-color: ${(props) => props.theme.main};
  border-radius: 3rem;
  transition: justify-content 1s ease;
`;

export default ButtonContainer;
