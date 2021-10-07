import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  './../../styles/App.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { getUser } from './../../Utils/Common';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function EditAnnouncement() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Department,setDepartment] = useState('');
  const [Id, setId] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/Announcement/' + user._id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  function onSubmit(event) {
    event.preventDefault();
    if (Id === ''){
      alert("Please Select Task!.");
    }else{
      setDescription('');
      setTitle('');
      
      
      axios.get('http://localhost:4000/Announcement/get-announcement/' +Id)
        .then(response => {
        // console.log(JSON.stringify(response.data));
        console.log(response);
          const myRepo = response.data;
          setDescription(myRepo.description);
          setTitle(myRepo.name);
          setDepartment(myRepo.department)
        });
      }
    

  }

  function onPut(event) {
    event.preventDefault();
    if (Title === null || Description === null || Department === null){
      alert('Please Fill Everything!.');
    }else{
      console.log(Title);
      const task = { name: Title,description: Description,department:Department };
      axios.put('http://localhost:4000/Announcement/update-announcement/'+Id, task)
          .then(response => {
            console.log(response);
          });
    }

  }
  
  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Edit Announcement</h2>
          <form onSubmit={onSubmit}>
          <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Select Announcement</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Id}
            label="Select Announcement"
            onChange={e => setId(e.target.value)}
            >
          <MenuItem value="Def" disabled selected="true">Select Announcement</MenuItem>
          { repo.map((repos) => (
            <MenuItem value={repos._id} name={repos.name} >{repos.name}</MenuItem>
          ))}
          </Select>
          </FormControl>
          <br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
          Select Announcement
          </Button>
          </form><br></br><br></br>
          <form onSubmit={onPut}>
          <TextField id="standard-uncontrolled" label="Title" defaultValue="" value={Title} onChange={e => setTitle(e.target.value)} /><br></br><br></br>
          <FormLabel component="legend">Department</FormLabel>
              <RadioGroup aria-label="Department" name="Department"  value={Department} onChange={e => setDepartment(e.target.value)}  >
                <FormControlLabel value="IT" control={<Radio />} label="IT" />
                <FormControlLabel value="Accounting" control={<Radio />} label="Accounting" />
                <FormControlLabel value="Management" control={<Radio />} label="Management" />
              </RadioGroup><br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="Announcement" multiline Rows={4} variant="outlined" value={Description} style = {{width: 350}} defaultValue="" onChange={e => setDescription(e.target.value)}/><br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
            Update Announcement
          </Button></form><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default EditAnnouncement