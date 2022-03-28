import React, {FC} from 'react';
import {Route, Routes as ReactRouterRoutes} from "react-router-dom";
import LoginFormComponent from "../components/auth/login-form/login-form.component";

const LoginPage: FC = () => {
  return (
    <LoginFormComponent/>
  );
};

export {LoginPage};
