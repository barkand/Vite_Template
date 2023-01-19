import { CardMedia } from "@mui/material";

export default function Media(props: any) {
  const { image, alt, ...other }: any = props;

  return (
    <CardMedia
      component="img"
      height="auto"
      image={image}
      alt={alt}
      {...other}
    />
  );
}
