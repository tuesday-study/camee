import React, { Component } from 'react';
import ChatList from '../components/ChatList';
import '../style/pages_style.css';
import '../style/components_style.css';

// axios 통해 back에서  Chat data 가져오기

class Chat extends Component {
  render() {
    return [
      <div className="middle chat_list">
        <font size="5" color="black">
          - Your Chat List -
        </font>
      </div>,
      <ChatList />
    ];
  }
}
export default Chat;
