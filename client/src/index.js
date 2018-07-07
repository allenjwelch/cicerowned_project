import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from './components/Auth/Auth.js';

const auth = new Auth();
// auth.login();

let state = {}; 
window.setState = (changes) => {
  state = Object.assign({}, state, changes); 
  
  ReactDOM.render(<App {...state} />, document.getElementById('root'));
}; 

let user = {
  name : auth.getProfile().nickname || "Beer lover",
  email : auth.getProfile().email || '',
}

let initialState = {
  auth, 
  name: user.name, 
  email: user.email
}

window.setState(initialState); 

registerServiceWorker();
