import React from "react"; 
import {Col} from 'react-materialize';

const Header = () => (
  <header>
    <row>
      <div className="container">
        <h1>Cicerowned</h1>
        <Col s={12} className="header">Don't just pass the test, Own it!</Col>
      </div>
    </row>
  </header>
); 

export default Header; 