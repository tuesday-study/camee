// 화면 Render하는 곳, app안에서 pages들 render

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/components_style.css';
import Footer from './components/Footer';
import RenderPages from './components/RenderPages';
import ChatPage from './components/ChatPage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Footer />
        <div className="pages">
          <BrowserRouter>
            <Route exact path="/" component={RenderPages} />
            <Route path="/ChatPage" component={ChatPage} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
