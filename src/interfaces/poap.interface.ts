export interface ITokensResponse {
    data: {
        account: ITokensRequest
    }
}
export interface ITokensRequest {
    id: string;
    tokens: string[]
    tokensOwned: number;
}
