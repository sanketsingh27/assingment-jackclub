"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const routes = (0, express_1.Router)();
// Route 1: Get current balance
routes.get("/getCurrentBalance", (req, res) => {
    const result = (0, controller_1.checkBalance)("1");
    res.send(result);
});
// Route 2: Do a transaction
routes.get("/doTransaction", (req, res) => {
    const result = (0, controller_1.makeTransaction)("1223", 100, "withdraw");
    res.send(result);
});
exports.default = routes;
