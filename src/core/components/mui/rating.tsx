import Rating from "@mui/material/Rating";

export default function RatingMUI(props: any) {
  const { value, size, ...other } = props;

  return (
    <Rating
      name="rating"
      readOnly
      value={value}
      size={size}
      sx={{ ...props.style }}
      {...other}
    />
  );
}
