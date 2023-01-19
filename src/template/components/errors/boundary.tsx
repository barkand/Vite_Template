import { Component, ErrorInfo, ReactNode } from "react";

import { default as ServerErrorPage } from "../../pages/errors/500";
import { logger } from "../../../core/libs";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error(`${error}, ${JSON.stringify(errorInfo)}`);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ServerErrorPage />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
