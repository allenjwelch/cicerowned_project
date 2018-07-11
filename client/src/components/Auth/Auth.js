/* eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode'; 
// import history from './history';
const LOGIN_SUCCESS_PAGE = "/user"; 
const HOME_PAGE = "/"; 
const LOGIN_UNSUCCESSFUL_PAGE = "/unsuccessful"; 

//TODO 
// change history.replace('/home') to another path


export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'cicerowned.auth0.com',
    clientID: 'QT0WSGoPGQUMk2JMYX8w7Ut5YGETbVaJ',
    redirectUri: 'https://cicerowned.herokuapp.com/callback', // http://localhost:3000/callback', // || process.env.AUTH0_CALLBACK || , // 'https://cicerowned.herokuapp.com/callback'
    audience: 'https://cicerowned.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid email profile'
  });

  login() {
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        // history.replace('/home');
      } else if (err) {
        location.pathname = LOGIN_UNSUCCESSFUL_PAGE; 
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    location.hash = ''; 
    location.pathname = LOGIN_SUCCESS_PAGE; 

    // navigate to the home route
    // history.replace('/home');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    location.hash = ''; 
    location.pathname = HOME_PAGE; 
    
    // navigate to the home route
    // history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getProfile() {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.getItem("id_token")); 
    } else {
      return {}; 
    }
  }


}