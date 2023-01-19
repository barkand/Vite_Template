import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

interface ThemeProps {
  children: React.ReactNode;
  theme: any;
}

export default function Theme(props: ThemeProps) {
  const { children, theme } = props;
  const muiTheme = createTheme(theme);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
