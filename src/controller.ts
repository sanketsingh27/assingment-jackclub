import { Request, Response } from "express";
import { TransactionRequestBody } from "./interfaces";

import {
  handleTransactionRequest as handleTransactionRequestService,
  checkBalance as checkBalanceService,
} from "./service";
import { errorMsg } from "./utils";

export const checkBalance = async (req: Request, res: Response) => {
  const { accountId } = req.body;
  try {
    const result = await checkBalanceService(accountId);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export const handleTransactionRequest = async (req: Request, res: Response) => {
  const { type } = req.body as TransactionRequestBody;

  const validTransactionType = ["credit", "debit"];

  try {
    if (!validTransactionType.includes(type)) {
      throw new Error(`invalid 'type' value `);
    }
    const result = await handleTransactionRequestService(req.body);
    res.send(result);
  } catch (error) {
    const message = errorMsg(error);
    res.status(400).json({ error: true, message });
  }
};
