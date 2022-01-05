import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './Signup'
import Podcast from './folder_podcast/Podcast'
import reportWebVitals from './reportWebVitals';
import Adminn from './AdminAPI'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Signup /> */}
    {/* <Podcast /> */}
    <Adminn />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
