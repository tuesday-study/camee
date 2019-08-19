import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/components_style.css';

class footer extends Component {
  /* constructor(props) {
    super(props);

    this.state = {
      radioGroup: {
        lookup: true,
        approval: false,
        group: false,
        chat: false,
        mypage: false
      }
    };
  } */

  Footerbox(event) {
    const name = event.Name;
    return (
      <Link
        className="footerbox col-"
        to={name === 'LookUp' ? '/' : `/${name}`}
      >
        {name}
      </Link>
    );
  }

  render() {
    return (
      <div className="footer row">
        <this.Footerbox Name="LookUp" />
        <this.Footerbox Name="Approval" />
        <this.Footerbox Name="Group" />
        <this.Footerbox Name="Chat" />
        <this.Footerbox Name="MyPage" />
      </div>
    );
  }
}
export default footer;
