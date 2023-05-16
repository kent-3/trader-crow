import type { SecretAddress } from "./tokens"

export interface Contract {
    address: SecretAddress,
    code_hash: string,
}

export interface Code {
    id: number,
    hash: string,
}

// Liquidity Book Contracts
export const LB_FACTORY: Contract = {
    address: 'secret1fl33lrslp9hecxmpfsdz6e0c49waqx6ctwu2dd',
    code_hash: '79b53e4bf420f1aa38cf66a5a209064129c402a2aa31674290eaaa022617ce0f'
}
export const LB_ROUTER: Contract = {
    address: 'secret1z4y2ch589xd5ncdtlttcm9s9ggqn0zq82w0278',
    code_hash: '31c78840211a29b5502c80c3d306f87aa475f9b43601582efb73b6ff770e871b'
}
export const LB_PAIR_CODE: Code = {
    id: 21401,
    hash: 'aff1a59f3886b7f0a2d20e8ac9ed3628fd11d4b7df2e6a69ebd7cb481b03c70f'
}
export const LB_TOKEN_CODE: Code = {
    id: 21402,
    hash: '477ddc2bd7f66f49b3e915b5b2cf58313c8ed2e288c425b21fd89aa56ea9c4af'
}
