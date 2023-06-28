import React from "react";

import { PublicContext } from "@/core/context";
import { Paper } from "@/core/components";

export default function FooterComponent({ children }: { children: any }) {
  const { publicCtx } = React.useContext(PublicContext);

  return (
    <footer>
      <Paper
        shadow={1}
        style={{
          textAlign: "center",
          bottom: 0,
          left: 0,
          right: 0,
          background: publicCtx.theme.background.isDark ? "#424750" : "default",
        }}
      >
        {children}
      </Paper>
    </footer>
  );
}
