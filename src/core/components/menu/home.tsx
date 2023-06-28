import { useTranslation } from "react-i18next";

import { RoutesTypeEnum } from "@/core/constant";
import { ButtonList } from "..";
import { HomeIcon } from "@/core/icon";

export default function HomeMenu(props: any) {
  const { t } = useTranslation(["admin"]);

  return (
    <ButtonList
      to={RoutesTypeEnum.Home}
      name={t("home")}
      icon={<HomeIcon />}
      onclick={props.onClose}
    />
  );
}
