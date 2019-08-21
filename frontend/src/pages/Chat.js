import React, { Component } from 'react';
import ChatList from '../components/ChatList';
import '../style/pages_style.css';

// axios 통해 back에서  Chat data 가져오기

class chat extends Component {
  render() {
    return [
      <div className="middle">
        <font size="5" color="brown">
          - Your Chat List -
        </font>
      </div>,
      <ChatList />
    ];
  }
}
export default chat;
