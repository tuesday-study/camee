import React, { Component } from 'react';
import '../style/pages_style.css';
import Footer from '../components/Footer';

const click = 'approval';

// axios 통해 back에서 우리 group에 대한 bucket, like from data 가져오기

class approval extends Component {
  render() {
    return (
      <div>
        Approval
        <Footer click={click} />
      </div>
    );
  }
}
export default approval;
