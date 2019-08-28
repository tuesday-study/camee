import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';

const styles = {
  root: {
    minWidth: '75px !important'
  }
};

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'lookup'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="footer">
        <BottomNavigation value={this.state.value} onChange={this.handleChange}>
          <BottomNavigationAction
            classes={{
              root: classes.root
            }}
            component={Link}
            to="/"
            label="LookUp"
            value="lookup"
            icon={<SearchIcon iconsize="large" />}
          />

          <BottomNavigationAction
            classes={{
              root: classes.root
            }}
            component={Link}
            to="/approval"
            label="Approval"
            value="approval"
            icon={<FavoriteIcon />}
          />

          <BottomNavigationAction
            classes={{
              root: classes.root
            }}
            component={Link}
            to="/group"
            label="Group"
            value="group"
            icon={<GroupIcon />}
          />

          <BottomNavigationAction
            classes={{
              root: classes.root
            }}
            component={Link}
            to="/chat"
            label="Chat"
            value="chat"
            icon={<ChatIcon />}
          />

          <BottomNavigationAction
            classes={{
              root: classes.root
            }}
            component={Link}
            to="/mypage"
            label="MyPage"
            value="mypage"
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
