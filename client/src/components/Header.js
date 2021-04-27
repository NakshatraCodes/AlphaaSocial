import { AppBar,Toolbar, Avatar, Button } from '@material-ui/core';
import React from "react";
import useStyles from "../custom-hooks/useStyles";
import style from "../assets/style"
import user from '../assets/images/user.jpg';
const Header = (props) => {
  const classes = useStyles(style)();
  return (
    <div>
      <AppBar className={classes.headerBar}>
        <Toolbar>
          <div className={classes.headerLeft}>
          <Avatar alt="Remy Sharp" src={user}/>
          <h4 className={classes.userName}>Username</h4>
          </div>
           <div className={classes.headerRight}>
          <Button onClick={props.logoutSession}> Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
