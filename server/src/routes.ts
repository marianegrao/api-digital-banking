import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();

routes.post("/signup", new CreateUserController().handle);

export { routes };
