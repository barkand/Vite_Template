import { FormControlLabel, Checkbox } from "@mui/material";

export default function CheckboxMUI(props: any) {
  const { label, handleChange }: any = props;
  return (
    <>
      <FormControlLabel
        control={<Checkbox onChange={handleChange} />}
        sx={{ ...props.style, ml: 0, mr: 0 }}
        label={label}
      />
    </>
  );
}
