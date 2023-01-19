import { LoginWallet } from "../../api";
import { GetLibrary as GetWeb3Library, Disconnect } from "../web3";

import { DefaultWallet } from "../../../../../../../core/context/default";

const ConnectWallet = async () => {
  const library: any = await GetWeb3Library();
  const eth: any = library.eth;

  const _wallet = JSON.parse(JSON.stringify(DefaultWallet));
  _wallet.connected = true;
  await eth.getAccounts().then((result: any) => (_wallet.account = result[0])); //account

  if (_wallet.connected === true) {
    let netId = await eth.net.getId();
    if (netId === 5) {
      let _data: any = await LoginWallet(_wallet.account);
      if (_data.connected === true) {
        localStorage.setItem("wallet", _wallet.account);
        localStorage.setItem("netId", netId);
      }
    } else {
      if (localStorage.getItem("walletconnect")) await Disconnect();
    }
  }

  return _wallet;
};

export default ConnectWallet;
