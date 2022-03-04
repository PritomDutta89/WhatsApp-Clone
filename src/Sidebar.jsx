import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
// import {Avatar} from '@mui/icons-material';
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./css/sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);

  const [{user}, dispatch] = useStateValue();

  // when the app render, so it gives data from database
  useEffect(() => {
    //when a data goes in DB, then onSnapshot take a snap of the data and return it

    //firebase version 8

    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    // firebase v9
    //   const colref = collection(db, 'rooms');
    //  //getDocs use for fetch the firebase data
    //   getDocs(colref)
    //   .then((snapshot)=>{

    //     setRooms(snapshot.docs.map(doc=>({
    //       id: doc.id,
    //       data: doc.data()
    //     }))
    //     )
    //   })
    //   .catch(err=>{
    //     console.log(err.message)
    //   })
  }, []);

  return (
    <>
      {/* header part in sidebar */}

      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src={user.photoURL} onClick={e=>firebase.auth().signOut()} />
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>

            <IconButton>
              <ChatIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        {/* searchbar after header part */}

        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchIcon />
            <input type=" text" placeholder="Search or Start a new chat" />
          </div>
        </div>

        {/* chat section after search bar */}

        <div className="sidebar__Chats">
          {/* here have multiple chats, so use a component, bcz this is reusable */}
          <SidebarChat addnewchat />
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
