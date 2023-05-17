import type { SecretNetworkClient } from "secretjs";
import type * as LBFactory from "../lb_factory/types"
import { LB_ROUTER } from "$lib/contracts"
import { errorToast, responseToast } from "$lib/toasts";

export async function executeCreateLBPair(
  client: SecretNetworkClient,
  contractHashTokenA: string,
  contractAddressTokenA: string,
  contractHashTokenB: string,
  contractAddressTokenB: string,
  active_id: number,  // 8388607 is the middle bin
  bin_step: number,   // 100 represents a 1% bin step
) {
  const msg: LBFactory.CreateLBPairMsg = {
    create_lb_pair: {
      token_x: {
        custom_token: {
          contract_addr: contractAddressTokenA,
          token_code_hash: contractHashTokenA,
        }
      },
      token_y: {
        custom_token: {
          contract_addr: contractAddressTokenB,
          token_code_hash: contractHashTokenB,
        }
      },
      active_id: active_id,
      bin_step: bin_step,
    }
  }

  try {
    const tx = await client.tx.compute.executeContract(
      {
        sender: client.address,
        contract_address: LB_ROUTER.address,
        code_hash: LB_ROUTER.code_hash,
        msg: msg,
        sent_funds: [],
      },
      {
        gasLimit: 500_000,
      }
    );
    responseToast(tx);
  } catch (error) {
    errorToast(error);
  }
}
