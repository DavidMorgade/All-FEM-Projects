import { createContext, useContext, useState } from 'react';

const PasswordContext = createContext();

export function PasswordWrapper({ children }) {
  const [pass, setPass] = useState({
    length: 0,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    value: '',
  });

  return (
    <PasswordContext.Provider value={[pass, setPass]}>
      {children}
    </PasswordContext.Provider>
  );
}
export function usePasswordContext() {
  return useContext(PasswordContext);
}
