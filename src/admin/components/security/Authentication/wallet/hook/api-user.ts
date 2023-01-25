import { PostAuthApi } from "../../../../../../core/libs";

let userFetcher = async () => {
  if (
    localStorage.getItem("wallet") !== null &&
    localStorage.getItem("netId") !== null
  ) {
    let _result: any = await PostAuthApi({}, "admin/refresh");
    if (_result.code === 200) {
      if (_result.items.connected === false) {
        localStorage.removeItem("wallet");
        localStorage.removeItem("netId");
      }
    }

    return {
      wallet: localStorage.getItem("wallet"),
    };
  }

  throw new Error("Not authorized!");
};

export default userFetcher;
