import { ethers } from "ethers";
import gas_abi from "./GlobalAttendanceScore.json";
const contractAddress = "0x64Df6edb98c1417c90E2E596fd50595563Ea512d";
export const viewTokenURI = async (signer: any) => {
  const contractInstance = new ethers.Contract(
    contractAddress,
    gas_abi,
    signer
  );
  const result = await contractInstance.tokenURI(0);
  return result;
};
