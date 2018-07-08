import React from "react"; 
import { Row, Col, Container, Card } from "react-materialize";
// import Auth from '../../components/Auth/Auth.js';

// const auth = new Auth();
// auth.login();

const Home = () => (
    <div container = "mainBody">
      <Row>
        <Col m={6} s={12}>
        <Card className='blue-grey darken-1 center-align' textClassName='white-text' title={<i className="medium material-icons">book</i>} actions={[<a href='#'>This is a link</a>]}><h3>Study</h3><p>Learn the basics using our pre-made study guides.</p>
        </Card>
        </Col>

        <Col m={6} s={12}>
        <Card className= 'blue-grey darken-1 center-align' textClassName='white-text' title={<i className="medium material-icons">book</i>} actions={[<a href='#'>This is a link</a>]}><h3>Create</h3><p>Make your own custom study guides.</p>
        </Card>
        </Col>
      
        <Col m={6} s={12}>
        <Card className='blue-grey darken-1 center-align' textClassName='white-text' title={<i className="medium material-icons">book</i>} actions={[<a href='#'>This is a link</a>]}><h3>Study</h3><p>Learn the basics using our pre-made study guides</p>
        </Card>
        </Col>

        <Col m={6} s={12}>
        <Card className='blue-grey darken-1 center-align' textClassName='white-text' title={<i className="medium material-icons">book</i>} actions={[<a href='#'>This is a link</a>]}><h3>Study</h3><p>Learn the basics using our pre-made study guides</p>
        </Card>
        </Col>
      </Row>
    </div>
);

export default Home; 