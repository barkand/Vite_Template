import Divider from "@mui/material/Divider";

export default function DividerMUI(props: any) {
  return <Divider sx={{ ...props.sx, width: "-webkit-fill-available" }} />;
}
