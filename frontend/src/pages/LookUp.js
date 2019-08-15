import React, { Component } from 'react';
import '../style/pages_style.css';
import Footer from '../components/Footer';

const click = 'lookup';

// axios 통해 back에서  후보 group data 가져오기

class lookup extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="lookup_button">
            <button className="btn"> L </button>
          </div>
          <div className="lookup_pic" />
          <div className="lookup_button">
            <button className="btn"> R </button>
          </div>
          <div>
            <div className="lookup_main">
              <button type="button" className="btn btn-primary">
                Add to Bucket
              </button>
            </div>
          </div>
          <div>
            <div className="lookup_main">
              <button type="button" className="btn btn-primary">
                Like
              </button>
            </div>
          </div>
        </div>
        <Footer click={click} />
      </div>
    );
  }
}
export default lookup;
