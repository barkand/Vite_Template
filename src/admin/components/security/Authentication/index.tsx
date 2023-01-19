import React from "react";

import { GetUser as ApiGetUser } from "./api";

import { PublicContext } from "../../../../core/context";

export default function Authentication({ children }: { children: any }) {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      return;
    }

    if (publicCtx.wallet.connected && publicCtx.user.name === "") {
      const fillDefault = async () => {
        let _user = await ApiGetUser();
        setPublicCtx({
          ...publicCtx,
          user: _user,
        });
      };
      fillDefault();
    }
  }, [loaded]);

  return <>{children}</>;
}
