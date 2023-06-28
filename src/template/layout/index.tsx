import { ErrorBoundary } from "../components/errors";

import "../assets/css/style.scss";
import "../assets/css/locales.scss";

import "@/core/locales/i18n";
import { Theme } from "@/core/theme";
import { PublicProvider } from "@/core/context";
import { TourProvider } from "@/core/components";

export default function LayoutComponent({ children }: { children: any }) {
  return (
    <ErrorBoundary>
      <PublicProvider>
        <Theme>
          <TourProvider>{children}</TourProvider>
        </Theme>
      </PublicProvider>
    </ErrorBoundary>
  );
}
