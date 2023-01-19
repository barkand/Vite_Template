import { IconButton } from "@mui/material";

export default function IconButtonMUI(props: any) {
  const { children, onClick }: { children: React.ReactNode; onClick: any } =
    props;

  return (
    <IconButton
      sx={{ ...props.sx, width: "40px", height: "40px" }}
      aria-label={props.label}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
}
