import { DefaultUser } from "../../../../../../core/context/default";
import { StatusTypeEnum } from "../../../../../../core/constant";
import { PostAuthApi } from "../../../../../../core/libs";

import MobileWallet from "../libs/connect/mobile";
import WebWallet from "../libs/connect/web";
import { Disconnect } from "../libs/web3";

async function Login() {
  let _result =
    localStorage.getItem("walletType") === "app"
      ? await MobileWallet()
      : await WebWallet();

  return _result;
}

async function Logout() {
  localStorage.removeItem("userId");
  localStorage.removeItem("netId");
  await Disconnect();

  let _result = await PostAuthApi({}, "admin/logout");
  let _alert: any = {
    open: true,
    message: _result.code === 200 ? "LogoutWalletSuccess" : "LogoutFailed",
    severity:
      _result.code === 200 ? StatusTypeEnum.Warning : StatusTypeEnum.Error,
  };

  return {
    ..._result,
    user: DefaultUser,
    alert: _alert,
  };
}

export { Login, Logout };
