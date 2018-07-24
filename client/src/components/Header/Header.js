import React, { Component } from "react"; 
import { Button } from 'react-materialize';
import './style.css';

class Header extends Component {
 
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    
    return (
      <div>
        <div className = "header">
          <img className="responsive-img" src={require("../../images/beer_header.jpg")} alt= "beer-header" width="100%"  />

            <div className="top-left responsive-img">
            <img src={require("../../images/Ciceroned.png")} alt= "beer-header" width="80%"  />
            </div>

            <div className="bottom-left">

              <p className='p-header'>An interactive study card application that can prepare you for your Cicerone exams! Study beer styles, create custom decks, and chat with other beer lovers!</p>

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
                      bsstyle="primary"
                      className="btn-margin"
                      onClick={this.props.auth.logout}
                    >
                      Log Out
                    </Button>
                  )
              }
            </div>
        </div>
        <div className = "mediaLogin">
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
    );
  }
}

export default Header; 