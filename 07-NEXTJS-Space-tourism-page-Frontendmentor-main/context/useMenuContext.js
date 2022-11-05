import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export function MenuWrapper({ children }) {
  const [menu, setMenu] = useState(false);

  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {children}
    </MenuContext.Provider>
  );
}
export function useMenuContext() {
  return useContext(MenuContext);
}
