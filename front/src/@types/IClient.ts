export interface IClient {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IRegister {
  details: IClient;
  login: IAuth;
}