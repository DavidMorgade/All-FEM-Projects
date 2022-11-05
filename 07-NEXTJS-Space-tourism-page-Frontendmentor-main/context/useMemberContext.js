import { createContext, useContext, useState } from 'react';

const MemberContext = createContext();

export function MemberWrapper({ children }) {
  const [member, setMember] = useState(0);

  return (
    <MemberContext.Provider value={[member, setMember]}>
      {children}
    </MemberContext.Provider>
  );
}
export function useMemberContext() {
  return useContext(MemberContext);
}
