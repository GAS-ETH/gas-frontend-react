/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers, utils } from "ethers";

export const connectWallet = async (
  setProvider: React.Dispatch<any>,
  setSigner: React.Dispatch<any>
) => {
  if ((window as any).ethereum) {
    //check if Metamask is installed
    try {
      const connection = connectGnosis();
      if (!connection) {
        return {
          connectedStatus: false,
          status: "🦊 Error happened while adding the chain into your wallet",
          data: null,
        };
      }
      await (window as any).ethereum.send("eth_requestAccounts", []);
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const signer = provider.getSigner();
      setProvider(provider);
      setSigner(signer);
      return {
        connectedStatus: true,
        status: "🦊 Connected to Metamask",
        data: {
          provider,
          signer,
        },
      };
    } catch (error) {
      return {
        connectedStatus: false,
        status: "🦊 Connect to Metamask using the button on the top right.",
        data: null,
      };
    }
  } else {
    return {
      connectedStatus: false,
      status:
        "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
      data: null,
    };
  }
};

const connectGnosis = async () => {
  try {
    await (window as any).ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: utils.hexValue(100) }], // chainId must be in hexadecimal numbers
    });
    return true;
  } catch (error: any) {
    if (error.code === 4902) {
      try {
        await (window as any).ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: utils.hexValue(100),
              chainName: "Gnosis Chain",
              rpcUrls: ["https://rpc.gnosischain.com/"],
              nativeCurrency: {
                name: "Gnosis Chain",
                symbol: "xDai", // 2-6 characters long
                decimals: 18,
              },
              blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"],
            },
          ],
        });
        return true;
      } catch (addError) {
        // handle "add" error
        return false;
      }
    }
  }
};
