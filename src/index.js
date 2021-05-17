import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'Hi, how are you Ok', likeCount: '23' },
  { id: 2, message: 'It is my first post', likeCount: '0' },
  // { id: 3, message: 'It is my second post', likeCount: '32' },
  // { id: 4, message: 'It is my eleven post', likeCount: '99' },
];

let dialogsData = [
  { id: 1, name: 'DimDimitch' },
  { id: 2, name: 'DimVovich' },
  // { id: 3, name: 'NikSanytch' },
  // { id: 4, name: 'OlegSanytch' },
  // { id: 5, name: 'PetrSanytch' },
  // { id: 6, name: 'Olegovich' },
];

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hello' },
  // { id: 3, message: 'How are you' },
  // { id: 4, message: 'I am fine' },
  // { id: 5, message: 'I am fine too' },
  // { id: 6, message: 'OhOhOh' },
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
