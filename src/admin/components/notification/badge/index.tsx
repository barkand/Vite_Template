import React from "react";

import { PublicContext } from "../../../../core/context";
import { RoutesTypeEnum } from "../../../../core/constant";
import { BadgeButton } from "../../../../core/components";
import { PostAuthApi } from "../../../../core/libs";
import { NotificationsIcon } from "../../../../core/icon";

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
        let _result: any = await PostAuthApi({}, "admin/get_notifications");

        if (_result.code === 200) {
          setNotifications(_result.items);
        }
      };

      fetchData();
    }
  }, [loaded]);

  const seenItem = async (id: number) => {
    await PostAuthApi({ item_id: id }, "admin/seen_notify");
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
