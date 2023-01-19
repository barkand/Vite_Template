import { StatusTypeEnum } from "../../../../../../core/constant";

import { default as DefaultWallet } from "../../../../../../core/context/default/wallet";

const LoginWallet = async (account: any) => {
  let _data: any = await fetch(
    `${import.meta.env.VITE_SERVER_PATH}admin/login`,
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        wallet: account,
      }),
    }
  )
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      console.error("ErrorFetchLogin", err);

      return {
        wallet: DefaultWallet,
        alert: {
          open: true,
          message: "LoginFailed",
          severity: StatusTypeEnum.Error,
        },
      };
    });

  return _data;
};

const LogoutWallet = async () => {
  await fetch(`${import.meta.env.VITE_SERVER_PATH}admin/logout`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((d) => d)
    .catch((err) => {
      return {
        wallet: DefaultWallet,
        alert: {
          open: true,
          message: "LogoutFailed",
          severity: StatusTypeEnum.Error,
        },
      };
    });

  return {
    wallet: DefaultWallet,
    alert: {
      open: true,
      message: "LogoutWalletSuccess",
      severity: StatusTypeEnum.Warning,
    },
  };
};

const CheckAuthorization = async () => {
  await fetch(`${import.meta.env.VITE_SERVER_PATH}admin/refresh`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((d) => {
      if (d.connected === false) {
        localStorage.removeItem("wallet");
        localStorage.removeItem("netId");
      }
    });
};

export { LoginWallet, LogoutWallet, CheckAuthorization };
