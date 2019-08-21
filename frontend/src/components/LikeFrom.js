import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../style/components_style.css';

export default class BucketList extends Component {
  render() {
    // server 에 axios로 Like From data 가져와서 아래와 같은 형식으로 render
    return (
      <div className="grouplist">
        <div className="grouplist_photo middle">Photo</div>
        <div className="grouplist_introduce">
          Introduce
          <br />
          Hi
        </div>
        <div className="likefrombox_button middle">
          <Button variant="contained" color="primary">
            LIKE
          </Button>
        </div>
      </div>
    );
  }
}
