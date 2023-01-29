import React from "react";
import { useTranslation } from "react-i18next";

import { PublicContext } from "../../../../../../../core/context";
import { StatusTypeEnum } from "../../../../../../../core/constant";
import {
  Dialog,
  GridHeader,
  GridItem,
  Textbox,
  Button,
} from "../../../../../../../core/components";

import { Login } from "../loginLogout";

export default function Form({ openForm, setOpenForm, type, mutate }: any) {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const { t } = useTranslation(["admin"]);

  const [email, setEmail] = React.useState("");

  const emailHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const sendCode = async () => {
    if (email != "") {
      let _result = await Login(email);
      mutate();

      setPublicCtx({
        ...publicCtx,
        user: _result.user,
        alert: {
          open: true,
          message: "LoginSuccess",
          severity: StatusTypeEnum.Success,
        },
      });

      setOpenForm(false);
    }
  };

  return (
    <>
      {openForm && (
        <Dialog
          title={t("login")}
          open={openForm}
          setOpen={setOpenForm}
          fullscreen={publicCtx.device.isMobile}
        >
          <GridHeader
            sx={{ mt: 1, mb: 5, p: 3 }}
            rowSpacing={4}
            textAlign="center"
          >
            <GridItem xs={3}>{t(type)}</GridItem>
            <GridItem xs={9}>
              <Textbox onChange={emailHandle} />
            </GridItem>
            <GridItem xs={12}>
              <Button
                title={t("send-code")}
                variant="contained"
                onClick={sendCode}
              />
            </GridItem>
          </GridHeader>
        </Dialog>
      )}
    </>
  );
}
