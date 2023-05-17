import type { SecretNetworkClient } from "secretjs";
import type { Token } from "./tokens";

export async function increaseAllowance(
  client: SecretNetworkClient,
  token: Token,
  spender: string,
  amount: string,
) {
  const tx = await client.tx.snip20.increaseAllowance(
    {
      sender: client.address,
      contract_address: token.address,
      code_hash: token.codeHash,
      msg: {
        increase_allowance: {
          spender: spender,
          amount: amount,
        }
      }
    },
    {
      gasLimit: 100_000,
    }
  );

  if (tx.code !== 0) {
    throw new Error(
      `Failed with the following error:\n ${tx.rawLog}`
    );
  }
}

export async function getAllowance(
  client: SecretNetworkClient,
  token: Token,
  owner: string,
  spender: string,
  auth: string,
): Promise<string> {
  try {
    const snip20Response = await client.query.snip20.GetAllowance({
      contract: {
        address: token.address,
        code_hash: token.codeHash,
      },
      owner: owner,
      spender: spender,
      auth: {
        key: auth,
      }
    })
    const allowance = ((parseInt(snip20Response.allowance.allowance)) / 10 ** token.decimals).toString();
    return allowance;

  } catch (error) {
    console.log(error);
    return "0";
  }

}

export async function getBalance(
  client: SecretNetworkClient,
  token: Token,
  address: string,
  auth: string,
): Promise<string> {
  try {
    const snip20Response = await client.query.snip20.getBalance({
      contract: {
        address: token.address,
        code_hash: token.codeHash,
      },
      address: address,
      auth: {
        key: auth,
      }
    })
    const balance = ((parseInt(snip20Response.balance.amount)) / 10 ** token.decimals).toString();
    return balance;

  } catch (error) {
    console.log(error);
    return "👀";
  }

}