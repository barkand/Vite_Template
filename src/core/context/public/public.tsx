import React from "react";

import DefaultPublic from "./fill";

export const PublicContext = React.createContext({
  publicCtx: { ...DefaultPublic },
  setPublicCtx: (): any => {},
});

export const PublicProvider = ({ children }: { children: React.ReactNode }) => {
  const [publicCtx, setPublicCtx] = React.useState(DefaultPublic);
  const value: any = React.useMemo(
    () => ({ publicCtx, setPublicCtx }),
    [publicCtx]
  );

  return (
    <PublicContext.Provider value={value}>{children}</PublicContext.Provider>
  );
};
