import { StatusTypeEnum } from "../../../../../../../core/constant";
import { DefaultUser } from "../../../../../../../core/context/default";

import ConnectWallet from "./wallet";

const MobileWallet = async () => {
  let errorMsg;
  let _user: any;

  try {
    _user = await ConnectWallet().catch((err) => {
      errorMsg = "LoginFailed";
    });
    if (
      _user &&
      _user.connected === true &&
      !localStorage.getItem("netId")
    ) {
      errorMsg = "GoerliNetwork";
    }
  } catch (e) {
    errorMsg = "NeedConfirmToConnect";
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
      message: "LoginWalletSuccess",
      severity: StatusTypeEnum.Success,
    },
  };
};

export default MobileWallet;
