import { checkBalance, handleTransactionRequest } from "./controller";
import { Router } from "express";
const routes = Router();

// Route 1: Get current balance
routes.post("/balance", checkBalance);

// Route 2: Do a transaction
routes.post("/transactions", handleTransactionRequest);

export default routes;
