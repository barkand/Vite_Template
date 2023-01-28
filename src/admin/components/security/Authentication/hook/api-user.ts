import { PostAuthApi } from "../../../../../core/libs";

let userFetcher = async () => {
  if (
    localStorage.getItem("userId") !== null &&
    localStorage.getItem("netId") !== null
  ) {
    let _result: any = await PostAuthApi({}, "admin/refresh");
    if (_result.code === 200) {
      if (_result.items.connected === false) {
        localStorage.removeItem("userId");
        localStorage.removeItem("netId");
      }
    }

    return {
      user_id: localStorage.getItem("userId"),
    };
  }

  throw new Error("Not authorized!");
};

export default userFetcher;
