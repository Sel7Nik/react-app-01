import state, { subscribe } from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { addPost } from './redux/state.js';
import { updateNewPostText } from './redux/state.js';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,

    document.getElementById('root')
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
