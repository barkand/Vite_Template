import React from "react";

import * as Enums from "../../constant";
import { PublicContext } from "../../context";
import { IconButton } from "../../components";
import { MoonIcon, SunIcon } from "../../icon";
import useTheme from "../hook/use-theme";

export default function DarkMode() {
  const { publicCtx, setPublicCtx }: any = React.useContext(PublicContext);

  const { background, loading }: any = useTheme();
  const [newMode, setNewMode] = React.useState(publicCtx.theme.background.name);

  React.useEffect(() => {
    if (loading === false && newMode !== background) setNewMode(background);
  }, [background]);

  React.useEffect(() => {
    let newIsDark: boolean = newMode === Enums.ThemeTypeEnum.Dark;

    setPublicCtx({
      ...publicCtx,
      theme: {
        ...publicCtx.theme,
        background: {
          name: newMode,
          isDark: newIsDark,
        },
      },
    });

    localStorage.setItem("background", newMode);
  }, [newMode]);

  return (
    <IconButton
      onClick={() =>
        setNewMode(
          publicCtx.theme.background.isDark
            ? Enums.ThemeTypeEnum.Light
            : Enums.ThemeTypeEnum.Dark
        )
      }
      className="step-dark-mode"
    >
      {publicCtx.theme.background.isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
