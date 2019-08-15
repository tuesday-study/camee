import React, { Component } from 'react';
import '../style/pages_style.css';
import Footer from '../components/Footer';

const click = 'chat';

// axios 통해 back에서  Chat data 가져오기

class chat extends Component {
  render() {
    return (
      <div>
        Chat <Footer click={click} />
      </div>
    );
  }
}
export default chat;
