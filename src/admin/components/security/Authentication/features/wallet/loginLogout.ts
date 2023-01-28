import { DefaultUser } from "../../../../../../core/context/default";
import { StatusTypeEnum } from "../../../../../../core/constant";
import { PostAuthApi } from "../../../../../../core/libs";

import MobileWallet from "../wallet/libs/connect/mobile";
import WebWallet from "../wallet/libs/connect/web";
import { Disconnect } from "../wallet/libs/web3";

async function Login(isMobile: boolean) {
  let _walletType = isMobile || !(window as any).ethereum ? "app" : "plugin";
  localStorage.setItem("walletType", `${_walletType}`);

  let _result =
    _walletType === "app" ? await MobileWallet() : await WebWallet();

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
