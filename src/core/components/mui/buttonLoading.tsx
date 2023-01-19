import { LoadingButton } from "@mui/lab";

export default function ButtonLoading(props: any) {
  const { text, loading, onClick, ...other }: any = props;
  return (
    <LoadingButton loading={loading} onClick={onClick} {...other}>
      {text}
    </LoadingButton>
  );
}
