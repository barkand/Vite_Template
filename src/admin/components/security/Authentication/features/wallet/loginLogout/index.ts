import { DefaultUser } from "@/core/context/default";
import { StatusTypeEnum } from "@/core/constant";
import { PostAuthApi } from "@/core/libs";

import MobileWallet from "../connect/mobile";
import WebWallet from "../connect/web";
import { Disconnect } from "../libs/web3";

const Login = async (isMobile: boolean) => {
  let _walletType = isMobile || !(window as any).ethereum ? "app" : "plugin";
  localStorage.setItem("walletType", `${_walletType}`);

  let _result =
    _walletType === "app" ? await MobileWallet() : await WebWallet();

  return _result;
};

const Logout = async () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("netId");
  await Disconnect();

  let _result = await PostAuthApi({}, "admin/logout");
  let _alert: any = {
    open: true,
    message: _result.code === 200 ? "logout-success" : "logout-failed",
    severity:
      _result.code === 200 ? StatusTypeEnum.Warning : StatusTypeEnum.Error,
  };

  return {
    ..._result,
    user: DefaultUser,
    alert: _alert,
  };
};

export { Login, Logout };
