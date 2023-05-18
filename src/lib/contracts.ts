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
  address: 'secret1dx98v3ltt26qtlfeu5ryn2jvugh8xmmw986d8l',
  code_hash: '50a49438415c6a6b60e4f733647174f30fea062ba59bb1a8ed4c36d1fc06ff19'
}
export const LB_ROUTER: Contract = {
  address: 'secret1u9hmx8dz7agwl2qy2hj89786clsspaq7tmacx6',
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
