import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import { store } from './redux'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorMessageDialog from "./components/ErrorMessageDialog";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={ store }>
              <App />
              <ErrorMessageDialog />
          </Provider>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
