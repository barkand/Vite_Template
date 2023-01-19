import { Backdrop, CircularProgress } from "@mui/material";

export default function Progress(props: any) {
  const { color }: { color: any } = props;

  return (
    <div>
      <Backdrop
        sx={{ color: { color }, zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
