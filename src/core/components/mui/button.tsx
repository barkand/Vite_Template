import Button from "@mui/material/Button";

export const enum Type {
  text = "text",
  contained = "contained",
  outlined = "outlined",
}

export default function ButtonMUI(props: any) {
  const { title, ...other } = props;
  return (
    <Button variant={props.type} {...other}>
      {title}
    </Button>
  );
}
