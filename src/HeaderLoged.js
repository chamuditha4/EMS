import React from 'react'
import  './styles/App.css';
import logo from './images/Blue logo-cropped.png';
import { removeUserSession } from './Utils/Common';

function HeaderLoged(props) {

  const handleLogout = () => {
    removeUserSession();
    window.location.href = "/Login";
  }

  return (
    <div>
      <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="yy.html">Profile</a></li>
            <li><a href="Map.html">Chat</a></li>
            <li><a href="/EmpDashBoard" class="active">Actions</a></li>
            <li><a href="contactUs.html">Announcements</a></li>
            <input className="logout" type="button" onClick={handleLogout} value="Logout" />
            </ul>
        </nav>
        <img src={logo} id="logo" alt="Logo"></img>
    </div>
  )
}

export default HeaderLoged