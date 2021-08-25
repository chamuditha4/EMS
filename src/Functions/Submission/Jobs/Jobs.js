import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';

function Jobs() {
    return (
      <div>
        <div className="prof">
          <h2>My Jobs</h2>
          <Autocomplete
            id="combo-box-demo"
            options={Users}
            getOptionLabel={(option) => option.title}
            style={{ width: 350 }}
            renderInput={(params) => <TextField {...params} label="Select Job" variant="outlined" />}
          /><br></br><br></br>
           <Button variant="contained" color="primary">
          Select the Job
          </Button><br></br><br></br>
          <p>Do this Job</p>
        </div>
      </div>
    )
  }
  
  const Users = [
    { title: 'Web Design [920]', eid: 3002 },
    { title: 'A M D Amarasena', eid: 6002 },
    { title: 'A M D Amarasena', eid: 9005 },
  ]

  export default Jobs