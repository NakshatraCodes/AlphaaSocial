import React, {useState,useEffect} from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import {Login, Dashboard, PopUp} from "./index";
import {AuthService} from '../services/authService'
import { fetchAPI } from "../services/api";

const Routing = () => {
    const [isLoggedIn, setLoggedIn]= useState(AuthService.isLoggedIn());
    const [welcome, setWelcome]= useState(false);
    let history = useHistory();
    // useEffect(() => {
    //     fetchAPI(`/todos`).then((res) => {
    //       console.log("res---------", res);
    //     });
    //   }, []);
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
            <Route path="/todo" render={(props) => <Dashboard {...props} logoutSession={logoutSession}/>} />
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
