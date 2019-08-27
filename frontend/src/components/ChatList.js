import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';
import '../style/components_style.css';
import '../style/pages_style.css';

export default class ChatList extends Component {
  render() {
    // server 에 axios로 Like From data 가져와서 아래와 같은 형식으로 render
    return (
      <div className="chatlist">
        <div className="chatlist_photo middle">Photo</div>
        <div className="chatlist_introduce">
          Introduce
          <br />
          Hi
        </div>
        <div className="likefrombox_button middle">
          <Link to="/chat/chatpage">
            <Button variant="text" color="primary" size="small">
              <ChatIcon />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
// Chat button 누르면 해당 그룹 정보, 채팅 정보 state로 넘겨서
// 화면에 보여줌
