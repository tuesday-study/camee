// 화면 Render하는 곳, app안에서 pages들 render

import React, { Component } from 'react';
import './style/components_style.css';
import Footer from './components/Footer';
import RenderPages from './components/RenderPages';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Footer />
        <div className="pages">
          <RenderPages />
        </div>
      </div>
    );
  }
}
