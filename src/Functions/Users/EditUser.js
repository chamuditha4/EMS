import React, { useEffect, useState  } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';
import axios from 'axios';
var users = [];

function EditUser() {
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/users')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  function autoselect(){
    users=[];
    repo.map((repos) => ( users.push(repos)));
    console.log(users);
  }

  function handleChange(e) {
    setId(e.target.value);
    console.log(e.target.selectedOptions[0].getAttribute('data-id'));
    document.getElementById("editing").innerHTML = "You are Editing: " + e.target.selectedOptions[0].getAttribute('data-id');
    
  }

  function onSubmit(event) {
    event.preventDefault();
    axios.get('http://localhost:4000/users/get-user/' +Id)
        .then(response => {
        // console.log(JSON.stringify(response.data));
        console.log(response);
          const myRepo = response.data;
          setName(myRepo.name);
          setEmail(myRepo.email);
          setPassword('');
        });
      }

  function onPut(event) {
    event.preventDefault();
    if (Password == ''){
      const task = { name: Name,email: Email };
      axios.put('http://localhost:4000/users/update-user/'+Id, task)
      .then(response => {
        console.log(response);
      });
    }else{
      const task = { name: Name,email: Email, password:Password };
      axios.put('http://localhost:4000/users/update-user/'+Id, task)
      .then(response => {
        console.log(response);
      });
    }
    

  }

  useEffect(() => getRepo(),[]);

    return (
      <div>
        {autoselect()}
        <div className="prof">
          <h2>Edit User</h2>
          <form onSubmit={onSubmit}>
          <select  onChange={handleChange}>
          <option value="Def" disabled selected="true">Select User</option>
          { repo.map((repos) => (
            <option value={repos._id} data-id={repos.name} >{repos.name}</option>
          ))}
          </select>
          <br></br><br></br>
          <p id="editing"></p>
          <Button variant="contained" color="primary" type="submit">
          Select User
          </Button>
          </form><br></br>
          <form onSubmit={onPut}>
          <TextField id="standard-uncontrolled" label="Name"  value={Name} onChange={e => setName(e.target.value)} /><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Email"  value={Email} onChange={e => setEmail(e.target.value)} /><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Password"  value={Password} onChange={e => setPassword(e.target.value)} />
          <h6>Please Leave a blank, if you are not changing password!.</h6>
          <Button variant="contained" color="primary"  type="submit">
          Edit User
          </Button>
          </form><br></br><br></br>
        </div>
      </div>
    )
  }
  

  export default EditUser