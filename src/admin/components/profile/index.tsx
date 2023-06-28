import React from "react";

import { PublicContext } from "@/core/context";
import { Box } from "@/core/components";

import { Authorization } from "../security";
import HeaderProfile from "./header";

export default function Profile({ children }: { children: any }) {
  const { publicCtx } = React.useContext(PublicContext);

  return (
    <Authorization>
      <div style={{ display: "flex" }}>
        <Box
          style={{
            marginTop: "100px",
            width: publicCtx.device.isMobile ? "100%" : "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ top: "-50px", position: "relative" }}>
            <HeaderProfile />
            {children}
          </div>
        </Box>
      </div>
    </Authorization>
  );
}
