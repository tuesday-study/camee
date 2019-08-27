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
      <form
        // onSubmit={this.onFormSubmit}
        className="input-group input_form"
      >
        <input
          placeholder="Send Your Message"
          className="standard"
          //  value={this.state.term}
          //  onChange={this.onInputChange}
        />
        <span className="input-group-btn input_button">
          <Button variant="contained" color="primary">
            Send
          </Button>
        </span>
      </form>
    ];
  }
}

export default ChatPage;
