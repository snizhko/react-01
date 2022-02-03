import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//BLL props
let dialogs = [
    {id: 1, name: 'Natasha'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Yura'},
    {id: 4, name: 'Lesia'},
    {id: 5, name: 'Dima'},
    {id: 6, name: 'Dasha'}
];

let messages = [
    {id: 1, text: 'Hi!'},
    {id: 2, text: 'How are you?'},
    {id: 3, text: 'I\'m fine, and you?'},
    {id: 4, text: 'Me too'},
    {id: 5, text: 'Yo!'},
    {id: 6, text: 'Yo Yo Yo!'},
];

let posts = [
    {id: 1, likesCount: 23, message: 'Hi!'},
    {id: 2, likesCount: 54, message: 'It\'s my first post!'},
    {id: 3, likesCount: 32, message: 'It\'s my first post 1!'},
    {id: 4, likesCount: 11, message: 'It\'s my first post 2!'},
    {id: 5, likesCount: 16, message: 'It\'s my first post 3!'},
    {id: 6, likesCount: 9, message: 'It\'s my first post 4!'},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
