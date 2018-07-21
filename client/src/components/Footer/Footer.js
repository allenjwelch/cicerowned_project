import React from "react"; 
import {Footer} from 'react-materialize';

const FooterComp = () => (
  <Footer copyrights="Copyright 2018 | Allen Welch, Eddie Rodriguez, + Susan Davenport"
  moreLinks={
    <a className="grey-text text-lighten-4 right" href="#!">GitHub</a>
  }
  links={
    <ul>
      <li><a className="grey-text text-lighten-3" href="#!">Study</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Create</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Chat</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">User Dashboard</a></li>
    </ul>
  }
  className='amber darken-2 page-footer'
>
    <h5 className="white-text">Contact Us</h5>
    <p className="grey-text text-lighten-4">Interested in using Cicerowned for your bar, brewery, or restaurant? Let's talk!</p>
</Footer>
); 

export default FooterComp; 