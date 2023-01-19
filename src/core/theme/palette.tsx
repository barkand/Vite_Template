import React from "react";

import { PublicContext } from "../context";
import { Theme } from "./components";
import { Colors, Background } from ".";

export default function ThemeComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);

  const selectedTheme = {
    palette: {
      mode: publicCtx.theme.background.name,
      primary: {
        main: Colors[publicCtx.theme.color][publicCtx.theme.background.name]
          .primary,
      },
      secondary: {
        main: Colors[publicCtx.theme.color][publicCtx.theme.background.name]
          .secondary,
      },
      background: {
        default: Background[publicCtx.theme.background.name].primary,
      },
    },
  };

  return <Theme theme={selectedTheme}>{children}</Theme>;
}
