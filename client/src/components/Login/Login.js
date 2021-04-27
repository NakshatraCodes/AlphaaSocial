import React, { useEffect } from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style";
import { Button } from "@material-ui/core";
import logo from "../assets/images/logo.png";
import { useHistory } from "react-router-dom";
const Login = (props) => {
  const classes = useStyles(style)();
  let history = useHistory();
  useEffect(() => {
    if (props.location && props.location.search) {
      const session = props.location.search.split("=");
      history.push("/todo");
      props.loginSession(session[1]);
    }
  }, []);
  return (
    <div className={classes.signInDiv}>
      <a href="http://localhost:8443/api/v1/auth/linkedin">
        <Button>
          <img alt="linkedin logo" src={logo} />
          Sign in with LinkedIn
        </Button>
      </a>
    </div>
  );
};

export default Login;
