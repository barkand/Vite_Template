import Divider from "@mui/material/Divider";

export default function DividerMUI(props: any) {
  return <Divider sx={{ ...props.style, width: "-webkit-fill-available" }} />;
}
