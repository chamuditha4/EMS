import  './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import React, {Component} from "react";
import axios from 'axios';


export default class Login extends Component{
    
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`http://localhost:4000/users`,{
            params: {
                username: 'Barbara'
              }
        })
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
  
    render() {
      return (
        <div>
            <Header />
            
            <div className="center">
            <ul>
                { this.state.persons.map(person => <li>{person.email}</li>)}
            </ul>
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
      );
    }
  }
