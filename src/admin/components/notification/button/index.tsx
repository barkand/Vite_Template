import React from "react";
import { useTranslation } from "react-i18next";

import { PublicContext } from "@/core/context";
import { IconButton, Tip } from "@/core/components";
import { StatusTypeEnum } from "@/core/constant";
import { PostAuthApi } from "@/core/libs";
import { NotificationsActiveIcon, NotificationsNoneIcon } from "@/core/icon";

export default function NotificationButton(props: any) {
  const { id, message, link, notified }: any = props;
  const { t } = useTranslation(["admin"]);
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const [notify, setNotify] = React.useState<boolean>(notified);

  const onClick = async () => {
    if (!publicCtx.user.connected) {
      setPublicCtx({
        ...publicCtx,
        alert: {
          open: true,
          message: t("need-login"),
          severity: StatusTypeEnum.Error,
        },
      });
      return;
    }

    if (notify) {
      let _result: any = await PostAuthApi(
        { item_id: id },
        "admin/delete_notify"
      );
      if (_result.code === 200) setNotify(false);
    } else {
      let _result: any = await PostAuthApi(
        {
          notify: {
            item_id: id,
            message: message,
            refer_link: link,
          },
        },
        "admin/save_notify"
      );
      if (_result.code === 200) setNotify(true);
    }
  };

  return (
    <>
      <IconButton onClick={onClick} style={props.style}>
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
