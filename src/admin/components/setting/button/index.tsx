import React from "react";
import { useTranslation } from "react-i18next";

import { PublicContext } from "../../../../core/context";
import { ColorSelect } from "../../../../core/theme";
import { LanguageButton } from "../../../../core/locales";
import {
  Dialog,
  IconButton,
  GridHeader,
  GridItem,
} from "../../../../core/components";
import { SettingsIcon } from "../../../../core/icon";

export default function SettingButton() {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);
  const { t } = useTranslation(["admin"]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <IconButton onClick={handleOpen} className="step-setting">
        <SettingsIcon />
      </IconButton>

      <Dialog
        title={t("settings")}
        open={open}
        setOpen={setOpen}
        fullscreen={publicCtx.device.isMobile}
      >
        <GridHeader
          style={{
            pl: publicCtx.device.isMobile ? 1 : 15,
            pr: publicCtx.device.isMobile ? 1 : 15,
            mt: 5,
            mb: 10,
          }}
          rowSpacing={6}
          spacing={4}
        >
          <GridItem xs={4}>{t("color")}</GridItem>
          <GridItem xs={7}>
            <ColorSelect />
          </GridItem>

          <GridItem xs={4}>{t("language")}</GridItem>
          <GridItem xs={7}>
            <LanguageButton />
          </GridItem>
        </GridHeader>
      </Dialog>
    </>
  );
}
