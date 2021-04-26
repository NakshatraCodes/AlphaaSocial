import React from "react";
import useStyles from "../custom-hooks/useStyles";
import style from "../assets/style"
import {Button} from '@material-ui/core'
import logo from '../assets/images/logo.png';
const Login = (props) => {
  const classes = useStyles(style)();
  const submitLogin = () =>{
    props.loginSession('token');
  }
  return (
    <div className={classes.signInDiv}>
      <Button onClick={submitLogin}><img src={logo}/>Sign in with LinkedIn</Button>
    </div>
  );
};

export default Login;
