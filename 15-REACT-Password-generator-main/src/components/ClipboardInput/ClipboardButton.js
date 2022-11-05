import styled from 'styled-components';

const ClipboardButton = styled.button`
  all: unset;
  cursor: pointer;
  filter: ${(props) => props.theme.copyclipLight};
  transition: filter 0.5s ease;
  &:hover {
    filter: ${(props) => props.theme.copyclip};
  }
  .active {
    transition: transform 0.2s ease;
    transform: scale(150%);
  }
`;

export default ClipboardButton;
