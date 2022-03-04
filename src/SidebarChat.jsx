import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./css/sidebar.css";
import { collection, doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "./firebase.js";
 
const SidebarChat = ({ id, name, addnewchat }) => {
  const [seed, setSeed] = useState("");
  const [lastmessage, setLastmessage] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));

    db.collection("rooms").doc(id).collection("message").orderBy("timestamp", "desc").onSnapshot(snapshot=>setLastmessage(snapshot.docs.map(doc=>doc.data())) )
  }, []);

  const createChat = () => {
    //JS code
    const room = prompt("Please enter room name");

    if (room) {
      //if user give room name then eith the helpm of firebase we add this in cloud
      db.collection("rooms").add({
        name: room
      })

      //firebase v9
      // const col = doc(collection(db, "rooms"));
      // //setdoc use for set the value in your database
      // setDoc(col, {
      //   name: room,
      // });
    }
    else
      alert("Must be given the room name");
    
  };

  return (
    <>
      {/* js is used in curly braces */}
      {!addnewchat ? (
        //here we take dynamic id so use backtic, whic is pass this function by props check above
        <Link to={`/room/${id}`} className="text__color">
          <div className="sidebar__chat">
            <Avatar
              src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <div className="sidebar__chatInfo">
              <h2>{name}</h2>
              <p>{lastmessage[0]?.message}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="sidebar__chat" onClick={createChat}>
          <h2>Add New Chat</h2>
        </div>
      )}
    </>
  );
};

export default SidebarChat;
