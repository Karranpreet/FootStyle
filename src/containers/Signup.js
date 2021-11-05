import React from "react";
import {auth , provider}  from './FirebaseSetup';
import { useHistory } from "react-router";

const Signup =()=>{
    const history = useHistory();
    const signin = async() => {
        await auth.signOut();
      await auth.signInWithPopup(provider).catch(alert);
       localStorage.setItem('token',true);
        history.replace("/home");
    }
    return(
        <>
        <div className="card text-center align-item-center">
  <div className="card-header">
    <h1>FootStyle</h1>
  </div>
  <div className="card-body my-5">
    
    <h3 className="card-text">Welcome To Our Store</h3>
   <div className="my-5">
    <button onClick={signin} type="button" className="btn btn-primary">Google Signup/Login</button>
    </div>
  </div>
  
</div>

        <div
        className=" align-items-center justify-content-center"
        
      >
         
        
        
      </div>
     
      </>
    )
}

export default Signup;