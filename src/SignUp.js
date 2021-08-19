import React from 'react';
import  './styles/App.css';
import Header from './Header';
import Footer from './Footer';

function Signup() {
    return (
      <div>
          <Header />
          <div className="center">
            <form>
              <label for="uname">Username :</label><br></br>
              <input type="text" id="uname" name="uname" value="" required/><br></br>
              <label for="email">Email :</label><br></br>
              <input type="email" id="email" name="email" value="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required/><br></br>
              <label for="uname">Password:</label><br></br>
              <input type="password" id="password" name="password" value="" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}" title="Must contain at least one number and one uppercase and lowercase letter, and at min 5 and max 10 characters" required/><br></br>
              <label for="password">Re-type Password:</label><br></br>
              <input type="password" id="cpassword" name="cpassword" value=""  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}" required /><br></br><br></br>
              <label>Account type</label><br></br>
              <label className="container">Employee
              <input type="radio" checked="checked" name="radio" required/>
              <span className="checkmark"></span>
              </label>
              <label className="container">Job seeker
              <input type="radio" name="radio"/>
              <span className="checkmark"></span>
              </label>
              <label>Profile Picture</label><br></br>
              <div className="upload-btn-wrapper">
                  <button className="btn">Upload a file</button>
                  <input type="file" name="myfile" />
                </div><br></br><br></br>
              <input type="submit" id="butto" onclick="return Validate()"  value="Submit" />
            </form>
          </div>
          <Footer />
      </div>
    )
  }
  
  export default Signup