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
    console.log(Title);
    const task = { name: Title,description: Description,department:Department };
    axios.put('http://localhost:4000/Announcement/update-announcement/'+Id, task)
        .then(response => {
          console.log(response);
        });

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Edit Announcement</h2>
          <form onSubmit={onSubmit}>
          <select onChange={e => setId(e.target.value)}>
          <option value="Def" disabled selected="true">Select Announcement</option>
          { repo.map((repos) => (
            <option value={repos._id} name={repos.name} >{repos.name}</option>
          ))}
          </select>
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