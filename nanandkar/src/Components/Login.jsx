import React from 'react';
import "../Components/login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useNavigate();

  function checkLog(e) {
    e.preventDefault();

    var dataFromLs = JSON.parse(localStorage.getItem("UserData"));

    var flag = false;
    var storeName;

    for (var i = 0; i < dataFromLs.length; i++) {
      if (
        dataFromLs[i].email === formData.email &&
        dataFromLs[i].password === formData.password
      ) {
        flag = true;
        storeName = dataFromLs[i].username;
      }
    }

    if (flag) {
      // Check if a user is already logged in
      const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
      if (currentUser) {
        alert("Another user is already logged in. Please log out first.");
        return;
      }

      localStorage.setItem(
        "CurrentUser",
        JSON.stringify({
          currentEmail: formData.email,
          currentUserName: storeName,
        })
      );

      setFormData({ email: "", password: "" });
      router('/');
      alert("Log in successful");
    } else {
      setFormData({ email: "", password: "" });
      alert("Please check email or password");
    }
  }

  function featchData(e) {
    var value = e.target.value;
    var name = e.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleLogout() {
    localStorage.removeItem("CurrentUser");
    router('/');
    alert("Logged out successfully");
  }

  // Get the username from local storage if available
  const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
  const username = currentUser ? currentUser.currentUserName : "";

  return (
    <div id="bgc">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      {username !== "" ? (
        <div>
          <h3>Welcome, {username}</h3>
          <button id="logout" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form id="loginform" onSubmit={(e) => { checkLog(e) }}>
          <h3>Login here</h3>
          <label>Enter Your Email</label><br />
          <input type="email" placeholder="Enter Your Email" id="email" name="email" onChange={(e) => { featchData(e) }} value={formData.email} required /><br />
          <label>Password</label><br />
          <input type="password" placeholder="Enter Your Password" id="password" name="password" onChange={(e) => { featchData(e) }} value={formData.password} required /><br />
          <button id="but" type='submit' value="Login">Login</button>
          <div className="social">
            <div className="go">google</div>
            <div className="fa">facebook</div>
          </div>
        </form>
      )}
    </div>
  );
};
