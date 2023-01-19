import Switch from "@mui/material/Switch";

export default function SwitchMUI({ checked, handleChange }: any) {
  return (
    <>
      <Switch checked={checked} onChange={handleChange} />
    </>
  );
}
