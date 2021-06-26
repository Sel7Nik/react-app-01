import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './../src/redux/state';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree();
