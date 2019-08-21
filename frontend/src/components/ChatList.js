import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/components_style.css';

export default class ChatList extends Component {
  render() {
    // server 에 axios로 Like From data 가져와서 아래와 같은 형식으로 render
    return (
      <div className="grouplist">
        <div className="grouplist_photo middle">Photo</div>
        <div className="grouplist_introduce">
          Introduce
          <br />
          Hi
        </div>
        <div className="likefrombox_button middle">
          <Link to="/Chat/ChatPage">
            <button type="button" className="btn btn-warning">
              CHAT
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
// Chat button 누르면 해당 그룹 정보, 채팅 정보 state로 넘겨서
// 화면에 보여줌
