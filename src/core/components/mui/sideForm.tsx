import { Divider, IconButton, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ChevronLeftIcon, MenuIcon } from "@/core/icon";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SideForm(props: any) {
  const { children } = props;
  let openDrawer = () => props.setIsDrawerOpen(true);
  let closeDrawer = () => props.setIsDrawerOpen(false);

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={props.isDrawerOpen ? closeDrawer : openDrawer}
        sx={{ mr: 2 }}
        className="step-menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={props.isDrawerOpen}
        onClose={closeDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        <Divider />
        <DrawerHeader>
          <IconButton onClick={closeDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {children}
      </Drawer>
    </>
  );
}
