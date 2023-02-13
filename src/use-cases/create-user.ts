import { User, UserProps } from "../entities/user";

type CreateUserRequest = UserProps;
type CreateUserResponse = User;

export class CreateUser {
  async excute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User(request);
    return user;
  }
}
