import React from "react";

import { PublicContext } from "../../context";
import { Background } from "../../theme";

export default function Box(props: any) {
  const { children }: { children: React.ReactNode } = props;
  const { publicCtx } = React.useContext(PublicContext);

  return (
    <div
      style={{
        ...props.style,
        display: "flex",
        flexDirection: "column",
        borderRadius: "40px 40px 0px 0px",
        background: Background[publicCtx.theme.background.name].secondary,
        paddingLeft: "auto",
        paddingRight: "auto",
        paddingBottom: "30px",
      }}
    >
      {children}
    </div>
  );
}
