import React, { Component } from 'react';
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
          <button type="button" className="btn btn-warning">
            CHAT
          </button>
        </div>
      </div>
    );
  }
}
// Chat button 누르면 해당 그룹 정보, 채팅 정보 state로 넘겨서
// 화면에 보여줌
