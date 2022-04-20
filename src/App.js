import React, { useEffect } from "react";
import "./css/App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{user},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      dispatch({
        type: "SET_USER",
        user: user
      })  
    })
  }, []);
  
   

  return (
    <>
      <Router>
        <Switch>
        {/* if user is not there then call login pqge otherwise call home page */}
        {!user ? (<Login/>) : (
          <div className="App">
            <div className="app__body">
              {/* sidebar */}
              <Sidebar />
              {/* chat */}
              <Route exact path="/">
                 <Chat />
              </Route>
              
              {/* when we need to pass any dynamic value then write this way /:roomId */}
              <Route path="/room/:roomId">
                 <Chat />
              </Route>
              
            </div>
          </div>
        )}
         
        </Switch>
      </Router>
    </>
  );
}

export default App;
