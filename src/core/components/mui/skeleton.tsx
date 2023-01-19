import { Skeleton } from "@mui/material";

export function Rectangle({ width, height }: any) {
  return <Skeleton variant="rectangular" width={width} height={height} />;
}

export function Circle({ width, height }: any) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Skeleton variant="circular" width={width} height={height} />
    </div>
  );
}

export function CircleRectangle() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" height="350px" width="100%" />
    </div>
  );
}
