import React from "react";
import { useTranslation } from "react-i18next";

import { EditTypeEnum } from "../../../../core/constant";
import { PublicContext } from "../../../../core/context";
import {
  Dialog,
  IconButton,
  GridHeader,
  GridItem,
  Tip,
} from "../../../../core/components";
import {
  MoreHorizIcon,
  CheckCircleIcon,
  CancelIcon,
  EmptyCircleIcon,
} from "../../../../core/icon";

import AvatarEditor from "./avatar";
import UsernameEditor from "./username";

export default function Form() {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);
  const { t } = useTranslation(["admin"]);
  const [open, setOpen] = React.useState(false);

  const [uploadAvatar, setUploadAvatar] = React.useState(EditTypeEnum.None);
  const [editUsername, setEditUsername] = React.useState(EditTypeEnum.None);

  const handleClickOpen = () => setOpen(true);

  return (
    <>
      <IconButton
        onClick={handleClickOpen}
        style={{ position: "absolute", right: "0px" }}
      >
        <MoreHorizIcon />
      </IconButton>

      <Dialog
        title={t("edit")}
        open={open}
        setOpen={setOpen}
        fullscreen={publicCtx.device.isMobile}
      >
        <GridHeader style={{ mt: 1, mb: 5, p: 3 }} rowSpacing={4}>
          <GridItem xs={4}>{t("avatar")}</GridItem>
          <GridItem xs={7} style={{ pl: 2 }}>
            <AvatarEditor
              text={t("selectPhoto")}
              uploadAvatar={uploadAvatar}
              setUploadAvatar={setUploadAvatar}
            />
          </GridItem>
          <GridItem xs={1}>
            {uploadAvatar === EditTypeEnum.Edited ? (
              <CheckCircleIcon color="primary" />
            ) : (
              <EmptyCircleIcon color="primary" />
            )}
          </GridItem>

          <GridItem xs={4}>{t("username")}</GridItem>
          <GridItem xs={7}>
            <UsernameEditor setEditUsername={setEditUsername} />
          </GridItem>
          <GridItem xs={1}>
            {editUsername === EditTypeEnum.Edited ? (
              <CheckCircleIcon color="primary" />
            ) : editUsername === EditTypeEnum.Error ? (
              <Tip title={t("username-already-exist")}>
                <CancelIcon color="primary" />
              </Tip>
            ) : (
              <EmptyCircleIcon color="primary" />
            )}
          </GridItem>
        </GridHeader>
      </Dialog>
    </>
  );
}
