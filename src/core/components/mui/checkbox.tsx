import { FormControlLabel, Checkbox } from "@mui/material";

export default function CheckboxMUI({ label, handleChange }: any) {
  return (
    <>
      <FormControlLabel
        control={<Checkbox onChange={handleChange} />}
        label={label}
      />
    </>
  );
}
