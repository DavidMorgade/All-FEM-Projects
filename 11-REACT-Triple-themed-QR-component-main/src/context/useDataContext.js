import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataWrapper({ children }) {
  const [data, setData] = useState('');

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
}
export function useDataContext() {
  return useContext(DataContext);
}
