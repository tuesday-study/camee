import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import '../style/components_style.css';
import Img1 from './girlfriend_1.jpeg';
import Img2 from './girlfriend_2.jpeg';
import Img3 from './girlfriend_3.jpg';
import Img4 from './girlfriend_4.jpg';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'beige'
  },
  gridList: {
    width: 320,
    height: 320
  }
};

class MyProfilePhoto extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={156} className={classes.gridList} cols={2}>
          <GridListTile cols={1}>
            <img src={Img1} alt="girlfriend1" className="represent_image" />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={Img2} alt="girlfriend2" />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={Img3} alt="girlfriend3" />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={Img4} alt="girlfriend4" />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}
export default withStyles(styles)(MyProfilePhoto);
