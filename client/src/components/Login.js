import React from "react";
import useStyles from "../custom-hooks/useStyles";
import style from "../assets/style"
import {Button} from '@material-ui/core'
import logo from '../assets/images/logo.png';
import {fetchAPI } from '../services/api'
import { useHistory } from "react-router-dom";
const Login = (props) => {
  const classes = useStyles(style)();
  let history = useHistory();
  const submitLogin = () =>{
     history.push("http://localhost:8443/api/v1/auth/linkedin");
    //props.loginSession('token');
  }
  return (
    <div className={classes.signInDiv}>
      {/* <a href="http://localhost:8443/api/v1/auth/linkedin" > */}
        <Button onClick={()=>props.loginSession('token')}>
          <img src={logo}/>Sign in with LinkedIn
        </Button>
      {/* </a> */}
    </div>
  );
};

export default Login;
