import { createContext, useContext, useState } from 'react';

const TechContext = createContext();

export function TechWrapper({ children }) {
  const [tech, setTech] = useState(0);

  return (
    <TechContext.Provider value={[tech, setTech]}>
      {children}
    </TechContext.Provider>
  );
}
export function useTechContext() {
  return useContext(TechContext);
}
