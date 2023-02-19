import { IUser } from "../interfaces/user/IUser";

export class User {
  private props: IUser;

  get user() {
    const { password, ...userData } = this.props;
    return userData;
  }

  constructor(props: IUser) {
    this.props = props;
  }
}
