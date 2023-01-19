import { StatusTypeEnum } from "../../../../../../../core/constant";

import { default as DefaultWallet } from "../../../../../../../core/context/default/wallet";
import ConnectWallet from "./wallet";

const WebWallet = async () => {
  if (!(window as any).ethereum) {
    return {
      wallet: DefaultWallet,
      alert: {
        open: true,
        message: "InstallMetaMask",
        severity: StatusTypeEnum.Warning,
      },
    };
  }

  let errorMsg;
  let _wallet = await (window as any).ethereum
    .request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    })
    .then(async (permissions: any) => {
      const accountsPermission = permissions.find(
        (permission: any) => permission.parentCapability === "eth_accounts"
      );

      if (accountsPermission) {
        let _res = await ConnectWallet();
        let _netID = localStorage.getItem("netId");
        if (_res && _netID) {
          return _res;
        } else {
          errorMsg = "GoerliNetwork";
        }
      } else {
        errorMsg = "PermissionsNeeded";
      }
    })
    .catch((err: any) => {
      // EIP-1193 userRejectedRequest error
      errorMsg = err.code === 4001 ? "NeedConfirmToConnect" : "LoginFailed";
    });

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

export default WebWallet;
