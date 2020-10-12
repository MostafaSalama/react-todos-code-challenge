import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/index';
import store from "./redux/store";
import {Provider} from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <IndexPage />
    </React.StrictMode>
  </Provider>
    ,
    document.getElementById('root')
);
