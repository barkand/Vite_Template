import React from "react";

import { PublicContext } from "@/core/context";
import { Avatar, Label, Rating } from "@/core/components";

export default function MainProfileGadget(props: any) {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);

  return (
    <>
      <div
        style={{
          ...props.style,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {publicCtx.user.avatar !== "" ? (
          <img
            crossOrigin="anonymous"
            src={publicCtx.user.avatar}
            style={{ width: "15vh", height: "15vh", borderRadius: 50 }}
          />
        ) : (
          <Avatar
            src={publicCtx.user.avatar}
            style={{ width: "15vh", height: "15vh" }}
          />
        )}

        <div style={{ direction: "ltr" }}>
          <Label size="caption" style={{ mt: 1 }}>
            @{publicCtx.user.username}
          </Label>
        </div>

        <Rating
          size="small"
          style={{ mt: 1, mb: 1 }}
          value={publicCtx.user.score}
        />
      </div>
    </>
  );
}
