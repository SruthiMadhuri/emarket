import express, { Express, Request, Response } from "express";
import http from "http";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const SERVER_PORT = process.env.SERVER_PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World...!!");
});

const server = http.createServer(app);
server.listen(SERVER_PORT, () => {
  console.log(
    `[server]: Server is running at ⚡️ http://localhost:${SERVER_PORT}`
  );
});
