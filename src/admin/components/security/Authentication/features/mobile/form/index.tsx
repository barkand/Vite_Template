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
  const [mobile, setMobile] = React.useState("");
  const [code, setCode] = React.useState("");
  const [sended, setSended] = React.useState(false);

  const emailHandle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMobile(event.target.value);

  const codeHandle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCode(event.target.value);

  const sendCode = async () => {
    if (mobile === "") return;
    let _result = await SendCode(mobile);

    if (_result.code === 200) setSended(true);
  };

  const login = async () => {
    if (code === "") return;

    let _result: any = await Login(mobile, code);

    if (_result.code === 200) {
      mutate();
      setOpenForm(false);
      setSended(false);
    }

    setPublicCtx({
      ...publicCtx,
      user: _result.user,
      alert: {
        ..._result.alert,
        message: t(_result.alert.message),
      },
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
            sx={{ mt: 1, mb: 5, minHeight: 200, width: 350 }}
            rowSpacing={4}
            textAlign="center"
          >
            {sended ? (
              <>
                <GridItem xs={3}>{t(type)}</GridItem>
                <GridItem xs={9}>{mobile}</GridItem>
                <GridItem xs={3}>{"code"}</GridItem>
                <GridItem xs={9}>
                  <Textbox onChange={codeHandle} />
                </GridItem>
                <GridItem xs={12}>
                  <Button
                    title={t(`change-${import.meta.env.VITE_AUTH_TYPE}`)}
                    variant="contained"
                    onClick={() => setSended(false)}
                    sx={{ mr: 5 }}
                  />
                  <Button
                    title={t("login")}
                    variant="contained"
                    onClick={login}
                  />
                </GridItem>
              </>
            ) : (
              <>
                <GridItem xs={3}>{t(type)}</GridItem>
                <GridItem xs={9}>
                  <Textbox onChange={emailHandle} />
                </GridItem>
                <GridItem xs={12}> </GridItem>
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
