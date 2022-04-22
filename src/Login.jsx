import React from 'react';
import wp from "./images/wp.png";
import "./css/login.css";
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';


const Login = () => {

  const [{},dispatch] = useStateValue();
  const GooglesignIn = ()=>{
    auth.signInWithPopup(provider).then(result=>{
      dispatch({
        type: "SET_USER",
        user: result.user
      })
    }).catch(error=>alert(error))
  }



  return (
    <>
      <div className="login__wrapper">   
        <div className="login">
            <img src={wp} alt="" />
            <h2>Sign in to WhatsApp</h2>
            <button onClick={GooglesignIn}>Login with Gmail</button>
        </div> 
      </div>
    </>
  )
}

export default Login;