import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from './components/Auth/Auth.js';
import API from "./utils/API"; 



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
  userData: {},
}


let updateByEmail = () => {
  API.updateUser(user.email)
    .then(res =>
      // use the variables passed onto state below to populate user information
      this.setState({ decksCompleted: res.data[0].decksCompleted})
    )
    .catch(err => console.log(err));
};

let initialState = {
  auth, 
  name: user.name, 
  email: user.email, 
  signUpDate: user.userData.signUpDate,
  userDecks: user.userData.userDecks,
  decksCompleted: user.userData.decksCompleted,
  decksCreated: user.userData.decksCreated,
  badgesEarned: user.userData.badgesEarned,
  loggedInDates: user.userData.loggedInDates
}

window.setState(initialState); 

updateByEmail(user.email);
// checkUser(); 
registerServiceWorker();
