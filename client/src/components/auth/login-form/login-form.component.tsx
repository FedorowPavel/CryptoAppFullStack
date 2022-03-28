import React, {FC} from 'react';
import {Button, TextField} from "@mui/material";

const LoginFormComponent: FC = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-4xl">
        CryptoStats
      </h1>
      <div className="flex flex-col gap-2">
        <TextField label="email" className="w-80" type="email" required/>
        <TextField label="password" className="w-80" type="password" required/>
      </div>

      <Button variant="contained" className="w-80">
        <span className="p-1">Login</span>
      </Button>

    </div>
  );
};

export default LoginFormComponent;
