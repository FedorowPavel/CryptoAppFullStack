import React, {FC} from 'react';
import {Route, Routes as ReactRouterRoutes} from "react-router-dom";
import {LoginPage} from "../pages/login.page";
import {SignUpPage} from "../pages/signup.page";

const Routes: FC = () => {
  return (
    <ReactRouterRoutes>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="signup" element={<SignUpPage/>}/>
    </ReactRouterRoutes>
  );
};

export default Routes;
