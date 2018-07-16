import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {Col} from 'react-materialize';
import Header from "./components/Header"; 
import Footer from "./components/Footer";
// import SignIn from "./components/SignIn"; 
import Home from "./pages/Home"; 
import UserProfile from "./pages/UserProfile"; 
import FlashCard from "./pages/FlashCard"; 
import CustomCard from "./pages/CustomCard"; 
import Login404 from "./pages/Login404"; 
import Callback from './components/CallBack';
// Auth0 imports
require('dotenv').config()


// import Auth from './components/Auth';
// import history from './components/Auth/history.js';

// const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication();
//   }
// }


class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
        <Header {...this.props}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" render={(props) => this.props.auth.isAuthenticated() ? <UserProfile {...this.props}/> : <Home/>} />
            <Route exact path="/user/study" render={(props) => this.props.auth.isAuthenticated() ? <FlashCard {...this.props}/> : <Home/>} />
            <Route exact path="/user/create" render={(props) => this.props.auth.isAuthenticated() ? <CustomCard {...this.props}/> : <Home/>} />
            <Route exact path="/callback" component={Callback} />
            <Route exact path="/unsuccessful" component={Login404} />
            <Route component={Home}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
};


// ============= Auth0 Doc Example =================
// return (
  //   <Router history={history} component={App}>
  //     <div>
  //       <Route path="/" render={(props) => <App auth={auth} {...props} />} />
  //       <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
  //       <Route path="/callback" render={(props) => {
    //         handleAuthentication(props);
    //         return <Callback {...props} /> 
    //       }}/>
    //     </div>
    //   </Router>
    // );
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1 className="App-title">Cicerowned coming soon...</h1>
    //   </header>
    //   <p className="App-intro">
    //     Getting ready for deployment on July 17th!
    //   </p>

export default App;