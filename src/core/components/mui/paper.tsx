import { Paper } from "@mui/material";

export default function PaperMUI(props: any) {
  const { children, shadow, ...other } = props;

  return (
    <Paper elevation={shadow} {...other}>
      {children}
    </Paper>
  );
}
