import axios from 'axios';
import { ITokensResponse } from '../../interfaces/poap.interface';


export const getPoapsByIPFS = async (ipfsUrl: string) => {
    const poapsResponse = await axios.get(`https://ipfs.io/ipfs/${ipfsUrl}`);
    console.log('poapsResponse', poapsResponse);
    return poapsResponse.data;

}


export const getTokensPerWallet = async (walletId: string): Promise<ITokensResponse> => {
    // TODO: INSTALL APOLLO CLIENT AND GRAPHQL
    const payloadRequest = { "query": `{\n  account(id:\"${walletId}\") {\n    id\n    tokens {\n      id\n    }\n    tokensOwned\n  }\n}` }
    const response = await axios.post(`https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai`, payloadRequest);
    console.log('response', response);
    return response;
}