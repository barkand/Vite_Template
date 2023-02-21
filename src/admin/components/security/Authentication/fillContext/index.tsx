import React from "react";

import { PublicContext } from "../../../../../core/context";
import { PostAuthApi } from "../../../../../core/libs";

export default function Authentication({ children }: { children: any }) {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      return;
    }

    if (publicCtx.user.connected && publicCtx.user.username === "") {
      const fillDefault = async () => {
        let _result = await PostAuthApi({}, "admin/user");

        if (_result && _result.code === 200) {
          let _user = {
            user_id: _result.items.user_id,
            username: _result.items.username,
            score: _result.items.score ?? 0,
            avatar: "",
            connected: true,
          };

          if (_result.items.avatar)
            _user.avatar = `${import.meta.env.VITE_SERVER_PATH}/${
              import.meta.env.VITE_UPLOAD_FOLDER
            }/users/${_result.items.user_id}.webp`;

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
