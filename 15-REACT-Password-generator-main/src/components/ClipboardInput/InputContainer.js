import styled from 'styled-components';

const InputContainer = styled.div`
  width: 34.3rem;
  height: 6.4rem;
  background-color: ${(props) => props.theme.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.55rem 0 1.6rem;
  position: relative;
  box-shadow: 0px 16px 15px -10px rgba(70, 96, 187, 0.198567);
  @media (min-width: 768px) {
    width: 54rem;
    height: 8rem;
  }
`;

export default InputContainer;
