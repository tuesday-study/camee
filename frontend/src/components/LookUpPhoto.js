import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import '../style/components_style.css';
import Img from '../pages/ExamplePic.jpg';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: 'beige'
  },
  gridList: {
    width: '100%',
    height: '100%'
  }
};

class LookUpPhoto extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={255} className={classes.gridList} cols={1}>
          <GridListTile cols={1}>
            <img src={Img} alt="Example" className="look_up_image" />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}
export default withStyles(styles)(LookUpPhoto);
