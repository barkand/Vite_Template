import { IconButton } from "@mui/material";

export default function IconButtonMUI(props: any) {
  const { children, onClick, ...other } = props;

  return (
    <IconButton
      sx={{ width: "40px", height: "40px", ...props.style }}
      aria-label={props.label}
      onClick={onClick}
      {...other}
    >
      {children}
    </IconButton>
  );
}
