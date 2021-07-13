import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import store from './../src/redux/state';
import store from './../src/redux/redux-store';
import StoreContext from './StoreContext.js';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App
        // store={store}
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
