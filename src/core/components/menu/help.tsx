import { useTranslation } from "react-i18next";
import { useTour } from "@reactour/tour";

import { RoutesTypeEnum } from "../../constant";
import { ButtonList } from "..";
import { HelpIcon } from "../../icon";

export default function HelpMenu(props: any) {
  const { t } = useTranslation(["admin"]);
  const { setIsOpen } = useTour();

  const openTour = () => {
    props.onClose();
    setIsOpen(true);
  };

  return (
    <>
      <ButtonList
        to={RoutesTypeEnum.Home}
        name={t("help")}
        icon={<HelpIcon />}
        onclick={openTour}
      />
    </>
  );
}
