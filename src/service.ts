import { TransactionRequestBody } from "./interfaces";

export const checkBalance = async (accountId: string): Promise<string> => {
  return `${accountId} has 100$`;
};

export const handleTransactionRequest = async (
  transaction: TransactionRequestBody
): Promise<string> => {
  const { accountId, amount, idempotentKey, type } = transaction; // destructure the accountId and amount properties of the {

  // id account id is not present in db
  // check balance in db and update it with new balance

  // if (type === "credit") {
  //   newBalance += amount;
  // } else if (type === "debit") {
  //   newBalance -= amount;
  //   if (newBalance < 0) {
  //     throw new Error(`Insufficient balance for account ${accountId}.`);
  //   }
  // } else {
  //   throw new Error(`Invalid transaction type: ${type}`);
  // }

  // Ensure idempotency by checking the idempotentKey

  // Update the account balance and idempotentKey

  return "some value will be returned ";
};
