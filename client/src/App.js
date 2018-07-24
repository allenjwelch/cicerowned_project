import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import UserProfile from "./pages/UserProfile"; 
import FlashCard from "./pages/FlashCard"; 
import CustomCard from "./pages/CustomCard"; 
import Login404 from "./pages/Login404"; 
import ChatRoom from "./pages/ChatRoom"; 
// import ComingSoon from "./pages/ComingSoon"; 

// Auth0 imports
import Callback from './components/CallBack';

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
            <Route exact path="/user/chat" render={(props) => this.props.auth.isAuthenticated() ? <ChatRoom {...this.props}/> : <Home/>} />
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

export default App;