import { IUser } from "../../src/interfaces/user/IUser";
import { UsersRepository } from "../../src/repositories/UsersRepository";
import crypto from "node:crypto";

export class InMemoryUsersRepository implements UsersRepository {
  public items: IUser[] = [];
  async create(data: IUser) {
    this.items.push({ id: crypto.randomUUID(), ...data });
  }
}
