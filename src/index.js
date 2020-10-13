import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import store from "./redux/store";
import {Provider} from "react-redux";
import App from "./App";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App/>
      </Router>
    </React.StrictMode>
  </Provider>
    ,
    document.getElementById('root')
);
