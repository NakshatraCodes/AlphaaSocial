import { AppBar,Toolbar, Avatar, Button } from '@material-ui/core';
import React from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style"
import user from '../assets/images/user.jpg';
import { fetchAPI } from "../../services/api";

const Header = (props) => {
  const classes = useStyles(style)();
  const onLogout=()=>{
    fetchAPI(`/logout`).then((res) => {
      props.logoutSession();
      props.history.push('/login')

    });
  }
  return (
    <div>
      <AppBar className={classes.headerBar}>
        <Toolbar>
          <div className={classes.headerLeft}>
          <Avatar alt="user profile" src={props.user.avatar ? props.user.avatar : user }/>
          <h4 className={classes.userName}>{props.user.name}</h4>
          </div>
           <div className={classes.headerRight}>
          <Button onClick={onLogout}> Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
