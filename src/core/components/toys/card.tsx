import React from "react";

import { PublicContext } from "../../context";
import { Background } from "../../theme";
import { Label } from "..";

export default function Card({ children, title, height, ...other }: any) {
  const { publicCtx } = React.useContext(PublicContext);

  return (
    <div
      {...other}
      style={{
        padding: "5px",
        margin: "5px",
        borderRadius: "25px",
        background: Background[publicCtx.theme.background.name].tertiary,
      }}
    >
      <div
        style={{
          height: height,
        }}
      >
        {children}
      </div>
      <Label size="p" sx={{ pb: 3 }}>
        {title}
      </Label>
    </div>
  );
}
