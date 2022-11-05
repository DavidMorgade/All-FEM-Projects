import { useEffect, useState } from 'react';
import { usePasswordContext } from '../../../../context/usePasswordContext';
import makePassword from '../../../../helpers/CreatePassword';
import {
  GenerateButton,
  StyledLabel,
  StyledLength,
  StyledLevel,
  StyledNumber,
  StyledStrength,
} from '../../../Text/StyledText';
import {
  LengthContainer,
  SquaresContainer,
  StyledForm,
  StyledIncludeContainer,
  StyledInputSquare,
  StyledRange,
  StyledSquare,
  StyledSquareInput,
  StyledStrengthContainer,
} from './StyledForm';
import SecurityLevel from '../../../../helpers/SecurityLevel';

const Form = () => {
  const [pass, setPass] = usePasswordContext();
  const [securityColor, setSecurityColor] = useState('');
  const [securityLevel, setSecurityLevel] = useState('');
  useEffect(() => {
    setSecurityColor(
      SecurityLevel(
        pass.length,
        pass.uppercase,
        pass.lowercase,
        pass.numbers,
        pass.symbols
      )
    );
    setSecurityLevel(
      securityColor === '#A4FFAF'
        ? 'STRONG'
        : securityColor === '#F8CD65'
        ? 'MEDIUM'
        : securityColor === '#FB7C58'
        ? 'WEAK'
        : securityColor === '#F64A4A'
        ? 'TOO WEAK'
        : ' '
    );
  }, [
    pass.length,
    pass.uppercase,
    pass.lowercase,
    pass.numbers,
    pass.symbols,
    securityColor,
  ]);
  const passLengthHandler = (e) => {
    setPass((oldState) => ({
      ...oldState,
      length: +e.target.value,
    }));
  };
  const passUppercaseHandler = (e) => {
    setPass((oldState) => ({
      ...oldState,
      uppercase: e.target.checked,
    }));
  };
  const passLowercaseHandler = (e) => {
    setPass((oldState) => ({
      ...oldState,
      lowercase: e.target.checked,
    }));
  };
  const passHasNumbersHandler = (e) => {
    setPass((oldState) => ({
      ...oldState,
      numbers: e.target.checked,
    }));
  };
  const passHasSymbolsHandler = (e) => {
    setPass((oldState) => ({
      ...oldState,
      symbols: e.target.checked,
    }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    setPass((oldState) => ({
      ...oldState,
      value: makePassword(
        pass.length,
        pass.uppercase,
        pass.lowercase,
        pass.numbers,
        pass.symbols
      ),
    }));
  };
  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <LengthContainer>
        <StyledLength>Character Length</StyledLength>
        <StyledNumber>{pass.length}</StyledNumber>
      </LengthContainer>
      <label>
        <StyledRange
          min="0"
          max="20"
          step="1"
          value={pass.length}
          onChange={passLengthHandler}
          type="range"
        />
      </label>
      <StyledIncludeContainer>
        <StyledInputSquare htmlFor="uppercase">
          <StyledSquareInput
            id="uppercase"
            onChange={passUppercaseHandler}
            type="checkbox"
          />
          <StyledLabel>Include Uppercase Letters</StyledLabel>
        </StyledInputSquare>
        <StyledInputSquare htmlFor="lowercase">
          <StyledSquareInput
            id="lowercase"
            onChange={passLowercaseHandler}
            type="checkbox"
          />
          <StyledLabel>Include Lowercase Letters</StyledLabel>
        </StyledInputSquare>
        <StyledInputSquare htmlFor="numbers">
          <StyledSquareInput
            id="numbers"
            onChange={passHasNumbersHandler}
            type="checkbox"
          />
          <StyledLabel>Include Numbers</StyledLabel>
        </StyledInputSquare>
        <StyledInputSquare htmlFor="symbols">
          <StyledSquareInput
            id="symbols"
            onChange={passHasSymbolsHandler}
            type="checkbox"
          />
          <StyledLabel>Include Symbols</StyledLabel>
        </StyledInputSquare>
      </StyledIncludeContainer>
      <StyledStrengthContainer>
        <StyledStrength>STRENGTH</StyledStrength>
        <StyledLevel>{!securityLevel ? ' ' : securityLevel}</StyledLevel>
        <SquaresContainer>
          <StyledSquare
            BgColor={securityColor}
            border={
              (securityColor === '#A4FFAF' ||
                securityColor === '#F8CD65' ||
                securityColor === '#FB7C58' ||
                securityColor === '#F64A4A') &&
              'none'
            }
          />
          <StyledSquare
            BgColor={
              (securityColor === '#FB7C58' ||
                securityColor === '#F8CD65' ||
                securityColor === '#A4FFAF') &&
              securityColor
            }
            border={
              (securityColor === '#A4FFAF' ||
                securityColor === '#F8CD65' ||
                securityColor === '#FB7C58') &&
              'none'
            }
          />
          <StyledSquare
            BgColor={
              (securityColor === '#F8CD65' || securityColor === '#A4FFAF') &&
              securityColor
            }
            border={
              (securityColor === '#A4FFAF' || securityColor === '#F8CD65') &&
              'none'
            }
          />
          <StyledSquare
            BgColor={securityColor === '#A4FFAF' && securityColor}
            border={securityColor === '#A4FFAF' && 'none'}
          />
        </SquaresContainer>
      </StyledStrengthContainer>
      <GenerateButton>GENERATE</GenerateButton>
    </StyledForm>
  );
};

export default Form;
