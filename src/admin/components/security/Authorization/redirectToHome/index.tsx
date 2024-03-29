import React from "react";
import { useNavigate } from "react-router-dom";

import { RoutesTypeEnum } from "@/core/constant";
import { PublicContext } from "@/core/context";

export default function Authorization({
  children,
}: {
  children: React.ReactNode;
}) {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!publicCtx.user.connected) navigate(RoutesTypeEnum.Home);
  }, [publicCtx.user.connected]);

  return <>{children}</>;
}
