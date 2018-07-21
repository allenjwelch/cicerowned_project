import React, {Component} from "react"; 
import {Footer, Modal, Input, Button} from 'react-materialize';
import * as emailjs from 'emailjs-com';

class FooterComp extends Component {
  
  handleSend = event => {
    event.preventDefault();
    emailjs.sendForm('gmail', 'cicerowned_contact', this.form, 'user_11WHsfD7vGZzuQnVR4wbU')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   }); 
    alert("Thank you for your message!");
    
  };

  render() {
    return (

      <Footer 
        copyrights="2018 Copyright | Created by Allen Welch, Eddie Rodriguez + Susan Davenport"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="https://github.com/allenjwelch/cicerowned_project" target="_blank">GitHub</a>
        }
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="/user/study">Study</a></li>
            <li><a className="grey-text text-lighten-3" href="/user/create!">Create</a></li>
            <li><a className="grey-text text-lighten-3" href="/user/chat">Chat</a></li>
            <li><a className="grey-text text-lighten-3" href="/user">User Dashboard</a></li>
          </ul>
        }
        className='page-footer amber darken-2'>
        
        <h5 className="white-text">Contact Us</h5>
        {/* <p className="grey-text text-lighten-4">Are you interested in using Cicerowned at your bar or brewery? Let's talk!</p> */}

        <Modal style={{"text-align":"center"}}
          header='We want to hear from you!'
          trigger={<p className="grey-text text-lighten-4" style={{"cursor":"pointer"}}>Are you interested in using Cicerowned at your bar, restaurant, or brewery? Let's talk!</p>}>
          <form ref={(form) => { this.form = form; }}>
            <Input 
              s={12} 
              label="Name" 
              name="name" 
            />
            <Input 
              s={12} 
              label="Email" 
              name="email" 
            />
            <Input 
              s={12}
              type="textarea" 
              label="Message" 
              name="message" 
            />
          </form>
            <Button 
              className="customCardBtns saveCreateNew teal darken-1" 
              onClick={this.handleSend}>
                Send!
            </Button>
        </Modal>

    </Footer>

    );
  };
};  

export default FooterComp; 