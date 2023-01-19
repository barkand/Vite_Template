import * as React from "react";
import {
  Button,
  Dialog,
  List,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

import { PublicContext } from "../../context";
import { CloseIcon } from "../../../core/icon";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogMUI(props: any) {
  const { title, button, children, open, setOpen, fullscreen, ...other } =
    props;
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog
        fullScreen={fullscreen}
        open={open}
        onClose={handleClose}
        TransitionComponent={fullscreen ? Transition : undefined}
        {...other}
      >
        <div
          className={publicCtx.culture.name}
          style={{ direction: publicCtx.culture.direction, width: "auto" }}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                sx={{ ml: 2, mr: 2, flex: 1 }}
                variant="h6"
                component="div"
              >
                {title}
              </Typography>
              {button && (
                <Button autoFocus color="inherit" onClick={handleClose}>
                  {button}
                </Button>
              )}
            </Toolbar>
          </AppBar>
          <List>{children}</List>
        </div>
      </Dialog>
    </>
  );
}
