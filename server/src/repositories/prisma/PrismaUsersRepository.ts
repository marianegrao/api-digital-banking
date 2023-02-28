import { IUser } from "../../interfaces/user/IUser";
import { prisma } from "../../prisma";
import { UsersRepository } from "../UsersRepository";

export class PrismaUsersRepository implements UsersRepository {
  async create(data: IUser) {
    await prisma.user.create({
      data,
    });
  }
  async update(data: IUser) {
    // await prisma.user.update();
  }
}
