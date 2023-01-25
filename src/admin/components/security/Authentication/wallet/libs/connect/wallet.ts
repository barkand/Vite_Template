import { DefaultWallet } from "../../../../../../../core/context/default";
import { StatusTypeEnum } from "../../../../../../../core/constant";
import { PostAuthApi } from "../../../../../../../core/libs";

import { GetLibrary as GetWeb3Library, Disconnect } from "../web3";

const ConnectWallet = async () => {
  const library: any = await GetWeb3Library();
  const eth: any = library.eth;

  const _wallet = JSON.parse(JSON.stringify(DefaultWallet));
  _wallet.connected = true;
  await eth.getAccounts().then((result: any) => (_wallet.account = result[0])); //account

  if (_wallet.connected === true) {
    let netId = await eth.net.getId();
    if (netId === 5) {
      let _result: any = await PostAuthApi(
        { wallet: _wallet.account },
        "admin/login"
      );
      if (_result.code === 200) {
        if (_result.items.connected === true) {
          localStorage.setItem("wallet", _wallet.account);
          localStorage.setItem("netId", netId);
        }
      } else {
        return {
          wallet: DefaultWallet,
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

  return _wallet;
};

export default ConnectWallet;
