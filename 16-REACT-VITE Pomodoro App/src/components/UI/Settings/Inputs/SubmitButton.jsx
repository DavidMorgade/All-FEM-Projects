import styled from 'styled-components';

export default function SubmitButton(params) {
  return <Button>Apply</Button>;
}

const Button = styled.button`
  all: unset;
  color: #fff;
  align-self: center;
  background-color: #f87070;
  padding: 1.7rem 4.7rem 2rem;
  border-radius: 2.65rem;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.984rem;
`;
