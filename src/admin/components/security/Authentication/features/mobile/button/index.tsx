import React from "react";
import { useTranslation } from "react-i18next";

import { PublicContext } from "../../../../../../../core/context";
import { IconButton, Tip } from "../../../../../../../core/components";
import { LockIcon, LockOpenIcon } from "../../../../../../../core/icon";

import useUser from "../../../hook/use-user";
import { Form, Logout } from "../../shared";

export default function MobileButton() {
  const { t } = useTranslation(["admin"]);
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const { _, loading, loggedOut, mutate }: any = useUser();
  const [openForm, setOpenForm] = React.useState(false);

  const authClick = () => {
    const auth = async () => {
      if (publicCtx.user.connected === true) {
        let _result = await Logout();
        mutate(() => null);

        setPublicCtx({
          ...publicCtx,
          user: _result.user,
          alert: {
            ..._result.alert,
            message: t(_result.alert.message),
          },
        });
      } else {
        setOpenForm(true);
      }
    };
    auth();
  };

  React.useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      return;
    }

    if (!(!loggedOut === true) && publicCtx.user.connected) {
      const logout = async () => {
        let _result: any = await Logout();
        mutate(() => null);

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
  }, [loggedOut]);

  return (
    <>
      <IconButton onClick={authClick} className="step-auth">
        {publicCtx.user.connected === true ? (
          <Tip title={t("logout")}>
            <LockOpenIcon />
          </Tip>
        ) : (
          <Tip title={t("login")}>
            <LockIcon />
          </Tip>
        )}
      </IconButton>
      <Form
        openForm={openForm}
        setOpenForm={setOpenForm}
        type={import.meta.env.VITE_AUTH_TYPE}
        mutate={mutate}
      />
    </>
  );
}
