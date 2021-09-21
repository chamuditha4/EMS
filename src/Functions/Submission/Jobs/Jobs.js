import React, { useEffect, useState  } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import { getUser } from './../../../Utils/Common';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Jobs() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Description,setDescription] = useState([]);
  const [Id,setId] = useState([]);

  const getRepo = () => {
    axios.get('http://localhost:4000/tasks/get-job/' + user._id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  function onSubmit(event) {
    event.preventDefault();
    if (Id === ''){
      alert("Please Select Job!.");
    }else{
      setDescription('');
      
      
      axios.get('http://localhost:4000/tasks/get-task/' +Id)
        .then(response => {
        // console.log(JSON.stringify(response.data));
        console.log(response);
          const myRepo = response.data;
          setDescription(myRepo.description);
        });
      }
    

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>My Jobs</h2>
          <form onSubmit={onSubmit}>
          <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Select Job</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Id}
            label="Select Job"
            onChange={e => setId(e.target.value)}
            >
          <MenuItem value="Def" disabled selected="true">Select Job</MenuItem>
          { repo.map((repos) => (
            <MenuItem value={repos._id} name={repos.name} >{repos.name}</MenuItem>
          ))}
          </Select>
          </FormControl>
          <br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
          Select Job
          </Button>
          </form><br></br>
          <TextField
          disabled
          id="filled-disabled"
          label=""
          defaultValue=""
          multiline Rows={4}
          style = {{width: 350}}
          variant="filled"
          value={Description}
        />
          <br></br><br></br><br></br>
        </div>
      </div>
    )
  }


  export default Jobs