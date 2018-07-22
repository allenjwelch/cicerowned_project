
import React, { Component } from "react"; 
import { Button } from 'react-materialize';
import './style.css';
// import Auth from '../../components/Auth/Auth.js';


// const auth = new Auth();
// auth.login();

// const Header = () => (
//   <header>
//     <h1>Header</h1>
//   </header>
// ); 

class Header extends Component {
  // goTo(route) {
  //   this.props.history.replace(`/${route}`)
  // }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    // const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <div class = "header">
          <img class="responsive-img" src={require("../../images/beer_header.jpg")} alt= "beer-header" width="100%"  />
            <div className="top-left">
            <img src={require("../../images/Ciceroned.png")} alt= "beer-header" width="80%"  />
            </div>

            <div className="bottom-left">
              <p>UPDATED 7/22</p>
              <p>"The Cicerone Certification Program certifies and educates beer professionals in order to elevate the beer experience for consumers."</p>
              <p>For more information visit <a href="https://www.cicerone.org/">Cicerone.org</a> </p>
            </div>
            <div className="top-right">
              <h5>Hello {this.props.name}</h5>
              {/* <Button onClick={this.props.auth.login}>Login</Button> */}
              {
                !this.props.auth.isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.props.auth.login}
                    >
                      Log In
                    </Button>
                  )
              }
              {
                this.props.auth.isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.props.auth.logout}
                    >
                      Log Out
                    </Button>
                  )
              }
            </div>
        </div>

        {/* <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar> */}
      </div>
    );
  }
}

export default Header; 