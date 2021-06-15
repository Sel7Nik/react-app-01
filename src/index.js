import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

let postsData = [
  { id: 1, message: 'Hi, how are you Ok', likeCount: '23' },
  { id: 2, message: 'It is my first post', likeCount: '0' },
];

let dialogsData = [
  { id: 1, name: 'DimDimitch' },
  { id: 2, name: 'DimVovich' },
];

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);
