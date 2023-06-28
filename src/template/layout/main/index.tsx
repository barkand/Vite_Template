import React from "react";

import { AlertBar } from "@/template/components/notifications";

import { PublicContext } from "@/core/context";
import { Progress, ScrollTopButton } from "@/core/components";

export default function MainComponent({ children }: { children: any }) {
  const { publicCtx } = React.useContext(PublicContext);

  return (
    <ScrollTopButton>
      <main
        style={{
          direction: publicCtx.culture.direction,
          marginBottom: "10px",
          minHeight: "94vh",
        }}
        className={publicCtx.culture.name}
      >
        <React.Suspense
          fallback={
            <div>
              <Progress color={publicCtx.theme.color} />
            </div>
          }
        >
          {children}
          <AlertBar />
        </React.Suspense>
      </main>
    </ScrollTopButton>
  );
}
