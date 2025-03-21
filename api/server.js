"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    console.log("this is server up and running");
    res.send("Express + TypeScript Server afsdfa");
});
app.post("/", (req, res) => {
    console.log("post route getting called");
    res.send("this is from post");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
