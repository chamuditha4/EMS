import React, { useEffect, useState  } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import  './../../styles/App.css';
import { getUser } from './../../Utils/Common';
import axios from 'axios';

function AddRole() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/users')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  function handleChange(e) {
    setId(e.target.value);
    //console.log(e.target.selectedOptions[0].getAttribute('data-id'));
    document.getElementById("removing").innerHTML = "You are Changing: " + e.target.selectedOptions[0].getAttribute('data-id');
    
  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Change User Role</h2>
          <select  onChange={handleChange}>
          <option value="Def" disabled selected="true">Select User</option>
          { repo.map((repos) => (
            <option value={repos._id} data-id={repos.name} >{repos.name}</option>
          ))}
          </select>
          <p id="removing"></p>

          <FormLabel component="legend">Role</FormLabel>
          <RadioGroup aria-label="role" name="role">
            <FormControlLabel value="Manager" control={<Radio />} label="Manager" />
            <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
          </RadioGroup><br></br>
          <FormLabel component="legend">Department</FormLabel>
          <RadioGroup aria-label="dept" name="dept">
            <FormControlLabel value="IT" control={<Radio />} label="IT" />
            <FormControlLabel value="Accounting" control={<Radio />} label="Accounting" />
            <FormControlLabel value="Management" control={<Radio />} label="Management" />
          </RadioGroup><br></br>
          <Button variant="contained" color="primary">
          Set Role
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  const Users = [
    { title: 'A M D Amarasena', eid: 3002 },
    { title: 'A M D Amarasena', eid: 6002 },
    { title: 'A M D Amarasena', eid: 9005 },
  ]

  export default AddRole