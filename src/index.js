import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import store from './../src/redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
