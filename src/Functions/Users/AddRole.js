import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import  './../../styles/App.css';

function AddRole() {
    return (
      <div>
        <div className="prof">
          <h2>Remove User</h2>
          <Autocomplete
            id="combo-box-demo"
            options={Users}
            getOptionLabel={(option) => option.title}
            style={{ width: 350 }}
            renderInput={(params) => <TextField {...params} label="Select User" variant="outlined" />}
          />
          <p>You Selected User: A M D Amarasena </p>
          <p>EID: 6002</p>
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