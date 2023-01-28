import { DefaultUser } from "../../../../../../../../core/context/default";
import { StatusTypeEnum } from "../../../../../../../../core/constant";
import { PostAuthApi } from "../../../../../../../../core/libs";

import { GetLibrary as GetWeb3Library, Disconnect } from "../web3";

const ConnectWallet = async () => {
  const library: any = await GetWeb3Library();
  const eth: any = library.eth;

  const _user = JSON.parse(JSON.stringify(DefaultUser));
  _user.connected = true;
  await eth.getAccounts().then((result: any) => (_user.user_id = result[0])); //account

  if (_user.connected === true) {
    let netId = await eth.net.getId();
    if (netId === 5) {
      let _result: any = await PostAuthApi(
        { user_id: _user.user_id },
        "admin/login"
      );

      if (_result.code === 200) {
        if (_result.items.connected === true) {
          localStorage.setItem("userId", _user.user_id);
          localStorage.setItem("netId", netId);

          _user.username = _result.items.username;
          _user.score = _result.items.score;
          if (_result.items.avatar) {
            _user.avatar = `${import.meta.env.VITE_UPLOAD_PATH}/${
              import.meta.env.VITE_UPLOAD_FOLDER
            }/users/${_result.items.user_id}.webp`;
          }
        }
      } else {
        return {
          user: DefaultUser,
          alert: {
            open: true,
            message: "LoginFailed",
            severity: StatusTypeEnum.Error,
          },
        };
      }
    } else {
      if (localStorage.getItem("walletconnect")) await Disconnect();
    }
  }

  return _user;
};

export default ConnectWallet;