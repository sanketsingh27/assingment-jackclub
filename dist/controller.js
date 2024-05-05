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
const service_1 = require("./service");
const utils_1 = require("./utils");
const checkBalance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { accountId } = req.body;
    try {
        const result = yield (0, service_1.checkBalance)(accountId);
        res.send(result);
    }
    catch (error) {
        res.send(error);
    }
});
exports.checkBalance = checkBalance;
const handleTransactionRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.body;
    const validTransactionType = ["credit", "debit"];
    try {
        if (!validTransactionType.includes(type)) {
            throw new Error(`invalid 'type' value `);
        }
        const result = yield (0, service_1.handleTransactionRequest)(req.body);
        res.send(result);
    }
    catch (error) {
        const message = (0, utils_1.errorMsg)(error);
        res.status(400).json({ error: true, message });
    }
});
exports.handleTransactionRequest = handleTransactionRequest;
