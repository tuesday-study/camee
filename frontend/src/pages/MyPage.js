import React, { Component } from 'react';
import '../style/pages_style.css';
import Footer from '../components/Footer';

const click = 'mypage';

// axios 통해 back에서 my profile data 가져오기

class mypage extends Component {
  render() {
    return (
      <div>
        MyPage <Footer click={click} />
      </div>
    );
  }
}
export default mypage;
