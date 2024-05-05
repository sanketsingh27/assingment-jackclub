"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTransactionRequest = exports.checkBalance = void 0;
const checkBalance = (accountId) => __awaiter(void 0, void 0, void 0, function* () {
    return `${accountId} has 100$`;
});
exports.checkBalance = checkBalance;
const handleTransactionRequest = (transaction) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.handleTransactionRequest = handleTransactionRequest;
