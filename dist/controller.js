"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTransaction = exports.checkBalance = void 0;
const service_1 = require("./service");
const checkBalance = (accountId) => {
    return (0, service_1.checkBalance)(accountId);
};
exports.checkBalance = checkBalance;
const makeTransaction = (accountId, amount, type) => {
    return (0, service_1.makeTransaction)(accountId, amount, type);
};
exports.makeTransaction = makeTransaction;
