import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { sessionRouter } from "./application/routes/SessionRoutes";
import { errorHandler } from "./utils/ErrorHandle";
import { AppConstants } from "./config/AppConstants";

const app = express();

app.use(bodyParser.json());
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: AppConstants.clientUrl,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

//Routes
app.use("/session", sessionRouter);

app.use(errorHandler);

export { server, io };
