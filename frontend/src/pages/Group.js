import React, { Component } from 'react';
import MakeGroup from '../components/MakeGroup';
import '../style/pages_style.css';

// axios 통해 back에서  Group Profile data 가져오기

class Group extends Component {
  render() {
    return <MakeGroup />;
  }
}
export default Group;
