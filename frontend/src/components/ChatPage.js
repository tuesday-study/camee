import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import '../style/pages_style.css';
import '../style/components_style.css';

class ChatPage extends Component {
  render() {
    return [
      <div className="back_button">
        <Link to="/chat">
          <Button variant="contained" color="DEFAULT">
            BACK
          </Button>
        </Link>
      </div>,
      <Divider />,
      <div className="chat_page">HI</div>,
      <Divider />,
      <br />,
      <div className="input-group mb-3 chat_message">
        <input
          type="text"
          className="form-control"
          placeholder="Send Your Message"
          aria-label="Message"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append ">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            SEND
          </button>
        </div>
      </div>
    ];
  }
}

export default ChatPage;
