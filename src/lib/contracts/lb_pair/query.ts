import type { SecretNetworkClient } from "secretjs";
import type * as LBPair from "./types"

export async function queryReserves(
  client: SecretNetworkClient,
  contractHash: string,
  contractAddress: string
): Promise<LBPair.ReservesResponse> {

  const queryMsg: LBPair.GetReservesQuery = {
    get_reserves: {}
  };

  const response = (await client.query.compute.queryContract({
    contract_address: contractAddress,
    code_hash: contractHash,
    query: queryMsg,
  })) as LBPair.ReservesResponse;

  console.log(JSON.stringify(response))
  return response;

}

export async function queryActiveId(
  client: SecretNetworkClient,
  contractHash: string,
  contractAddress: string
): Promise<LBPair.ActiveIdResponse> {

  const queryMsg: LBPair.GetActiveIdQuery = {
    get_active_id: {}
  };

  const response = (await client.query.compute.queryContract({
    contract_address: contractAddress,
    code_hash: contractHash,
    query: queryMsg,
  })) as LBPair.ActiveIdResponse;

  console.log(JSON.stringify(response));
  return response;

}

export async function queryBin(
  client: SecretNetworkClient,
  contractHash: string,
  contractAddress: string,
  id: number,
): Promise<LBPair.BinResponse> {

  const queryMsg: LBPair.GetBinQuery = {
    get_bin: {
      id: id
    }
  };

  const response = (await client.query.compute.queryContract({
    contract_address: contractAddress,
    code_hash: contractHash,
    query: queryMsg,
  })) as LBPair.BinResponse;

  console.log(JSON.stringify(response));
  return response;

}

export async function queryNextNonEmptyBin(
  client: SecretNetworkClient,
  contractHash: string,
  contractAddress: string,
  id: number,
): Promise<LBPair.NextNonEmptyBinResponse> {

  const queryMsg: LBPair.GetNextNonEmptyBinQuery = {
    get_next_non_empty_bin: {
      swap_for_y: true,
      id: id,
    }
  };

  const response = (await client.query.compute.queryContract({
    contract_address: contractAddress,
    code_hash: contractHash,
    query: queryMsg,
  })) as LBPair.NextNonEmptyBinResponse;

  console.log(JSON.stringify(response));
  return response;

}

export async function queryTotalSupply(
  client: SecretNetworkClient,
  contractHash: string,
  contractAddress: string,
  id: number,
): Promise<LBPair.TotalSupplyResponse> {

  const queryMsg: LBPair.GetTotalSupplyQuery = {
    total_supply: {
      id: id
    }
  };

  const response = (await client.query.compute.queryContract({
    contract_address: contractAddress,
    code_hash: contractHash,
    query: queryMsg,
  })) as LBPair.TotalSupplyResponse;

  console.log(JSON.stringify(response));
  return response;

}
