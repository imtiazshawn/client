import React from 'react';
import '../Styles/SidebarChat.css';
import { Avatar } from '@mui/material';

const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className="sidebarChat__info">
            <h2>Room Name</h2>
            <p>This is the Last Message</p>
        </div>
    </div>
  )
}

export default SidebarChat;