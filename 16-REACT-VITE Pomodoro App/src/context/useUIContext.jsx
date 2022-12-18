import { createContext, useContext, useState } from 'react';

const UserInterfaceContext = createContext();

export function UserInterfaceWrapper({ children }) {
  const [userInterface, setUserInterface] = useState({
    font: 'Kumbh Sans',
    color: 'red',
  });

  return (
    <UserInterfaceContext.Provider value={[userInterface, setUserInterface]}>
      {children}
    </UserInterfaceContext.Provider>
  );
}
export function useUserInterfaceContext() {
  return useContext(UserInterfaceContext);
}
