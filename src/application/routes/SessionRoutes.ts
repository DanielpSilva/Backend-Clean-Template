import express from "express";
import { CreateSessionUseCase } from "../useCases/session/NewSession";
import { SessionController } from "../controller/SessionController";

const sessionRouter = express.Router();
const createSessionUseCase = new CreateSessionUseCase();
const sessionController = new SessionController(createSessionUseCase);

sessionRouter.post("/create-session", (req, res, next) => sessionController.createSession(req, res, next));

export { sessionRouter };
