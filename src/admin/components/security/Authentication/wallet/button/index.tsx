import React from "react";
import { useTranslation } from "react-i18next";

import { PublicContext } from "../../../../../../core/context";
import { IconButton, Tip } from "../../../../../../core/components";
import { LockIcon, LockOpenIcon } from "../../../../../../core/icon";

import useUser from "../hook/use-user";
import { Login, Logout } from "./loginLogout";

export default function Wallet() {
  const { t } = useTranslation(["admin"]);
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const { _, loading, loggedOut, mutate }: any = useUser();

  const authClick = () => {
    const auth = async () => {
      let _result: any;
      if (!loggedOut === true) {
        _result = await Logout();
        mutate(() => null);
      } else {
        let _walletType =
          publicCtx.device.isMobile || !(window as any).ethereum
            ? "app"
            : "plugin";
        localStorage.setItem("walletType", `${_walletType}`);

        _result = await Login();
        mutate();
      }

      setPublicCtx({
        ...publicCtx,
        user: _result.user,
        alert: {
          ..._result.alert,
          message: t(_result.alert.message),
        },
      });
    };

    auth();
  };

  React.useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      return;
    }

    if (!(!loggedOut === true) && publicCtx.user.connected) {
      if (
        localStorage.getItem("userId") === null ||
        localStorage.getItem("netId") === null
      ) {
        const logout = async () => {
          let _result = await Logout();
          setPublicCtx({
            ...publicCtx,
            user: _result.user,
            alert: {
              ..._result.alert,
              message: t(_result.alert.message),
            },
          });
        };
        logout();
      }
    }
  }, [loggedOut]);

  return (
    <>
      <IconButton onClick={authClick} className="step-auth">
        {!loggedOut === true ? (
          <Tip title={t("logout")}>
            <LockOpenIcon />
          </Tip>
        ) : (
          <Tip title={t("login")}>
            <LockIcon />
          </Tip>
        )}
      </IconButton>
    </>
  );
}
