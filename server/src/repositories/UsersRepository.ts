import { IUser } from "../interfaces/user/IUser";

export interface UsersRepository {
  create(data: IUser): Promise<void>;
  update(data: IUser): Promise<void>;
}
