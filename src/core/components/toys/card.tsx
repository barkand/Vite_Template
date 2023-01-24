import React from "react";

import { PublicContext } from "../../context";
import { Background } from "../../theme";
import { Label } from "..";

export default function Card({ children, title, height }: any) {
  const { publicCtx } = React.useContext(PublicContext);

  return (
    <>
      <div
        style={{
          margin: "5px",
          borderRadius: "25px",
          height: height,
          background: Background[publicCtx.theme.background.name].tertiary,
        }}
      >
        {children}
      </div>
      <Label size="p" sx={{ pb: 3 }}>
        {title}
      </Label>
    </>
  );
}
