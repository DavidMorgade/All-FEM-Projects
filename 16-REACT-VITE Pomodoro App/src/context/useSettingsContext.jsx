import { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export function SettingsWrapper({ children }) {
  const [settings, setSettings] = useState([25, 5, 10]);

  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {children}
    </SettingsContext.Provider>
  );
}
export function useSettingsContext() {
  return useContext(SettingsContext);
}
