import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import state, {
  addPost,
  updateNewPostText,
  subscribe,
} from './../src/redux/state';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree();

subscribe(rerenderEntireTree);
