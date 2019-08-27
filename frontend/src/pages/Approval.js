import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LikeFrom from '../components/LikeFrom';
import BucketList from '../components/BucketList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

export default class FullWidthTabs extends Component {
  useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'beige',
      width: 375
    }
  }));

  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div className={this.useStyles.root}>
        <AppBar position="static">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="LikeFrom" {...a11yProps(0)} />
            <Tab label="Bucket" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          <LikeFrom />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <BucketList />
        </TabPanel>
      </div>
    );
  }
}
