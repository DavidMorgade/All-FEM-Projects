import { createContext, useContext, useState } from 'react';

const PlanetContext = createContext();

export function PlanetWrapper({ children }) {
  const [planet, setPlanet] = useState(0);

  return (
    <PlanetContext.Provider value={[planet, setPlanet]}>
      {children}
    </PlanetContext.Provider>
  );
}
export function usePlanetContext() {
  return useContext(PlanetContext);
}
