import type { SecretNetworkClient } from "secretjs";
import type { CustomToken } from "../misc_types";
import type * as LBPair from "./types"
import { errorToast, responseToast } from '$lib/toasts';
import { doneLoading, setLoading } from "$lib/modals";
// import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';

// const alert: ModalSettings = {
//   type: 'alert',
//   title: 'Processing',
//   body: 'wait for it...',
//   buttonTextCancel: 'OK',
//   modalClasses: 'w-modal-slim',
//   backdropClasses: '',
// };

export async function executeAddLiquidity(
  client: SecretNetworkClient,
  contractHashPair: string,
  contractAddressPair: string,
  bin_step: number,
  tokenX: CustomToken,
  tokenY: CustomToken,
  amountX: number,
  amountY: number,
) {
  const liquidityParameters: LBPair.LiquidityParameters = {
    token_x: tokenX,
    token_y: tokenY,
    bin_step: bin_step,
    amount_x: amountX.toFixed(0),
    amount_y: amountY.toFixed(0),
    amount_x_min: (0.95 * amountX).toFixed(0),
    amount_y_min: (0.95 * amountY).toFixed(0),
    active_id_desired: 2 ** 23,
    id_slippage: 10,
    delta_ids: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
    distribution_x: [
      0, 0, 0, 0, 0, 0.090909, 0.181818, 0.181818, 0.181818, 0.181818, 0.181818
    ].map((el) => el * 1e18),
    distribution_y: [
      0.181818, 0.181818, 0.181818, 0.181818, 0.181818, 0.090909, 0, 0, 0, 0, 0
    ].map((el) => el * 1e18),
    // to: client.address,
    deadline: 999999999999999
  };

  const msg: LBPair.AddLiquidityMsg = {
    add_liquidity: {
      liquidity_parameters: liquidityParameters
    }
  };

  try {
    setLoading();
    const tx = await client.tx.compute.executeContract(
      {
        sender: client.address,
        contract_address: contractAddressPair,
        code_hash: contractHashPair,
        msg: msg,
        sent_funds: [],
      },
      {
        gasLimit: 2_000_000,
      }
    );
    doneLoading();
    responseToast(tx);
  } catch (error) {
    errorToast(error);
  }
}

export async function executeRemoveLiquidity(
  client: SecretNetworkClient,
  contractHashPair: string,
  contractAddressPair: string,
  bin_step: number,
  tokenX: CustomToken,
  tokenY: CustomToken,
) {

  const removeLiquidity: LBPair.RemoveLiquidity = {
    token_x: tokenX,
    token_y: tokenY,
    bin_step: bin_step,
    amount_x_min: "950000",
    amount_y_min: "950000",
    amounts: ["31869459388831189549983844374029232670507008000"],
    deadline: 999999999999999,
    ids: [8388608]
  };

  const msg: LBPair.RemoveLiquidityMsg = {
    remove_liquidity: {
      remove_liquidity_params: removeLiquidity
    }
  };

  try {
    setLoading();
    const tx = await client.tx.compute.executeContract(
      {
        sender: client.address,
        contract_address: contractAddressPair,
        code_hash: contractHashPair,
        msg: msg,
        sent_funds: [],
      },
      {
        gasLimit: 2_000_000,
      }
    );
    doneLoading();
    responseToast(tx);
  } catch (error) {
    errorToast(error);
  }
}

export async function executeSwap(
  client: SecretNetworkClient,
  contractHashPair: string,
  contractAddressPair: string,
  amount: string,
  swapForY: boolean,
) {
  const msg: LBPair.SwapMsg = {
    swap: {
      swap_for_y: swapForY,
      to: client.address,
      amount_received: amount,
    }
  }

  try {
    setLoading();
    const tx = await client.tx.compute.executeContract(
      {
        sender: client.address,
        contract_address: contractAddressPair,
        code_hash: contractHashPair,
        msg: msg,
        sent_funds: [],
      },
      {
        gasLimit: 2_000_000,
      }
    );
    doneLoading();
    responseToast(tx);
  } catch (error) {
    errorToast(error);
    doneLoading();
  }
}
