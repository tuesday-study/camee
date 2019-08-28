import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import '../style/components_style.css';
import Img1 from './girlfriend_1.jpeg';
import BlankImg from './blank.jpg';

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

class MakeGroupProfilePhoto extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={156} className={classes.gridList} cols={2}>
          <GridListTile cols={1}>
            <img src={Img1} alt="girlfriend1" className="represent_image" />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={BlankImg} alt="girlfriend1" />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={BlankImg} alt="girlfriend1" />
          </GridListTile>
          <GridListTile cols={1}>
            <img src={BlankImg} alt="girlfriend1" />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}
export default withStyles(styles)(MakeGroupProfilePhoto);
