import SendLogs from "./api";

class Logger {
  error = async (message: string) => {
    try {
      await SendLogs("error", message);
    } catch {
      console.log("Logger error > Server not Connected");
    }
  };

  warning = async (message: string) => {
    try {
      await SendLogs("warning", message);
    } catch {
      console.log("Logger warning > Server not Connected");
    }
  };

  info = async (message: string) => {
    try {
      await SendLogs("info", message);
    } catch {
      console.log("Logger info > Server not Connected");
    }
  };
}

const logger = new Logger();
export default logger;
