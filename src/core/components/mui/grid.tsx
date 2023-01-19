import { Grid } from "@mui/material";

export function GridHeader(props: any) {
  const { children, ...other } = props;

  return (
    <Grid container {...other}>
      {children}
    </Grid>
  );
}

export function GridItem(props: any) {
  const { children, ...other } = props;

  return (
    <Grid item sx={{ ...props.sx, width: "100%" }} {...other}>
      {children}
    </Grid>
  );
}
