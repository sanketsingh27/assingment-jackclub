"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const express_1 = require("express");
const routes = (0, express_1.Router)();
// Route 1: Get current balance
routes.post("/balance", controller_1.checkBalance);
// Route 2: Do a transaction
routes.post("/transactions", controller_1.handleTransactionRequest);
exports.default = routes;
