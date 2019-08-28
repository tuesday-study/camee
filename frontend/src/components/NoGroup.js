import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../style/pages_style.css';

// axios 통해 back에서  Group Profile data 가져오기

class NoGroup extends Component {
  render() {
    return (
      <div className="middle">
        <br />
        <br />
        <h1> You are Not</h1>
        <br />
        <h1> in Group </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4> Do You Want To Make Group? </h4>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/group/makegroup"
        >
          Make Group
        </Button>
      </div>
    );
  }
}
export default NoGroup;
