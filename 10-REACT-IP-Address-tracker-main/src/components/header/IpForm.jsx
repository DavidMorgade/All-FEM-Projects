// Custom Hook
import { useIpContext } from '../../context/useIpContext';
// Hooks
import { useState, useRef } from 'react';
// Styled Components
import { InputSubmit, InputText, StyledForm } from './styled-ipform';

const regexIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const IpForm = () => {
  const [ip, setIp] = useIpContext();
  const [ipNotValid, setIpNotValid] = useState(false);
  const ipRef = useRef();

  const ipHandler = (e) => {
    e.preventDefault();
    if (!regexIp.test(ipRef.current.value)) {
      setIpNotValid(true);
      ipRef.current.value = '';
      ipRef.current.blur();
      return;
    }
    setIp(ipRef.current.value)
    setIpNotValid(false);
  }
  const resetWarningHandler = () => {
    setIpNotValid(false);
  }

  return (
    <StyledForm className={ipNotValid ? 'warning' : ''}  onSubmit={ipHandler}>
      <InputText onClick={resetWarningHandler} ref={ipRef} placeholder={ipNotValid ? 'Error, enter a valid IP Address' : 'Search for any IP Address'} type='text'></InputText>
      <InputSubmit value={' '} type="submit"></InputSubmit>
    </StyledForm>
  );
};

export default IpForm;
