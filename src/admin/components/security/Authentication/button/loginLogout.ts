import {
  Login as walletLogin,
  Logout as walletLogout,
} from "../features/wallet/loginLogout";

async function Login(isMobile: boolean) {
  let _result: any = await walletLogin(isMobile);
  return _result;
}

async function Logout() {
  let _result: any = await walletLogout();
  return _result;
}

export { Login, Logout };
