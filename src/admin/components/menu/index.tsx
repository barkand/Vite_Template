import React from "react";
import { useTranslation } from "react-i18next";

import { RoutesTypeEnum } from "../../../core/constant";
import { PublicContext } from "../../../core/context";
import { ButtonList } from "../../../core/components";
import { ProfileIcon } from "../../../core/icon";

export default function AdminMenu(props: any) {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);
  const { t } = useTranslation(["admin"]);

  return (
    <>
      {publicCtx.user.connected ? (
        <ButtonList
          to={RoutesTypeEnum.Profile}
          name={t("profile")}
          icon={<ProfileIcon />}
          onclick={props.onClose}
        />
      ) : (
        <></>
      )}
    </>
  );
}
