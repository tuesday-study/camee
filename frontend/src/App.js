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
import ChatPage from './components/ChatPage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Footer />
          <div className="pages">
            <Route exact path="/" component={LookUp} />
            <Route path="/approval" component={Approval} />
            <Route exact path="/chat" component={Chat} />
            <Route path="/group" component={Group} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/Chat/ChatPage" component={ChatPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
