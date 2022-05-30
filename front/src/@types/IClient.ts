import { EAlert } from "./IAlert";

export interface IClient {
  email: string;
  birthDate: Date;
  lastName: string;
  firstName: string;
};

export interface IAuth {
  email: string;
  password: string;
};

export interface IRegister {
  login: IAuth;
  details: IClient;
};

export interface IResponse {
  status: EAlert;
  message: string;
};

export interface IPassword {
  email: string;
};