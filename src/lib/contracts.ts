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
  address: 'secret1pyzfrsj38r3z0sz2ddvlcpzcg94put7vg6e37s',
  code_hash: '79b53e4bf420f1aa38cf66a5a209064129c402a2aa31674290eaaa022617ce0f'
}
export const LB_ROUTER: Contract = {
  address: 'secret1j3zw70avjvlp6rwryyclj3ep4df9z77pu3ldln',
  code_hash: '0e7aea17803b224870b92627b78d4e88524df18c8d84d72d9ebad0f17fad3285'
}
export const LB_PAIR_CODE: Code = {
  id: 21446,
  hash: 'a2248a4ba50ac631d86d2d238b9e5124c31f77eeae05c38953eb3f6c0bd73af7'
}
export const LB_TOKEN_CODE: Code = {
  id: 21447,
  hash: '477ddc2bd7f66f49b3e915b5b2cf58313c8ed2e288c425b21fd89aa56ea9c4af'
}
