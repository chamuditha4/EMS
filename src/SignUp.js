import  './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import React, {Component} from "react";
import axios from 'axios';


export default class Signup extends Component{
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangename = this.onChangename.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRePassword = this.onChangeRePassword.bind(this);
    this.onChangeAccountType = this.onChangeAccountType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name:'',
      username: '',
      email:'',
      password:'',
      repassword:'',
      accounttype:''
    }
  }

  onChangename(e) {
    this.setState({name: e.target.value})
  }

  onChangeUsername(e) {
    this.setState({username: e.target.value})
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangePassword(e) {
    this.setState({password: e.target.value})
  }

  onChangeRePassword(e) {
    this.setState({repassword: e.target.value})
  }

  onChangeAccountType(e) {
    this.setState({accounttype: e.target.value})
  }


  onSubmit(e) {
    e.preventDefault()

    const UserOBJ = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      salary: '0',
      roll: this.state.accounttype
    };
    axios.post('http://localhost:4000/users/create-user', UserOBJ)
      .then(res => console.log(res.data));


    this.setState({ name: '', username: '', email: '', password: '', repassword: '', accounttype: ''})
    window.location.href = "/Login";

  }




  render() {
    return (
      <div>
          <Header />
          <div className="center">
            <form onSubmit={this.onSubmit}>
            <label for="uname">Username :</label><br></br>
              <input type="text" id="uname" name="uname"  value={this.state.name} onChange={this.onChangename} required /><br></br>
              <label for="uname">Username :</label><br></br>
              <input type="text" id="uname" name="uname"  value={this.state.username} onChange={this.onChangeUsername} required /><br></br>
              <label for="email">Email :</label><br></br>
              <input type="email" id="email" name="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"   value={this.state.email} onChange={this.onChangeEmail}   /><br></br>
              <label for="uname">Password:</label><br></br>
              <input type="password" id="password" name="password"   value={this.state.password} onChange={this.onChangePassword} /><br></br>
              <label for="password">Re-type Password:</label><br></br>
              <input type="password" id="cpassword" name="cpassword"    value={this.state.repassword} onChange={this.onChangeRePassword}  /><br></br><br></br>
              <label>Account type</label><br></br>
              <label className="container">Manager
              <input type="radio" checked="checked" name="radio" value="Manager" checked={this.state.accounttype === "Manager"} onChange={this.onChangeAccountType}/>
              <span className="checkmark"></span>
              </label>
              <label className="container">Employee
              <input type="radio" name="radio"   value="Employee" checked={this.state.accounttype === "Employee"} onChange={this.onChangeAccountType}/>
              <span className="checkmark"></span>
              </label><br></br><br></br>

              <input type="submit" id="butto"  value="Submit" />
            </form>
          </div>
          <Footer />
      </div>
    );
  }
}
