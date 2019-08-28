import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';

class MyProfileIntroduce extends Component {
  render() {
    return (
      <div className="introduce">
        Nick Name : 구재서 여자친구
        <br />
        <Divider /> <br />
        Gender : Woman
        <br />
        <Divider /> <br />
        Introduce :
      </div>
    );
  }
}

export default MyProfileIntroduce;
