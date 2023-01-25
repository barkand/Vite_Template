import {
  DefaultWallet,
  DefaultUser,
} from "../../../../../../core/context/default";
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

  let _user = DefaultUser;
  if (_result.wallet.connected) {
    let _result = await PostAuthApi({}, "admin/user");
    _user = _result?.items;
  }

  return { ..._result, user: _user };
}

async function Logout() {
  localStorage.removeItem("wallet");
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
    wallet: DefaultWallet,
    alert: _alert,
  };
}

export { Login, Logout };
