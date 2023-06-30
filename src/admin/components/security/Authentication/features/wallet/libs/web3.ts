import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

let web3Provider: any = null;

const GetLibrary = async () => {
  if (localStorage.getItem("walletType") === "app") {
    web3Provider = new WalletConnectProvider({
      infuraId: import.meta.env.VITE_INFURA_ID,
    });
    await web3Provider.enable();
  } else if ((window as any).ethereum) {
    web3Provider = (window as any).ethereum;
  } else if ((window as any).web3) {
    web3Provider = (window as any).web3.currentProvider;
  }

  let library = new Web3(web3Provider);

  return library;
};

const GetContract = async (contractName: any) => {
  let library = await GetLibrary();
  let networkId: any = localStorage.getItem("netId");
  const deployedContract = contractName.networks[networkId];

  let contract = new library.eth.Contract(
    contractName.abi,
    deployedContract && deployedContract.address
  );
  contract.options.address = deployedContract.address;

  return contract;
};

const Utils = {
  toWei: (amount: any, unit: any) => {
    return Web3.utils.toWei(amount, unit);
  },
};

const Disconnect = async () => {
  if (localStorage.getItem("walletconnect")) await web3Provider.disconnect();
};

export { GetLibrary, GetContract, Disconnect, Utils };
