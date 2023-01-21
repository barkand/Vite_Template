import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

export default function ButtonList(props: any) {
  const { to, name, icon, onclick } = props;
  return (
    <>
      <ListItem
        component={Link}
        to={to}
        onClick={onclick}
        disablePadding
        className={props.className}
      >
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}
