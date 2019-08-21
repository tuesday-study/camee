import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class ChatPage extends Component {
  render() {
    return [
      <div>
        <Link to="/Chat">
          <Button variant="contained" color="DEFAULT">
            BACK
          </Button>
        </Link>
      </div>,
      <br />,
      <div>HI</div>
    ];
  }
}

export default ChatPage;
