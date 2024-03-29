import { Typography } from "@mui/material";

export default function Label(props: any) {
  const { children, size, ...other } = props;

  return (
    <Typography
      component="div"
      variant={size}
      sx={{ ...props.style }}
      {...other}
    >
      {children}
    </Typography>
  );
}
