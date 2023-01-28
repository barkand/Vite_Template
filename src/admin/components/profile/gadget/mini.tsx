import React from "react";
import { Link } from "react-router-dom";

import { RoutesTypeEnum } from "../../../../core/constant";
import { PublicContext } from "../../../../core/context";
import { Avatar, Label, Divider, Rating } from "../../../../core/components";

export default function MiniProfileGadget({ onClose }: { onClose: any }) {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);

  return (
    <>
      {publicCtx.user.connected ? (
        <Link to={RoutesTypeEnum.Profile}>
          <div
            style={{
              paddingTop: "20px",
              paddingLeft: "20px",
              paddingBottom: "10px",
              paddingRight: "20px",
            }}
            onClick={onClose}
            className="step-min-profile"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                img={publicCtx.user.avatar}
                withStatus={publicCtx.user.connected}
              />
              <span style={{ paddingLeft: "20px" }}>
                <>
                  <Label size="caption" style={{ marginTop: "10px" }}>
                    @{publicCtx.user.username}
                  </Label>
                  <Rating
                    size="small"
                    sx={{ paddingTop: "5px" }}
                    value={publicCtx.user.score}
                  />
                </>
              </span>
            </div>
            <Label
              size="caption"
              sx={{ paddingTop: "10px", paddingBottom: "25px" }}
            >
              {publicCtx.user.user_id.substr(0, 12) +
                "..." +
                publicCtx.user.user_id.substr(
                  publicCtx.user.user_id.length - 13,
                  publicCtx.user.user_id.length
                )}
            </Label>
          </div>
          <Divider />
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}
