import React from "react";
import {
  Tooltip,
  TooltipProps,
  tooltipClasses,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { PublicContext } from "@/core/context";

export default function Tip(props: any) {
  const { title, children } = props;
  const { publicCtx } = React.useContext(PublicContext);

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      border: "1px solid #dadde9",
    },
  }));

  return (
    <HtmlTooltip
      title={
        <div
          className={publicCtx.culture.name}
          style={{ direction: publicCtx.culture.direction }}
        >
          <Typography variant="caption">{title}</Typography>
        </div>
      }
    >
      {children}
    </HtmlTooltip>
  );
}
