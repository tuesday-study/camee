import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MakeGroupProfilePhoto from '../components/MakeGroupProfilePhoto';
import MakeGroupProfileIntroduce from '../components/MakeGroupProfileIntroduce';
import '../style/pages_style.css';

class MakeGroup extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="back_button left">
            <Link to="/group">
              <Button variant="contained" color="DEFAULT">
                BACK
              </Button>
            </Link>
          </div>
        </div>
        <MakeGroupProfilePhoto />
        <MakeGroupProfileIntroduce />
        <div style={{ padding: '0px 30px' }}>
          <Button
            variant="contained"
            color="secondary"
            size="Large"
            className="left"
          >
            Invitation
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="Large"
            className="right"
          >
            Complete
          </Button>
        </div>
      </div>
    );
  }
}
export default MakeGroup;
