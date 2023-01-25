import React from "react";

import { PublicContext } from "../../../../core/context";
import { PostAuthApi } from "../../../../core/libs";

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
        let _result = await PostAuthApi({}, "admin/user");

        let _avatar = "";
        if (_result && _result.items.avatar) {
          _avatar = `${import.meta.env.VITE_UPLOAD_PATH}/${
            import.meta.env.VITE_UPLOAD_FOLDER
          }/users/${_result.items.wallet}.webp`;

          let _user = {
            name: _result.items.username,
            avatar: _avatar,
            score: _result.items.score ?? 0,
          };

          setPublicCtx({
            ...publicCtx,
            user: _user,
          });
        }
      };
      fillDefault();
    }
  }, [loaded]);

  return <>{children}</>;
}
