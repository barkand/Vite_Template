import Auth from "../features/wallet/loginLogout";
// import Auth from "../features/mail/loginLogout";

async function Login(isMobile: boolean) {
  let _result: any = await Auth.Login(isMobile);
  return _result;
}

async function Logout() {
  let _result: any = await Auth.Logout();
  return _result;
}

export { Login, Logout };
