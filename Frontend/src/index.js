import React from "react";

import  ReactDOM  from "react-dom";


import App from "./App";
import { BrowserRouter} from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import {store} from "./store/store";


ReactDOM.render(
    <div>
      <ReduxProvider store={store}>
        <BrowserRouter >
          <App/>
        </BrowserRouter>
      </ReduxProvider> 

        
    </div>,
    document.getElementById("root")
)