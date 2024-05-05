import { Request, Response, Router } from "express";
import { checkBalance, makeTransaction } from "./controller";
const routes = Router();

// Route 1: Get current balance
routes.get("/getCurrentBalance", (req: Request, res: Response) => {
  const result = checkBalance("1");
  res.send(result);
});

// Route 2: Do a transaction
routes.get("/doTransaction", (req: Request, res: Response) => {
  const result = makeTransaction("1223", 100, "withdraw");
  res.send(result);
});

export default routes;
