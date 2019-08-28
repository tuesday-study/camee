// 화면 Render하는 곳, app안에서 pages들 render

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/components_style.css';
import Footer from './components/Footer';
import Approval from './pages/Approval';
import Chat from './pages/Chat';
import Group from './pages/Group';
import LookUp from './pages/LookUp';
import MyPage from './pages/MyPage';
import ChatPage from './pages/ChatPage';
import MyPageProfile from './pages/MyPageProfile';
import MyPageTermsOfService from './pages/MyPageTermsOfService';
import MyPageLogOut from './pages/MyPageLogOut';
import MyPageSignOut from './pages/MyPageSignOut';
import MyPagePayment from './pages/MyPagePayment';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Footer />
          <div className="pages">
            <div className="blank" />
            <Route exact path="/" component={LookUp} />
            <Route path="/approval" component={Approval} />
            <Route exact path="/chat" component={Chat} />
            <Route path="/group" component={Group} />
            <Route exact path="/mypage" component={MyPage} />
            <Route path="/chat/chatPage" component={ChatPage} />
            <Route path="/mypage/profile" component={MyPageProfile} />
            <Route
              path="/mypage/termsofservice"
              component={MyPageTermsOfService}
            />
            <Route path="/mypage/logout" component={MyPageLogOut} />
            <Route path="/mypage/signout" component={MyPageSignOut} />
            <Route path="/mypage/payment" component={MyPagePayment} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
