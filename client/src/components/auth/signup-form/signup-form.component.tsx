import React, {FC, useState} from 'react';
import {Button, Link as MuiLink, TextField} from "@mui/material";
import {Link} from 'react-router-dom'
import {usersApi} from "../../../api/users.api";

const SignUpFormComponent: FC = () => {
  const [email, setEmail] = useState('')
  const [emailErrored, setEmailErrored] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordErrored, setPasswordErrored] = useState(false)

  const [createUser] = usersApi.useCreateUserMutation()

  const handleSignUp = async () => {
    if(!email) {
      setEmailErrored(true)
    } else {
      setEmailErrored(false)

    }

    if(!password) {
      setPasswordErrored(true)
    } else {
      setPasswordErrored(false)
    }

    await createUser({email, password})
  }
  
  
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-4xl">
        CryptoStats
      </h1>
      <div className="flex flex-col gap-2">
        <TextField
          label="email"
          className="w-80"
          type="email"
          required
          helperText={emailErrored && "please enter valid email"}
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={emailErrored}
        />
        <TextField
          label="password"
          className="w-80"
          type="password"
          required
          helperText={passwordErrored && "please cannot be empty"}
          value={password}
          onChange={e => setPassword(e.target.value)}
          error={passwordErrored}
        />
        <Link to="/login" className="justify-self-start self-start mt-2">
          <MuiLink>login</MuiLink>
        </Link>
      </div>

      <Button
        variant="contained"
        className="w-80"
        onClick={handleSignUp}
      >
        <span className="p-1">Sign up</span>
      </Button>

    </div>
  );
};

export default SignUpFormComponent;
