import { IUser } from "../interfaces/user/IUser";
import { UsersRepository } from "../repositories/UsersRepository";

type UpdateUserRequest = IUser;

export class UpdateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: UpdateUserRequest): Promise<void> {
    const { dateBirth } = request;
    const minimunAge = new Date();
    minimunAge.setFullYear(minimunAge.getUTCFullYear() - 18);
    if (dateBirth > minimunAge) {
      throw new Error("Invalid date birth");
    }

    await this.usersRepository.update(request);
  }
}
