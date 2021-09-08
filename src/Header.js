import React from 'react'
import  './styles/App.css';
import logo from './images/Blue logo-cropped.png';

function Header() {

  return (
    <div>
      <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="yy.html">Dashboard</a>
                <ul>
                <li><a href="Login.html">Mark Attendance</a></li>
                <li><a href="Login.html">Announcements</a></li>

                </ul>
            </li>
            <li><a href="Login.html">Find Us</a></li>
            <li><a href="Login.html" class="active">About Us</a>
                <ul>
                <li><a href="Login.html">Our Story</a></li>
                <li><a href="Login.html">Our Mission</a></li>
                <li><a href="Login.html">Where We Work</a></li>
                </ul>
            </li>
            <li><a href="contactUs.html">Contact Us</a></li>
            </ul>
        </nav>
        <img src={logo} id="logo" alt="Logo"></img>
    </div>
  )
}

export default Header