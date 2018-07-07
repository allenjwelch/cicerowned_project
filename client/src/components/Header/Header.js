import React, { Component } from "react"; 
import { Navbar, Button } from 'react-materialize';
import Auth from '../../components/Auth/Auth.js';


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
        <h1>Header</h1>
        <h1>Hello {this.props.name}</h1>
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