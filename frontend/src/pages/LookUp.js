import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import LookUpFilter from '../components/LookUpFilter';
import LookUpPhoto from '../components/LookUpPhoto';
import '../style/pages_style.css';
// axios 통해 back에서  후보 group data 가져오기

const styles = {
  root: {
    padding: '0 0 0 0 !important',
    minWidth: '50px !important'
  }
};

class LookUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <LookUpFilter />
        <div className="lookup_button">
          <Button
            variant="text"
            color="primary"
            size="small"
            classes={{
              root: classes.root
            }}
          >
            L
          </Button>
        </div>
        <div className="lookup_pic">
          <LookUpPhoto />
        </div>
        <div className="lookup_button">
          <Button
            variant="text"
            color="primary"
            size="small"
            classes={{
              root: classes.root
            }}
          >
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
export default withStyles(styles)(LookUp);
