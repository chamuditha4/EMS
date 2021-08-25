import React from 'react'
import  './styles/App.css';
import logo from './images/Blue logo-cropped.png';
import { getUser, removeUserSession } from './Utils/Common';

function HeaderLoged(props) {
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    window.location.href = "/Login";
  }

  return (
    <div>
      <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="yy.html">Job Portal</a>
                <ul>
                <li><a href="Login.html">Explore Jobs</a></li>
                <li><a href="Login.html">Add Jobs</a></li>

                </ul>
            </li>
            <li><a href="Map.html">Find Us</a></li>
            <li><a href="about us.html" class="active">About Us</a>
                <ul>
                <li><a href="about%20us.html#aboutsec">Our Story</a></li>
                <li><a href="about%20us.html#missionpa">Our Mission</a></li>
                <li><a href="about%20us.html#wherewebac">Where We Work</a></li>
                </ul>
            </li>
            <li><a href="contactUs.html">Contact Us</a></li>
            <input className="logout" type="button" onClick={handleLogout} value="Logout" />
            </ul>
        </nav>
        <img src={logo} id="logo" alt="Logo"></img>
    </div>
  )
}

export default HeaderLoged