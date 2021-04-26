import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Login, Dashboard, PopUp} from "./index";
import {AuthService} from '../services/authService'

const Routing = () => {
    const [isLoggedIn, setLoggedIn]= useState(AuthService.isLoggedIn());
    const [welcome, setWelcome]= useState(false);


    const loginSession = (token)=>{
        AuthService.authenticate(token);
        setLoggedIn(true);
        setWelcome(true);
    }
    const logoutSession = ()=>{
       AuthService.signOut();
       setLoggedIn(false)
    }
  return (
    <>
     <BrowserRouter>
        <Switch>
          {isLoggedIn ? (
            <Route path="/" render={(props) => <Dashboard {...props} logoutSession={logoutSession}/>} />
          ) : (
            <Route path="*" render={(props) => <Login {...props} loginSession={loginSession}/>} />
          )}
        </Switch>
      </BrowserRouter>
      <PopUp open={welcome} close={()=> setWelcome(false)} />
      </>
  );
};

export default Routing;
