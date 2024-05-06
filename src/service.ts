import { TransactionRequestBody } from "./interfaces";
import NodeCache from "node-cache";
import Account from "./model/account";

const AccountCache = new NodeCache();

export const checkBalance = async (accountId: string): Promise<number> => {
  try {
    const account = await Account.findOne({ accountId });
    if (!account) throw new Error("Account not found");
    return account?.amount ?? 0;
  } catch (error) {
    throw new Error("Get value request failed ?");
  }
};

export const handleTransactionRequest = async (
  transaction: TransactionRequestBody
): Promise<string> => {
  const {
    accountId,
    amount: transactionAmount,
    idempotentKey,
    type,
  } = transaction; // destructure the accountId and amount properties of the {

  try {
    if (isTransactionIsPresent(idempotentKey)) {
      throw new Error(`Ongoing transaction with same key ${idempotentKey}`);
    }

    AccountCache.set(idempotentKey, transaction);

    const account = await Account.findOne({ accountId });
    if (!account) throw new Error("Account not found");

    let newBalance: number = 0;
    if (type === "credit") {
      newBalance = transactionAmount + (account?.amount ?? 0);
    } else if (type === "debit") {
      newBalance = transactionAmount - (account?.amount ?? 0);
      if (newBalance < 0) {
        throw new Error(`Insufficient balance for account ${accountId}.`);
      }

      await Account.updateOne({ accountId }, { amount: newBalance });
      AccountCache.del(idempotentKey);
      return "Transaction processed successfully";
    } else {
      throw new Error(`Invalid transaction type: ${type}`);
    }
  } catch (err) {
    AccountCache.del(idempotentKey);
    throw new Error("error while updating account balance ");
  }

  return "some value will be returned ";
};

function isTransactionIsPresent(idempotentKey: string): boolean {
  if (AccountCache.get(idempotentKey)) {
    return true;
  }

  return false;
}
