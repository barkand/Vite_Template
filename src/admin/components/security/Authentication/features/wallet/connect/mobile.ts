import { StatusTypeEnum } from "../../../../../../../core/constant";
import { DefaultUser } from "../../../../../../../core/context/default";

import ConnectWallet from "./wallet";

const MobileWallet = async () => {
  let errorMsg;
  let _user: any;

  try {
    _user = await ConnectWallet().catch((err) => {
      errorMsg = "login-failed";
    });
    if (_user && _user.connected === true && !localStorage.getItem("netId")) {
      errorMsg = "goerli-network";
    }
  } catch (e) {
    errorMsg = "need-confirm-to-connect";
  }

  if (errorMsg) {
    return {
      user: DefaultUser,
      alert: {
        open: true,
        message: errorMsg,
        severity: StatusTypeEnum.Error,
      },
    };
  }

  return {
    user: _user,
    alert: {
      open: true,
      message: "login-success",
      severity: StatusTypeEnum.Success,
    },
  };
};

export default MobileWallet;
