import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Divider from '@material-ui/core/Divider';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';
import '../style/components_style.css';

const styles = {
  root: {
    padding: '0 10 0 10 !important',
    minWidth: '50px !important'
  }
};

class BucketList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="approvallist">
        <div className="approvallist_photo middle">Photo</div>
        <div className="approvallist_introduce">
          Introduce
          <br />
          Hi
        </div>
        <div className="bucketlist_button middle">
          <Button
            variant="text"
            color="primary"
            classes={{
              root: classes.root
            }}
          >
            <FavoriteIcon />
          </Button>
          <Divider />
          <Button
            variant="text"
            color="default"
            classes={{
              root: classes.root
            }}
          >
            <ThumbUpIcon />
          </Button>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(BucketList);
