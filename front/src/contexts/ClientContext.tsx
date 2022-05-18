import { createContext, useState } from "react";
import { IRegisterActivity } from "../@types/IActivity";
import { IAuth, IClient, IRegister } from "../@types/IClient";
import { defaultClientValue, IClientContext, TLoginFC, TLogoutFC, TRegisterActivityFC, TRegisterFC, TResetPasswwordFC } from "../@types/IClientContext";

export const ClientContext = createContext<IClientContext>(defaultClientValue);

export const ClientProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState<null | IClient>(null);

  const login: TLoginFC = async (payload: IAuth) => {
    // const { email, password } = payload;
    // const response = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ email, password })
    // });
    // const data = await response.json();
    // setUser(data);
  };

  const register: TRegisterFC = async (payload: IRegister) => {
    // const { email, password } = payload;
    // const response = await fetch("/api/register", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ email, password })
    // });
    // const data = await response.json();
    // setUser(data);
  };

  const resetPassword: TResetPasswwordFC = async (payload: IAuth) => {
    // const { email, password } = payload;
    // const response = await fetch("/api/resetPassword", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ email })
    // });
    // const data = await response.json();
    // setUser(data);
  };

  const registerActivity: TRegisterActivityFC = async (payload: IRegisterActivity) => {

  };

  const logout: TLogoutFC = async () => {
    setUser(null);
  };


  return (
    <ClientContext.Provider value={{
        client: user,
        login, register, resetPassword, logout,
        registerActivity
    }}>
        {children}
    </ClientContext.Provider>
  );
};