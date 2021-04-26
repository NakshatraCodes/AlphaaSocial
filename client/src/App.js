import { Store, list } from "./context";
import React from "react";
import {Routing} from './components'
import "./App.css";
function App() {
  return (
    <Store.Provider>
        <Routing />
    </Store.Provider>
  );
}

export default App;
