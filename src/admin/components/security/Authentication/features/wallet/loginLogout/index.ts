import { DefaultUser } from "../../../../../../../core/context/default";
import { StatusTypeEnum } from "../../../../../../../core/constant";
import { PostAuthApi } from "../../../../../../../core/libs";

import MobileWallet from "../connect/mobile";
import WebWallet from "../connect/web";
import { Disconnect } from "../web3";

class Auth {
  Login = async (isMobile: boolean) => {
    let _walletType = isMobile || !(window as any).ethereum ? "app" : "plugin";
    localStorage.setItem("walletType", `${_walletType}`);

    let _result =
      _walletType === "app" ? await MobileWallet() : await WebWallet();

    return _result;
  };

  Logout = async () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("netId");
    await Disconnect();

    let _result = await PostAuthApi({}, "admin/logout");
    let _alert: any = {
      open: true,
      message: _result.code === 200 ? "LogoutSuccess" : "LogoutFailed",
      severity:
        _result.code === 200 ? StatusTypeEnum.Warning : StatusTypeEnum.Error,
    };

    return {
      ..._result,
      user: DefaultUser,
      alert: _alert,
    };
  };
}

export default new Auth();
