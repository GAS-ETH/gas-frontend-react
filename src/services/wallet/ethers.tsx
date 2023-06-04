import { ethers } from "ethers";
import gas_abi from "./GlobalAttendanceScore.json";
const contractAddress = "0x64Df6edb98c1417c90E2E596fd50595563Ea512d";
const contractAddressForPoap = "0xa178b166bea52449d56895231bb1194f20c2f102";
export const viewTokenURI = async (signer: any, tokenId: string) => {
  const contractInstance = new ethers.Contract(
    contractAddress,
    gas_abi,
    signer
  );
  const result = await contractInstance.tokenURI(tokenId);
  return result;
};
export const viewTokenURIForPoap = async (signer: any, tokenId: string) => {
  const contractInstance = new ethers.Contract(
    contractAddressForPoap,
    gas_abi,
    signer
  );
  const result = await contractInstance.tokenURI(tokenId);
  console.log("result", result);
  return result;
};
