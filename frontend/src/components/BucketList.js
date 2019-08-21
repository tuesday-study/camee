import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../style/components_style.css';

export default class BucketList extends Component {
  render() {
    return (
      <div className="grouplist">
        <div className="grouplist_photo middle">Photo</div>
        <div className="grouplist_introduce">
          Introduce
          <br />
          Hi
        </div>
        <div className="bucketlist_button middle">
          <Button variant="contained" color="primary">
            LIKE
          </Button>
          <br />
          <Button variant="contained" color="default">
            추천
          </Button>
        </div>
      </div>
    );
  }
}
