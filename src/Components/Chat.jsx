import React, { useState } from 'react';
import '../Styles/Chat.css';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import axios from '../axios';

const Chat = ({ messages }) => {
  // States
  const [input, setInput] = useState("");

  // Functions
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: "Jason",
      timestamp: "Just Now",
      received: false
    });

    setInput("");
  };

  return (
    <div className='chat'>
      {/* CHAT HEADER */}
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>

      {/* CHAT BODY */}
      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${message.received && "chat__receiver"}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className='chat__timestamps'>{message.timestamp}</span>
          </p>
        ))}

      </div>

      {/* CHAT FOOTER */}
      <div className='chat__footer'>
        <EmojiEmotionsOutlinedIcon />
        <form onSubmit={sendMessage}>
          <input
            placeholder='Type a message'
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            type='submit' 
            style={{display: 'none'}}
          >
            Send
          </button>
        </form>
        <IconButton>
          <MicOutlinedIcon />
        </IconButton>
      </div>
    </div>
  )
};

export default Chat;
