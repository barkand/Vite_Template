import { StatusTypeEnum } from "@/core/constant";
import { DefaultUser } from "@/core/context/default";

import ConnectWallet from "./wallet";

const WebWallet = async () => {
  if (!(window as any).ethereum) {
    return {
      user: DefaultUser,
      alert: {
        open: true,
        message: "install-metamask",
        severity: StatusTypeEnum.Warning,
      },
    };
  }

  let errorMsg;
  let _user = await (window as any).ethereum
    .request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    })
    .then(async (permissions: any) => {
      const accountsPermission = permissions.find(
        (permission: any) => permission.parentCapability === "eth_accounts"
      );

      if (accountsPermission) {
        let _result = await ConnectWallet();
        let _netID = localStorage.getItem("netId");
        if (_result && _netID) {
          return _result;
        } else {
          errorMsg = "goerli-network";
        }
      } else {
        errorMsg = "permissions-needed";
      }
    })
    .catch((err: any) => {
      // EIP-1193 userRejectedRequest error
      errorMsg = err.code === 4001 ? "need-confirm-to-connect" : "login-failed";
    });

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

export default WebWallet;
