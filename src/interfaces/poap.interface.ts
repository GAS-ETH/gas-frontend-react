export interface ITokensResponse {
    data: {
        data: {
            account: ITokensRequest
        }
    }
}
export interface ITokensRequest {
    id: string;
    tokens: Token[]
    tokensOwned: number;
}

interface Token {
    id: string
}