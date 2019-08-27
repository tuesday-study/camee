import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LookUpFilter from '../components/LookUpFilter';
import '../style/pages_style.css';

// axios 통해 back에서  후보 group data 가져오기

class lookup extends Component {
  render() {
    return (
      <div>
        <LookUpFilter />
        <div className="lookup_button">
          <Button variant="text" color="primary" size="small">
            L
          </Button>
        </div>
        <div className="lookup_pic" />
        <div className="lookup_button">
          <Button variant="text" color="primary" size="small">
            R
          </Button>
        </div>

        <div className="lookup_main">
          <Button variant="contained" color="primary" size="large">
            Add to Bucket
          </Button>
        </div>
      </div>
    );
  }
}
export default lookup;
