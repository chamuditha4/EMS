import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';
import axios from 'axios';
import { getUser } from './../../Utils/Common';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function RemoveAnnouncement() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/Announcement/' + user._id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };



  async function onRemove(event) {
    event.preventDefault();
    await axios.delete('http://localhost:4000/Announcement/delete-announcement/'+Id)
        .then(response => {
          console.log(response);
        });
    getRepo();

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Remove Announcement</h2>
          <form onSubmit={onRemove}>
          <FormControl fullWidth>
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
            <MenuItem value={repos._id} data-id={repos.name} >{repos.name}</MenuItem>
          ))}
          </Select>
          </FormControl>
          <br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
          Remove Announcement
          </Button></form><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default RemoveAnnouncement