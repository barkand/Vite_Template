import { LogoutWallet } from "../api";
import MobileWallet from "../libs/connect/mobile";
import WebWallet from "../libs/connect/web";
import { Disconnect } from "../libs/web3";
import { GetUser as ApiGetUser } from "../../api";
import {
  DefaultWallet,
  DefaultUser,
} from "../../../../../../core/context/default";

async function Login() {
  let _result =
    localStorage.getItem("walletType") === "app"
      ? await MobileWallet()
      : await WebWallet();

  let _user = DefaultUser;
  if (_result.wallet.connected) _user = await ApiGetUser();

  return { ..._result, user: _user };
}

async function Logout() {
  localStorage.removeItem("wallet");
  localStorage.removeItem("netId");
  await Disconnect();

  let _result = await LogoutWallet();
  return { ..._result, user: DefaultUser, wallet: DefaultWallet };
}

export { Login, Logout };
