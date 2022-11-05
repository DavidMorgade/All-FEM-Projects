import { createContext, useContext, useState } from "react";

const LoadContext = createContext();

export function LoadWrapper({ children }) {
  const [load, setLoad] = useState(false);

  return (
    <LoadContext.Provider value={[load, setLoad]}>
      {children}
    </LoadContext.Provider>
  );
}
export function useLoadContext() {
  return useContext(LoadContext);
}
