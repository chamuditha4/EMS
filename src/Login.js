import React from 'react';
import  './styles/App.css';
import Header from './Header';
import Footer from './Footer';

function Login() {
    return (
      <div>
          <Header />

          <div className="center">
                <form>
                    <p>Username:</p>
                    <input type="text" id="uname" name="uname" value="" required/><br></br>
                    <p>Password:</p>
                    <input type="password" id="pwd" name="pwd" value="" required/><br></br><br></br>
                    <label>Account type</label><br></br><br></br>
                    <label className="container">Employee
                        <input type="radio" id = "Employeerad"  name="radio" required/>
                        <span className="checkmark"></span>
                    </label><br></br>
                    <label className="container">Job seeker
                        <input type="radio" name="radio" id="Jobseekerrad" required/>
                        <span className="checkmark"></span>
                    </label><br></br>
                    <input id = "Signin" type="submit" value="Submit"/>
                </form>
            </div>

          <Footer />
      </div>
    )
  }
  
  export default Login