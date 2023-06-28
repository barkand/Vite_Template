import React from "react";

import { PublicContext } from "@/core/context";
import { Background } from "@/core/theme";
import { Label } from "..";

export default function Card({ children, title, height, ...other }: any) {
  const { publicCtx } = React.useContext(PublicContext);

  return (
    <div
      style={{
        padding: "5px",
        margin: "5px",
        borderRadius: "25px",
        background: Background[publicCtx.theme.background.name].tertiary,
      }}
      {...other}
    >
      <div
        style={{
          height: height,
        }}
      >
        {children}
      </div>
      <Label size="p" style={{ pb: 3 }}>
        {title}
      </Label>
    </div>
  );
}
