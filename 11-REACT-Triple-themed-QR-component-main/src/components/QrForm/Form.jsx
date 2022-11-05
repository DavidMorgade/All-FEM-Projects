import { useEffect, useRef, useState } from 'react';
import { useDataContext } from '../../context/useDataContext';
import { StyledForm, StyledInput, StyledInputSubmit } from './StyledForm';

const Form = ({ theme, setError, error }) => {
  const [data, setData] = useDataContext();
  const [colorTheme, setColorTheme] = useState('');
  const inputRef = useRef();
  useEffect(() => {
    setColorTheme(
      theme === 'pink' ? 'D2B9B5' : theme === 'dark' ? '141D2F' : 'D5E1EF'
    );
    if (inputRef.current.value === '' || inputRef.current.value === 0) return;
    setData(
      `https://api.qrserver.com/v1/create-qr-code/?data=${inputRef.current.value}&size=160x160&bgcolor=${colorTheme}`
    );
  }, [theme, setData, colorTheme]);
  const onSubmitHandler = (e) => {
    setError(false);
    e.preventDefault();
    if (inputRef.current.value === '' || inputRef.current.value === '0')
      return setError(true);
    setData(
      `https://api.qrserver.com/v1/create-qr-code/?data=${inputRef.current.value}&size=160x160&bgcolor=${colorTheme}`
    );
  };
  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledInputSubmit
        // onClick={(e) => e.preventDefault()}
        type="submit"
        value="Generate QR"
      />
      <StyledInput
        onChange={() => setError(false)}
        className={error && 'error'}
        newUrl={data}
        ref={inputRef}
        type="text"
        placeholder={!error ? '¡Enter your url here!' : 'Error, nothing typed'}
      />
    </StyledForm>
  );
};

export default Form;
