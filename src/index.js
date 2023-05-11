import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page2 from './Page2'
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store, { history } from './store/index';
import { saveSate } from './store/localStorage';

store.subscribe(() => {
  saveSate(store.getState())
})

const Router = () => {
  return (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Routes>
        <Route exact path='/' element={<App/>} />
        <Route exact path='/page2' element={<Page2/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
