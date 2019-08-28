import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MyProfilePhoto from '../components/MyProfilePhoto';
import '../style/pages_style.css';
import '../style/components_style.css';

class MyPageProfile extends Component {
  render() {
    return [
      <div className="header">
        <div className="back_button left">
          <Link to="/mypage">
            <Button variant="contained" color="DEFAULT">
              BACK
            </Button>
          </Link>
        </div>
        <div className="edit_button right">
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </div>
      </div>,
      <div>
        <MyProfilePhoto />
      </div>
    ];
  }
}

export default MyPageProfile;
