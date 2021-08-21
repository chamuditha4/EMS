import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';

function RemoveUser() {
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
          /><br></br><br></br>
          <p>You Removing User: A M D Amarasena </p>
          <p>EID: 6002</p>
          <Button variant="contained" color="primary">
          Remove User
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

  export default RemoveUser