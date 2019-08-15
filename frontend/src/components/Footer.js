import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/components_style.css';

class footer extends Component {
  render() {
    console.log(this.props.click);
    switch (this.props.click) {
      case 'lookup':
        return [
          <div key="foot" className="footerbox">
            <Link key={1} className="menu_lookup" link to="/">
              LookUp
            </Link>
            <Link key={2} className="menu" link to="/approval">
              Approval
            </Link>
            <Link key={3} className="menu" link to="/group">
              Group
            </Link>
            <Link key={4} className="menu" link to="/chat">
              Chat
            </Link>
            <Link key={5} className="menu" link to="/mypage">
              MyPage
            </Link>
          </div>
        ];
      case 'approval':
        return [
          <div key="foot" className="footerbox">
            <Link key={1} className="menu" link to="/">
              LookUp
            </Link>
            <Link key={2} className="menu_approval" link to="/approval">
              Approval
            </Link>
            <Link key={3} className="menu" link to="/group">
              Group
            </Link>
            <Link key={4} className="menu" link to="/chat">
              Chat
            </Link>
            <Link key={5} className="menu" link to="/mypage">
              MyPage
            </Link>
          </div>
        ];
      case 'group':
        return [
          <div key="foot" className="footerbox">
            <Link key={1} className="menu" link to="/">
              LookUp
            </Link>
            <Link key={2} className="menu" link to="/approval">
              Approval
            </Link>
            <Link key={3} className="menu_group" link to="/group">
              Group
            </Link>
            <Link key={4} className="menu" link to="/chat">
              Chat
            </Link>
            <Link key={5} className="menu" link to="/mypage">
              MyPage
            </Link>
          </div>
        ];
      case 'chat':
        return [
          <div key="foot" className="footerbox">
            <Link key={1} className="menu" link to="/">
              LookUp
            </Link>
            <Link key={2} className="menu" link to="/approval">
              Approval
            </Link>
            <Link key={3} className="menu" link to="/group">
              Group
            </Link>
            <Link key={4} className="menu_chat" link to="/chat">
              Chat
            </Link>
            <Link key={5} className="menu" link to="/mypage">
              MyPage
            </Link>
          </div>
        ];
      case 'mypage':
        return [
          <div key="foot" className="footerbox">
            <Link key={1} className="menu" link to="/">
              LookUp
            </Link>
            <Link key={2} className="menu" link to="/approval">
              Approval
            </Link>
            <Link key={3} className="menu" link to="/group">
              Group
            </Link>
            <Link key={4} className="menu" link to="/chat">
              Chat
            </Link>
            <Link key={5} className="menu_mypage" link to="/mypage">
              MyPage
            </Link>
          </div>
        ];
      default:
        return [
          <div key="foot" className="footerbox">
            <Link key={1} className="menu_lookup" link to="/">
              LookUp
            </Link>
            <Link key={2} className="menu" link to="/approval">
              Approval
            </Link>
            <Link key={3} className="menu" link to="/group">
              Group
            </Link>
            <Link key={4} className="menu" link to="/chat">
              Chat
            </Link>
            <Link key={5} className="menu" link to="/mypage">
              MyPage
            </Link>
          </div>
        ];
    }
  }
}
export default footer;
