import React from "react";
import { Link } from "react-router-dom";

import { RoutesTypeEnum } from "../../../../core/constant";
import { PublicContext } from "../../../../core/context";
import { Avatar, Label, Divider, Rating } from "../../../../core/components";

export default function MiniProfileGadget({ onClose }: { onClose: any }) {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);

  return (
    <>
      {publicCtx.wallet.connected ? (
        <Link to={RoutesTypeEnum.Profile}>
          <div
            style={{
              paddingTop: "20px",
              paddingLeft: "20px",
              paddingBottom: "10px",
              paddingRight: "20px",
            }}
            onClick={onClose}
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
                withStatus={publicCtx.wallet.connected}
              />
              <span style={{ paddingLeft: "20px" }}>
                <>
                  <Label size="caption" style={{ marginTop: "10px" }}>
                    @{publicCtx.user.name}
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
              {publicCtx.wallet.account.substr(0, 12) +
                "..." +
                publicCtx.wallet.account.substr(
                  publicCtx.wallet.account.length - 13,
                  publicCtx.wallet.account.length
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
