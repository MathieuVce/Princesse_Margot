import React from 'react';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import App from "../roots/App";
import Login from "../roots/Login";
import NoPage from "../roots/NoPage";
import Register from "../roots/Register";
import Password from "../roots/Password";
import { RequireAuth } from "./RequireAuth";

const Navigation: React.FunctionComponent = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='password' element={<Password/>}/>
          </Route>
          <Route>
            <RequireAuth>

            </RequireAuth>
          </Route>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    );
};

export default Navigation
