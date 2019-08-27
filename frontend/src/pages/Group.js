import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MakeGroup from '../components/MakeGroup';
import '../style/pages_style.css';

// axios 통해 back에서  Group Profile data 가져오기

class group extends Component {
  render() {
    return <MakeGroup />;
  }
}
export default group;
