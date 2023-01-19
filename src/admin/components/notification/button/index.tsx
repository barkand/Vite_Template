import React from "react";
import { useTranslation } from "react-i18next";

import { PublicContext } from "../../../../core/context";
import { IconButton, Tip } from "../../../../core/components";
import {
  NotificationsActiveIcon,
  NotificationsNoneIcon,
} from "../../../../core/icon";
import { StatusTypeEnum } from "../../../../core/constant";

import { SaveNotification, DeleteNotification } from "../api";

export default function Notification(props: any) {
  const { id, notified }: any = props;
  const { t } = useTranslation(["admin"]);
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const [notify, setNotify] = React.useState<boolean>(notified);

  const onClick = async () => {
    if (!publicCtx.wallet.connected) {
      setPublicCtx({
        ...publicCtx,
        alert: {
          open: true,
          message: t("NeedLogin"),
          severity: StatusTypeEnum.Error,
        },
      });
      return;
    }

    if (notify) {
      let _result: any = await DeleteNotification(id);
      if (_result.code === 200) setNotify(false);
    } else {
      let _result: any = await SaveNotification(id);
      if (_result.code === 200) setNotify(true);
    }
  };

  return (
    <>
      <IconButton onClick={onClick} sx={props.sx}>
        {notify ? (
          <Tip title={t("un-notify")}>
            <NotificationsActiveIcon />
          </Tip>
        ) : (
          <Tip title={t("notify")}>
            <NotificationsNoneIcon />
          </Tip>
        )}
      </IconButton>
    </>
  );
}
