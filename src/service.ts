export const checkBalance = (accountId: string): string => {
  return `${accountId} has 100$`;
};

export const makeTransaction = (
  accountId: string,
  amount: number,
  type: string
): string => {
  return `${accountId}  hsd ${type} of amount ${amount}`;
};
