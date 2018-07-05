import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import SignIn from "./components/SignIn"; 
import Home from "./pages/Home"; 
import UserProfile from "./pages/UserProfile"; 
import FlashCard from "./pages/FlashCard"; 
import CustomCard from "./pages/CustomCard"; 


const App = () => (
  <Router>
    <div className="app">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={UserProfile} />
          <Route exact path="/user/:id/study" component={FlashCard} />
          <Route exact path="/user/:id/create" component={CustomCard} />
          <Route component={Home} />
        </Switch>
      <SignIn /> 
      <Footer />
    </div>
  </Router>
);

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Cicerowned coming soon...</h1>
//   </header>
//   <p className="App-intro">
//     Getting ready for deployment on July 17th!
//   </p>

export default App;