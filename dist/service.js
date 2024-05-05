"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTransaction = exports.checkBalance = void 0;
const checkBalance = (accountId) => {
    return `${accountId} has 100$`;
};
exports.checkBalance = checkBalance;
const makeTransaction = (accountId, amount, type) => {
    return `${accountId}  hsd ${type} of amount ${amount}`;
};
exports.makeTransaction = makeTransaction;
