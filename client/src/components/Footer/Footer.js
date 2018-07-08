import React from "react"; 
import {Footer} from 'react-materialize';

const FooterComp = () => (
  <Footer copyrights="&copy 2015 Copyright Text"
  moreLinks={
    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
  }
  className='example'
>
    <h5 className="white-text">Footer Content</h5>
    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</Footer>
); 

export default FooterComp; 