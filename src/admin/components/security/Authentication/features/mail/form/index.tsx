import React from "react";
import { useTranslation } from "react-i18next";

import { PublicContext } from "../../../../../../../core/context";
import {
  Dialog,
  GridHeader,
  GridItem,
  Textbox,
  Button,
} from "../../../../../../../core/components";

import { Login, SendCode } from "../loginLogout";

export default function Form({ openForm, setOpenForm, type, mutate }: any) {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);
  const { t } = useTranslation(["admin"]);
  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState("");
  const [sended, setSended] = React.useState(false);

  const emailHandle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const codeHandle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCode(event.target.value);

  const sendCode = async () => {
    if (email === "") return;
    let _result = await SendCode(email);

    if (_result.code === 200) setSended(true);
  };

  const login = async () => {
    if (code === "") return;

    let _result: any = await Login(email, code);

    if (_result.code === 200) {
      mutate();
      setOpenForm(false);
    }

    setPublicCtx({
      ...publicCtx,
      user: _result.user,
      alert: _result.alert,
    });
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
            {sended ? (
              <>
                <GridItem xs={9}>{email}</GridItem>
                <GridItem xs={3}>{"code"}</GridItem>
                <GridItem xs={9}>
                  <Textbox onChange={codeHandle} />
                </GridItem>
                <GridItem xs={12}>
                  <Button
                    title={t("login")}
                    variant="contained"
                    onClick={login}
                  />
                </GridItem>
              </>
            ) : (
              <>
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
              </>
            )}
          </GridHeader>
        </Dialog>
      )}
    </>
  );
}
