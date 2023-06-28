import React from "react";

import { PublicContext } from "@/core/context";
import { AlertBar } from "@/core/components";

export default function AlertBarComponent() {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);

  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const [severity, setSeverity] = React.useState("info");

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setPublicCtx({
      ...publicCtx,
      alert: { ...publicCtx.alert, open: false, message: "" },
    });
  };

  React.useEffect(() => {
    setMsg(publicCtx.alert.message);
    setSeverity(publicCtx.alert.severity);
    setOpen(publicCtx.alert.open);
  }, [publicCtx.alert]);

  return (
    <>
      <AlertBar
        open={open}
        handleClose={handleClose}
        severity={severity}
        message={msg}
      />
    </>
  );
}
