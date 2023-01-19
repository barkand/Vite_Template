import { TextField } from "@mui/material";

const enum VariantTypes {
  standard = "standard",
  outlined = "outlined",
  filled = "filled",
}

export default function Textbox(props: any) {
  const { label, onChange, ...other } = props;

  return (
    <TextField
      id="Textbox-basic"
      variant={VariantTypes.standard}
      label={label}
      onChange={onChange}
      {...other}
    />
  );
}
