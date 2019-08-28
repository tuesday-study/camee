import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../style/pages_style.css';

// axios 통해 back에서  Group Profile data 가져오기

class MyPagePayment extends Component {
  render() {
    return (
      <div className="header">
        <div className="back_button left">
          <Link to="/mypage">
            <Button variant="contained" color="DEFAULT">
              BACK
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default MyPagePayment;
