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
            <li><a href="">Find Us</a></li>
            <li><a href="" class="active">About Us</a>
                <ul>
                <li><a href="">Our Story</a></li>
                <li><a href="">Our Mission</a></li>
                <li><a href="">Where We Work</a></li>
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