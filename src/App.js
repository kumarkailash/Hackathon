import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import Store  from "./Store/Index"

import BasicRouter from "../src/Config/Router/Router"

function App() {
  return (
   <Provider store={Store} >

 <BasicRouter/> 

   </Provider>
  );
}

export default App;
