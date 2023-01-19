import { ListItem, ListItemText, ListItemButton } from "@mui/material";

export default function Table(props: any) {
  return (
    <ListItem component="div" disablePadding>
      <>
        {props.text && (
          <ListItemText primary={props.text} sx={{ marginLeft: "10px" }} />
        )}
        <ListItemButton>
          <ListItemText primary={props.button} />
        </ListItemButton>
      </>
    </ListItem>
  );
}
