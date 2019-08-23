import React, { Component } from 'react';
import { connect } from 'react-redux';
import Approval from '../pages/Approval';
import Chat from '../pages/Chat';
import Group from '../pages/Group';
import LookUp from '../pages/LookUp';
import MyPage from '../pages/MyPage';

class RenderPages extends Component {
  render() {
    if (this.props.footer === 'Lookup') return <LookUp />;
    if (this.props.footer === 'Approval') return <Approval />;
    if (this.props.footer === 'MyPage') return <MyPage />;
    if (this.props.footer === 'Chat') return <Chat />;
    if (this.props.footer === 'Group') return <Group />;
  }
}
function mapStateToProps({ footer }) {
  return { footer };
}

export default connect(mapStateToProps)(RenderPages);
