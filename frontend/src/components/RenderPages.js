import React, { Component } from 'react';
import { connect } from 'react-redux';
import Approval from '../pages/Approval';
import Chat from '../pages/Chat';
import Group from '../pages/Group';
import LookUp from '../pages/LookUp';
import MyPage from '../pages/MyPage';

class RenderPages extends Component {
  render() {
    switch (this.props.ActivePage) {
      case 'LookUp':
        return <LookUp />;
      case 'Approval':
        return <Approval />;
      case 'MyPage':
        return <MyPage />;
      case 'Chat':
        return <Chat />;
      case 'Group':
        return <Group />;
      default:
        return <LookUp />;
    }
  }
}
function mapStateToProps({ ActivePage }) {
  return { ActivePage };
}

export default connect(mapStateToProps)(RenderPages);
