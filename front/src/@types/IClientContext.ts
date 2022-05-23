import { IRegisterActivity } from "./IActivity";
import { IAuth, IClient, IPassword, IRegister } from "./IClient";

export interface IClientContext {
  client?: null | IClient;

  login: TLoginFC;
  logout: TLogoutFC;
  register: TRegisterFC;
  resetPassword: TResetPasswwordFC;
  registerActivity: TRegisterActivityFC;
}

export type TLoginFC = (payload: IAuth) => Promise<any>;
export type TLogoutFC = () => Promise<any>; // Check with back need
export type TRegisterFC = (payload: IRegister) => Promise<any>;
export type TResetPasswwordFC = (payload: IPassword) => Promise<any>;
export type TRegisterActivityFC = (payload: IRegisterActivity) => Promise<any>;

export const defaultClientValue: IClientContext = {
  client: null,
  
  login: () => Promise.reject(null),
  logout: () => Promise.reject(null),
  register: () => Promise.reject(null),
  resetPassword: () => Promise.reject(null),
  registerActivity: () => Promise.reject(null)
}