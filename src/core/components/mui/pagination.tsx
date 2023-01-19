import { Stack, Pagination } from "@mui/material";

export default function PaginationMUI({
  count,
  onChange,
  page,
}: {
  count: any;
  onChange: any;
  page: any;
}) {
  return (
    <Stack spacing={2} sx={{ direction: "ltr" }}>
      <Pagination
        color="primary"
        count={count}
        onChange={onChange}
        page={page}
      />
    </Stack>
  );
}
