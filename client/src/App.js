import { Store, list } from "./context";
import React from "react";
import {Routing} from './components'
function App() {
  return (
    <Store.Provider>
        <Routing />
    </Store.Provider>
  );
}

export default App;
