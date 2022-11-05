import { createContext, useContext, useState } from "react";

const IpContext = createContext();

export function IpWrapper({ children }) {
  const [ip, setIp] = useState(0);

  return (
    <IpContext.Provider value={[ip, setIp]}>{children}</IpContext.Provider>
  );
}
export function useIpContext() {
  return useContext(IpContext);
}
