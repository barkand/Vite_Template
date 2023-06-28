import { DefaultUser } from "@/core/context/default";
import { StatusTypeEnum } from "@/core/constant";
import { PostAuthApi } from "@/core/libs";

import { GetLibrary as GetWeb3Library, Disconnect } from "../libs/web3";

const ConnectWallet = async () => {
  const library: any = await GetWeb3Library();
  const eth: any = library.eth;

  const _user = JSON.parse(JSON.stringify(DefaultUser));
  _user.connected = true;
  await eth.getAccounts().then((result: any) => (_user.user_id = result[0])); //account

  if (_user.connected === true) {
    let netId = await eth.net.getId();

    if (netId == import.meta.env.VITE_NET_ID) {
      let _result: any = await PostAuthApi(
        { user_id: _user.user_id },
        "admin/login"
      );

      if (_result.code === 200) {
        if (_result.items.connected === true) {
          localStorage.setItem("userId", _user.user_id);
          localStorage.setItem("netId", netId);

          let _result_user: any = await PostAuthApi({}, "admin/user");
          if (_result_user.code === 200) {
            _user.username = _result_user.items.username ?? "";
            _user.score = _result_user.items.score ?? 0;
            if (_result_user.items.avatar) {
              _user.avatar = `${import.meta.env.VITE_SERVER_PATH}/${
                import.meta.env.VITE_UPLOAD_FOLDER
              }/users/${_result.items.user_id}.webp`;
            }
          }
        }
      } else {
        return {
          user: DefaultUser,
          alert: {
            open: true,
            message: "login-failed",
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
