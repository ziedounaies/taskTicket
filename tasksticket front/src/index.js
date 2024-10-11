import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/configStore';
import { AuthProvider } from "./pages/authProvider/authProvider";
//import App from './app.jsx'

//const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(

  <Provider store={store} >
    <App />
  </Provider>,


/*

  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
*/
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
