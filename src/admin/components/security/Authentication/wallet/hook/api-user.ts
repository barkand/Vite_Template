import { CheckAuthorization } from "../api";

let userFetcher = async () => {
  if (
    localStorage.getItem("wallet") !== null &&
    localStorage.getItem("netId") !== null
  ) {
    await CheckAuthorization();
    return {
      wallet: localStorage.getItem("wallet"),
    };
  }

  throw new Error("Not authorized!");
};

export default userFetcher;
