import React, { useEffect, useState  } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import { getUser } from './../../../Utils/Common';
import axios from 'axios';

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
    if (Id == ''){
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
          <select onChange={e => setId(e.target.value)}>
          <option value="Def" disabled selected="true">Select Job</option>
          { repo.map((repos) => (
            <option value={repos._id} name={repos.name} >{repos.name}</option>
          ))}
          </select>
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
  
  const Users = [
    { title: 'Web Design [920]', eid: 3002 },
    { title: 'A M D Amarasena', eid: 6002 },
    { title: 'A M D Amarasena', eid: 9005 },
  ]

  export default Jobs