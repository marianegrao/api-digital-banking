export interface UserProps {
  name: string;
  cpf: string;
  data_nascimento: Date;
  telefone: string;
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
    this.props = props;
  }
}
