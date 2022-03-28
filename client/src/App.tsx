import React from 'react';
import './index.css'
import './App.css';
import LoginFormComponent from "./components/auth/login-form/login-form.component";
import {createTheme, ThemeProvider} from "@mui/material";


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <LoginFormComponent/>
    </ThemeProvider>
);
}

export default App;
