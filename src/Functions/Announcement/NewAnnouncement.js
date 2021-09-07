import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  './../../styles/App.css';
import { getUser } from './../../Utils/Common';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

function NewAnnouncement() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Department,setDepartment] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    const taskOBJ = {
      name: Title,
      department: Department,
      owner:user._id,
      description: Description
    };
    axios.post('http://localhost:4000/Announcement/create-announcement', taskOBJ)
      .then(res => console.log(res.data));
      setTitle('');
      setDescription('');
      setDepartment('');
  }

    return (
      <div>
        <div className="prof">
          <h2>New Announcement</h2>
          <form onSubmit={onSubmit}>
          <TextField id="standard-uncontrolled" label="Title" defaultValue="" value={Title} onChange={e => setTitle(e.target.value)} /><br></br><br></br>
          <FormLabel component="legend">Department</FormLabel>
              <RadioGroup aria-label="Department" name="Department"  value={Department} onChange={e => setDepartment(e.target.value)}  >
                <FormControlLabel value="IT" control={<Radio />} label="IT" />
                <FormControlLabel value="Accounting" control={<Radio />} label="Accounting" />
                <FormControlLabel value="Management" control={<Radio />} label="Management" />
              </RadioGroup><br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="Announcement" multiline Rows={4} variant="outlined" value={Description} style = {{width: 350}}  onChange={e => setDescription(e.target.value)}/><br></br><br></br>
          <Button variant="contained" color="primary"  type="submit">
            Add Announcement
          </Button></form><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default NewAnnouncement