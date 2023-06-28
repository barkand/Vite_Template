import React from "react";
import { useTour } from "@reactour/tour";
import { useTranslation } from "react-i18next";

import { Modal, Button, Label, Divider, Checkbox } from "@/core/components";

import { PublicContext } from "@/core/context";

export default function WelcomeForm() {
  const { t } = useTranslation(["admin", "public"]);
  const { publicCtx } = React.useContext(PublicContext);
  const [open, setOpen] = React.useState(true);
  const { setIsOpen } = useTour();

  const closeForm = () => {
    setOpen(false);
  };

  const startTour = () => {
    setOpen(false);
    setIsOpen(true);
  };

  const doNotShowForm = () => {
    localStorage.setItem("tour", "false");
    closeForm();
  };

  return (
    <>
      {import.meta.env.VITE_WELCOME_FORM === "true" &&
        localStorage.getItem("tour") !== "false" && (
          <Modal open={open} handleClose={closeForm}>
            <div
              className={publicCtx.culture.name}
              style={{ direction: publicCtx.culture.direction }}
            >
              <Label size="h6">
                {t("welcome-tour")} {t("site-name", { ns: "public" })}
              </Label>
              <Divider style={{ mb: 2, mt: 4 }} />

              <Button
                onClick={startTour}
                variant="outlined"
                title={t("open-tour")}
                style={{ ml: 2, mr: 2 }}
              />
              <Button
                onClick={closeForm}
                variant="outlined"
                title={t("close")}
                style={{ ml: 2, mr: 2 }}
              />

              <Divider style={{ mb: 2, mt: 4 }} />
              <Checkbox
                label={t("Do-not-show-tour")}
                handleChange={doNotShowForm}
              />
            </div>
          </Modal>
        )}
    </>
  );
}
