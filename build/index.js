"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const SERVER_PORT = process.env.SERVER_PORT;
app.get("/", (req, res) => {
    res.send("Hello World...!!");
});
const server = http_1.default.createServer(app);
server.listen(SERVER_PORT, () => {
    console.log(`[server]: Server is running at ⚡️ http://localhost:${SERVER_PORT}`);
});
