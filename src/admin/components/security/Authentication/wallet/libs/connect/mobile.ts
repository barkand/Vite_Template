import { StatusTypeEnum } from "../../../../../../../core/constant";
import { default as DefaultWallet } from "../../../../../../../core/context/default/wallet";

import ConnectWallet from "./wallet";

const MobileWallet = async () => {
  let errorMsg;
  let _wallet: any;

  try {
    _wallet = await ConnectWallet().catch((err) => {
      errorMsg = "LoginFailed";
    });
    if (
      _wallet &&
      _wallet.connected === true &&
      !localStorage.getItem("netId")
    ) {
      errorMsg = "GoerliNetwork";
    }
  } catch (e) {
    errorMsg = "NeedConfirmToConnect";
  }

  if (errorMsg) {
    return {
      wallet: DefaultWallet,
      alert: {
        open: true,
        message: errorMsg,
        severity: StatusTypeEnum.Error,
      },
    };
  }

  return {
    wallet: _wallet,
    alert: {
      open: true,
      message: "LoginWalletSuccess",
      severity: StatusTypeEnum.Success,
    },
  };
};

export default MobileWallet;
