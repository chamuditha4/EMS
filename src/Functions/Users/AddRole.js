import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import  './../../styles/App.css';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

var Eids = [{"name":"No Person","_id":"404"}];
function AddRole() {
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');
  const [Role, setRole] = useState('');
  const [Department, setDepartment] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/users')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  function autoselect(){
    Eids=[];
    repo.map((repos) => ( Eids.push(repos)));
    //console.log(Eids);
  }

  function handleChange(e) {
    setId(e.target.value);
    //console.log(e.target.selectedOptions[0].getAttribute('data-id'));
    document.getElementById("removing").innerHTML = "You are Changing: " + e.target.selectedOptions[0].getAttribute('data-id');
    
  }

  function onSubmit(event) {
    event.preventDefault();
    axios.get('http://localhost:4000/users/get-user/' +Id)
        .then(response => {
        // console.log(JSON.stringify(response.data));
        console.log(response);
          const myRepo = response.data;
          setRole(myRepo.roll);
          setDepartment(myRepo.department);
        });
      
  }

  function onPut(event) {
    const task = { roll: Role, department:Department };
      axios.put('http://localhost:4000/users/update-user/'+Id, task)
      .then(response => {
        console.log(response);
      });
    

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        {autoselect()}
        <div className="prof">
          <h2>Change User Role</h2>
          <form onSubmit={onSubmit}>
          <Autocomplete
            onChange={(event, value) => setId(value._id)}
            values={Id}
            id="tags-standard"
            limitTags={1}
            size="small"
            options={Eids}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField 
                {...params}
                style={{ width: 350 }}
                variant="standard"
                label="User Name"
                placeholder="Names"
              />
            )}
          /><br></br>
          <Button variant="contained" color="primary" type="submit">
          Select User
          </Button></form><br></br><br></br>
          <form onSubmit={onPut}>
          <FormLabel component="legend">Role</FormLabel>
          <RadioGroup aria-label="role" value={Role} name="role" onChange={e => setRole(e.target.value)} >
            <FormControlLabel value="Manager" control={<Radio />} label="Manager" />
            <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
          </RadioGroup><br></br>

          <FormLabel component="legend">Department</FormLabel>
              <RadioGroup aria-label="Department" name="Department"  value={Department} onChange={e => setDepartment(e.target.value)}  >
                <FormControlLabel value="IT" control={<Radio />} label="IT" />
                <FormControlLabel value="Accounting" control={<Radio />} label="Accounting" />
                <FormControlLabel value="Management" control={<Radio />} label="Management" />
              </RadioGroup><br></br>
          <Button variant="contained" color="primary" type="submit">
          Set Role
          </Button></form><br></br><br></br>
        </div>
      </div>
    )
  }
  


  export default AddRole