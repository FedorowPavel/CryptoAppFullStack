import React, {FC} from 'react';
import {Route, Routes as ReactRouterRoutes} from "react-router-dom";
import LoginFormComponent from "../components/auth/login-form/login-form.component";
import SignUpFormComponent from "../components/auth/signup-form/signup-form.component";

const SignUpPage: FC = () => {
  return (
    <SignUpFormComponent/>
  );
};

export {SignUpPage};
