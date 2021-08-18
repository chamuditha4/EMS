import React from 'react'
import  './styles/App.css';

function Footer() {
  return (
    <div>
     <footer>

        <p className= "copy" >© 2020 BetterJobs®</p>
        <p className= "copy" >Created by BetterJobs Developer Team</p>

        <div className= "social">
        <a href="call:0778174156"><img id="lb" className="contactuslogo" src = "../images/iconfinder_phone_281830.png" width="20" height="20" /></a>
        <a href="mailto:betterjobs@outlook.com"><img id="lb" className="contactuslogo" src = "../images/iconfinder_mail_281828 (1).png" width="20" height="20"/></a>
        <a href="https://www.linkedin.com" target="_blank"><img id="lb" className="contactuslogo" src = "../images/Linkedin-Icon-Circle-Outline-Grey.png" width="20" height="20"/></a>
        <a href="https://www.youtube.com" target="_blank"><img id="lb" className="contactuslogo" src = "../images/iconfinder_youtube_281826.png" width="20" height="20"/></a>
        </div> 

        </footer>
    </div>
  )
}

export default Footer