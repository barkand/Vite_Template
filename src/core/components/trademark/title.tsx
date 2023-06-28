import React from "react";
import { Link } from "react-router-dom";

import { PublicContext } from "@/core/context";
import { RoutesTypeEnum } from "@/core/constant";
import { Label } from "..";

export default function Title() {
  const { publicCtx }: any = React.useContext(PublicContext);

  return (
    <Link to={RoutesTypeEnum.Home}>
      <Label
        size="subtitle1"
        style={{
          fontFamily: "Alegreya,serif",
          fontSize: publicCtx.device.isMobile ? 25 : 30,
          color: publicCtx.theme.background.isDark ? "white" : "black",
        }}
      >
        {import.meta.env.VITE_COMPANY_NAME}
      </Label>
    </Link>
  );
}
