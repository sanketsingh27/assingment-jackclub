import {
  makeTransaction as makeTransactionService,
  checkBalance as checkBalanceService,
} from "./service";

export const checkBalance = (accountId: string) => {
  return checkBalanceService(accountId);
};

export const makeTransaction = (
  accountId: string,
  amount: number,
  type: string
): string => {
  return makeTransactionService(accountId, amount, type);
};
