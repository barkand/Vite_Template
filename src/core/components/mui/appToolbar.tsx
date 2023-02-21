import { AppBar, Toolbar } from "@mui/material";

export default function AppToolbar(props: any) {
  const { children }: { children: React.ReactNode } = props;

  return (
    <AppBar
      position="static"
      sx={{
        ...props.style,
        textAlign: "center",
      }}
      enableColorOnDark
    >
      <Toolbar variant="dense">{children}</Toolbar>
    </AppBar>
  );
}
