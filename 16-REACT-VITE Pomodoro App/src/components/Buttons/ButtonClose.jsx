import styled from 'styled-components';
import IconClose from '../../images/IconClose';

const StyledCloseButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const CloseButton = ({ closeSettings }) => {
  return (
    <StyledCloseButton onClick={closeSettings}>
      <IconClose />
    </StyledCloseButton>
  );
};

export default CloseButton;
