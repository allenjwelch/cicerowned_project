import React from "react"; 
import {Footer} from 'react-materialize';

const FooterComp = () => (
  <Footer copyrights="2018 Copyright | Created by Allen Welch, Eddie Rodriguez + Susan Davenport"
  moreLinks={
    <a className="grey-text text-lighten-4 right" href="#!">GitHub</a>
  }
  className='example amber darken-2'
>
    <h5 className="white-text">Contact Us</h5>
    <p className="grey-text text-lighten-4">Are you interested in using Cicerowned at your bar or brewery? Let's talk!</p>
</Footer>
); 

export default FooterComp; 