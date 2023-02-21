import { Grid } from "@mui/material";

export function GridHeader(props: any) {
  const { children, ...other } = props;

  return (
    <Grid container sx={{ ...props.style }} {...other}>
      {children}
    </Grid>
  );
}

export function GridItem(props: any) {
  const { children, ...other } = props;

  return (
    <Grid item sx={{ ...props.style, width: "100%" }} {...other}>
      {children}
    </Grid>
  );
}
