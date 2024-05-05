export interface TransactionRequestBody {
  accountId: string;
  idempotentKey: string;
  amount: number;
  type: string;
}
