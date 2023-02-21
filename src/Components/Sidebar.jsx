import React from 'react';
import '../Styles/Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className='sidebar'>

      {/* SIDEBAR HEADER */}
        <div className="sidebar__header">
          <Avatar src='https://media.licdn.com/dms/image/D5603AQHh4l8K3B1pxg/profile-displayphoto-shrink_800_800/0/1675318334607?e=2147483647&v=beta&t=oDp50nnEjNyaobAkQ7Qy4l5dEqF1Xx0FKgtQOt4aOXo'/>
          <div className="sidebar__headerRight">
            <IconButton style={{marginRight: '2vw', fontSize: '24px'}}> 
              <DonutLargeIcon />
            </IconButton>
            <IconButton style={{marginRight: '2vw', fontSize: '24px'}} >
              <ChatIcon />
            </IconButton>
            <IconButton style={{marginRight: '2vw', fontSize: '24px'}} >
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

      {/* SIDEBAR SEARCH */}
        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlinedIcon style={{color: 'grey', padding: '10px'}} />
            <input type="text" placeholder='Search or start new chat' />
          </div>
        </div>

      {/* SIDEBAR CHATS */}
        <div className="sidebar__chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar;