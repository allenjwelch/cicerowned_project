import React, { Component } from "react";
import { Modal, Row, Col, Input, Button, Collection, CollectionItem } from 'react-materialize';
// import API from "../../utils/API"; 
import './ChatRoom.css'; 
// import {subscribeToTimer} from "../../chat.js";
import io from 'socket.io-client'; 
const socket = io.connect();


class ChatRoom extends Component {
  constructor(props) {
    super(props);
    // subscribeToTimer((err, timestamp) => this.setState({ 
    //   timestamp 
    // }));
  }

  state = {
    user: this.props, 
    userTag: '',
    // timestamp: 'no timestamp yet',
    chatInput: '',
    chatHistory: [],
  };
  
  componentDidMount() {
    this.registerHandler(this.onMessageReceived)
  }

  componentDidUpdate() {
  }

  registerHandler(onMessageReceived) {
    console.log('in registerHandler')
    socket.on('chat message', onMessageReceived)
  }

  onMessageReceived = (entry) => {
    console.log('onMessageReceived:', entry);
    let chatLog = []; 
    chatLog.push(...this.state.chatHistory); 
    chatLog.push(entry);
    this.setState({ chatHistory: chatLog });
    this.scrollChatToBottom()

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  scrollChatToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  sendChat = event => {
    event.preventDefault();
    // const socket = io();
    socket.emit('chat message', this.state.userTag + ': ' + this.state.chatInput);

    // socket.on("connect", () => {
    //   console.log('socket established'); 
    //   socket.emit('chat message', 'chatInput test');
    //   return false; 
    // });
    // const socket = socketIOClient(this.state.endpoint);
    // socket.emit('chat message', this.state.chatInput);
    console.log('sending chat: ', this.state.chatInput); 
    console.log('user: ', this.state.user); 
    this.setState({ chatInput: '' }); 

  }
 
  render() {
    return (
      <div>
        {
          this.state.chatHistory.length ? (

           <Collection className='chatBox'>
            {this.state.chatHistory.map(chats => (
              <CollectionItem key={chats}>
                {chats}
              </CollectionItem>
            ))}
            <div style={{ float:"left", clear: "both" }}
              ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </Collection>
          ) : (
            <div>
              <h3 className="noChats">Join the conversation!</h3>
              <Modal
                header='Choose your User Tag'
                trigger={<Button className="tag">Choose your tag name</Button>}>
                  <Input 
                  s={12} 
                  label="User Tag" 
                  name="userTag" 
                  value={this.state.userTag}
                  onChange={this.handleInputChange} />
              </Modal>
            </div>
          )
        }
        
        {
          this.state.userTag.length ? (

            <Row>
              <Col s={12} m={12} l={12} xl={12} className='inputCol'>
                <form className='chatForm'>
                  <Input className="chatline"
                    s={9} 
                    m={10} 
                    l={11} 
                    xl={11}
                    // label="Chat Input" 
                    placeholder="Group Chat" 
                    name="chatInput" 
                    value={this.state.chatInput}
                    onChange={this.handleInputChange}
                  />
                  {/* <input autocomplete="off" /> */}
                  <Button className="chatBtn"
                    s={2} 
                    m={2} 
                    l={1} 
                    xl={1}
                    onClick={this.sendChat}>
                    Send
                  </Button>
                </form>
              </Col>
            </Row>
          ) : (
            <h4 className="noChats">Choose your user tag name and start chatting. Cheers!</h4>
          )
        }
      </div>
    )
  }




}; 

export default ChatRoom; 