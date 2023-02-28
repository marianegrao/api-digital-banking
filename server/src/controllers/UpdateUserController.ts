import { Request, Response } from "express";
import { PrismaUsersRepository } from "../repositories/prisma/PrismaUsersRepository";
import { UpdateUser } from "../services/UpdateUser";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    try {
      const user = req.body;
      const UsersRepository = new PrismaUsersRepository();
      const service = new UpdateUser(UsersRepository);
      await service.execute(user);
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
