import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';

class MyProfileIntroduce extends Component {
  render() {
    return (
      <div className="introduce">
        <h5>Nick Name</h5> Haley
        <br />
        <Divider /> <br />
        <h5>Gender</h5>Woman
        <br />
        <Divider /> <br />
        <h5>About</h5>Jayden Park I Love U :) Marry Me
      </div>
    );
  }
}

export default MyProfileIntroduce;
