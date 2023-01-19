import React from "react";
import { Snackbar, Alert as MuiAlert } from "@mui/material";

const Alert: any = React.forwardRef(function Alert(props: any, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface AlertBarProps {
  open: any;
  handleClose: any;
  severity: any;
  message: string;
}

export default function AlertBar(props: AlertBarProps) {
  const { open, handleClose, severity, message } = props;

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity} onClose={handleClose} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
