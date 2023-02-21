import { FormControlLabel, Checkbox } from "@mui/material";

export default function CheckboxMUI({ label, handleChange }: any) {
  return (
    <>
      <FormControlLabel
        control={<Checkbox onChange={handleChange} />}
        sx={{ ml: 0, mr: 0 }}
        label={label}
      />
    </>
  );
}
