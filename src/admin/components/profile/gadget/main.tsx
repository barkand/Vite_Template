import React from "react";

import { PublicContext } from "../../../../core/context";
import { Avatar, Label, Rating } from "../../../../core/components";

export default function MainProfileGadget(props: any) {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);

  return (
    <>
      <div
        style={{
          ...props.sx,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          crossOrigin="anonymous"
          src={publicCtx.user.avatar}
          style={{ width: "15vh", height: "15vh", borderRadius: 25 }}
        />

        <div style={{ direction: "ltr" }}>
          <Label size="caption" sx={{ mt: 1 }}>
            @{publicCtx.user.username}
          </Label>
        </div>

        <Rating
          size="small"
          sx={{ mt: 1, mb: 1 }}
          value={publicCtx.user.score}
        />
      </div>
    </>
  );
}
