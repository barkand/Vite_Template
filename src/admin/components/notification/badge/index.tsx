import React from "react";

import { PublicContext } from "../../../../core/context";
import { BadgeButton } from "../../../../core/components";
import { NotificationsIcon } from "../../../../core/icon";
import { RoutesTypeEnum } from "../../../../core/constant";

import { GetNotification, SeenNotification } from "../api";

export default function Notification(props: any) {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const { publicCtx }: any = React.useContext(PublicContext);
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      return;
    }

    if (publicCtx.wallet.connected) {
      const fetchData = async () => {
        let _result: any = await GetNotification();

        if (_result.code === 200) {
          setNotifications(_result.items);
        }
      };

      fetchData();
    }
  }, [loaded]);

  const seenItem = async (id: number) => {
    await SeenNotification(id);
  };

  return (
    <>
      <BadgeButton
        sx={props.sx}
        items={notifications}
        link={RoutesTypeEnum.Item}
        onClick={seenItem}
      >
        <NotificationsIcon />
      </BadgeButton>
    </>
  );
}
