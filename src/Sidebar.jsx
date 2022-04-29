import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./css/sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useStateValue } from "./StateProvider";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LogoutIcon from '@mui/icons-material/Logout';
import firebase from "firebase";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);

  const [{user}, dispatch] = useStateValue();

  // when the app render, so it gives data from database
  useEffect(() => {
    //when a data goes in DB, then onSnapshot take a snap of the data and return it
    // in DB collection name is rooms
    //firebase version 8

    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      {/* header part in sidebar */}

      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src={user.photoURL} onClick={e=>firebase.auth().signOut()} title="Sign Out" style={{cursor: 'pointer'}}/>
          <div className="sidebar__headerRight">
            
              <DonutLargeIcon className="space" />

         
              <ChatIcon className="space"/>
            

            <IconButton title="Logout" onClick={e=>firebase.auth().signOut()} className="spaceI">
               <LogoutIcon title="Logout"/>
            </IconButton>

              <MoreVertIcon />
            
          </div>
        </div>

        {/* searchbar after header part */}

        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchIcon/>
            <input type=" text" placeholder="Search new chat" />
          </div>
        </div>

        {/* chat section after search bar */}

        <div className="sidebar__Chats">
        {/* here we pass pops "addnewchat" in SidebarChat component*/}
          <SidebarChat addnewchat />  
          {/* here have multiple chats, so use a component, bcz this is reusable */}
          {
            rooms.map((room) => {
            return (
              <SidebarChat key={room.id} id={room.id} name={room.data.name} />
            );
            })        
          }
        </div>
      </div>
    </>
  );
};

export default Sidebar;
