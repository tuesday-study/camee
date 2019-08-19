import React, { Component } from 'react';
import LookUpFilter from '../components/LookUpFilter';
import '../style/pages_style.css';

// axios 통해 back에서  후보 group data 가져오기

class lookup extends Component {
  render() {
    return (
      <div>
        <LookUpFilter />
        <div className="lookup_button">
          <button type="button" className="btn">
            {' '}
            L{' '}
          </button>
        </div>
        <div className="lookup_pic" />
        <div className="lookup_button">
          <button type="button" className="btn">
            {' '}
            R{' '}
          </button>
        </div>

        <div className="lookup_main">
          <button type="button" className="btn btn-primary">
            Add to Bucket
          </button>
        </div>

        <div>
          <div className="lookup_main">
            <button type="button" className="btn btn-primary">
              Like
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default lookup;
