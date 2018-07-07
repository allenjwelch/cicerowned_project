import React, { Component } from 'react';
import Auth from '../Auth/Auth';
// import loading from './loading.svg';

class Callback extends Component {
  componentDidMount() {
    const auth = new Auth(); 
    auth.handleAuthentication(); 
  }

  render() {
    // const style = //...

    return (
      // <div style={style}>
      <div>
        <h3>Loading...</h3>
        {/* <img src={loading} alt="loading"/> */}
      </div>
    );
  }
}

export default Callback;