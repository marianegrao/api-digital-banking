export interface UserProps {
  id: string;
  name: string;
  cpf: string;
  dateBirth: Date;
  telephone: string;
  email: string;
  password: string;
}
export class User {
  private props: UserProps;

  get user() {
    const { password, ...userData } = this.props;
    return userData;
  }

  constructor(props: UserProps) {
    const { dateBirth } = props;
    const minimunAge = new Date();
    minimunAge.setFullYear(minimunAge.getUTCFullYear() - 18);
    if (dateBirth > minimunAge) {
      throw new Error("Invalid date birth");
    }
    this.props = props;
  }
}
