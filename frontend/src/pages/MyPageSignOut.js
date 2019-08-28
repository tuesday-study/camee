import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../style/pages_style.css';

// axios 통해 back에서  Group Profile data 가져오기

class MyPageSignOut extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="back_button left">
            <Link to="/mypage">
              <Button variant="contained" color="DEFAULT">
                BACK
              </Button>
            </Link>
          </div>
        </div>

        <div className="middle">
          <br />
          <br />
          <h1> Do You Want To</h1>
          <br />
          <h1> Sign Out? </h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Button variant="contained" color="secondary" size="large">
            Sign Out
          </Button>
        </div>
      </div>
    );
  }
}
export default MyPageSignOut;
