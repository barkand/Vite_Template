import { Slider, InputLabel } from "@mui/material";

export default function RangeSlider(props: any) {
  const { selected, onChange } = props;

  return (
    <>
      {props.title && <InputLabel>{props.title}</InputLabel>}
      <Slider
        getAriaLabel={() => "range"}
        value={selected}
        onChange={onChange}
        valueLabelDisplay="auto"
        getAriaValueText={(value: number) => `${value}`}
        min={props.min}
        max={props.max}
      />
    </>
  );
}
