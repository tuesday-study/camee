import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { footerrender } from '../actions/index';

class Footer extends Component {
  useStyles = makeStyles({
    root: {
      width: 375,
      height: 70,
      bottom: 0
    }
  });

  constructor(props) {
    super(props);

    this.state = {
      value: 'Lookup'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // classes = useStyles();

  handleChange(event, newValue) {
    this.setState({ value: newValue });
    this.props.footerrender(newValue);
  }

  render() {
    return (
      <div className="footer">
        <BottomNavigation
          value={this.state.value}
          onChange={this.handleChange}
          className={this.useStyles.root}
        >
          <BottomNavigationAction
            label="Lookup"
            value="Lookup"
            icon={<SearchIcon />}
          />

          <BottomNavigationAction
            label="Approval"
            value="Approval"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Group"
            value="Group"
            icon={<GroupIcon />}
          />
          <BottomNavigationAction
            label="Chat"
            value="Chat"
            icon={<ChatIcon />}
          />
          <BottomNavigationAction
            label="MyPage"
            value="MyPage"
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ footerrender }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Footer);
