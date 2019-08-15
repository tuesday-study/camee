import React, { Component } from 'react';
import '../style/pages_style.css';
import Footer from '../components/Footer';

const click = 'group';

// axios 통해 back에서  Group Profile data 가져오기

class group extends Component {
  render() {
    return (
      <div>
        GroupProfile <Footer click={click} />
      </div>
    );
  }
}
export default group;
