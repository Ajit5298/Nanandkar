import React from 'react';
import "../Components/login.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Registration = () => {
  const[UserData, setUserData] =useState({email:'',name:'',password:''});
  const route =useNavigate();

  function submit(e){
    e.preventDefault();


    var dataFromLs =JSON.parse(localStorage.getItem("UserData")) || [];
    var flag = false;

    for(var i=0; i<dataFromLs.length; i++){
      if(dataFromLs[i].email === UserData.email){
        flag =true;
      }
    }

    if(flag){
      setUserData({...UserData, email:''});
      alert("Email already Present");
    }
    else if(UserData.password.length <8){
      setUserData({...UserData, password:''})
      alert("password should be of 8 characters");
    }
    else{
      dataFromLs.push(UserData);
      localStorage.setItem("UserData",JSON.stringify(dataFromLs));
      setUserData({email:'',name:'',password:''});
      route('/login');
     alert("Signup Scucessful");
    }
  }

  function formData(e){
    var name= e.target.name;
    var value= e.target.value;

    setUserData({...UserData, [name]:value});
  }
  return (
    <><div id="bgc">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form id="loginform" onSubmit={(e) => {submit(e)}}>
        <h3>Register Here</h3>
        <label>Enter Your Name</label><br/>
        <input type="text" placeholder="Enter Your Name" id="username" name="name" onChange={(e) => {formData(e)}} value={UserData.name} required /><br />
        <label>Enter Your Email</label><br/>
        <input type="email" placeholder="Enter Your Email" id="email" name="email" onChange={(e) => {formData(e)}} value={UserData.email} required /><br />
        <label>Password</label><br/>
        <input type="password" placeholder="Enter Your Password" id="password" name="password" onChange={(e) => {formData(e)}} value={UserData.password} required /><br />
        <button id="but" type='submit' value="Register">Register</button>
        <div className="social">
          <div className="go">google</div>
          <div className="fa">facebook</div>
        </div>
      </form>
      </div>
    </>
  );
};
