import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from './StoreContext.js';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,

    document.getElementById('root')
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});
