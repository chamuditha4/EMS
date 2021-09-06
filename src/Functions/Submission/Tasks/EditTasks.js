import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';


function EditTasks() {
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/tasks')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };



  function handleChange(e) {
    setId('');
    setId(e.target.value);
    
    
  }

  function onSubmit(event) {
    event.preventDefault();
    setDescription('');
        setTitle('');
    axios.get('http://localhost:4000/tasks/get-task/'+Id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setDescription(myRepo.description);
        setTitle(myRepo.name);
      });

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Edit Tasks</h2>
          <form onSubmit={onSubmit}>
          <select onChange={handleChange}>
          { repo.map((repos) => (
            <option value={repos._id} name={repos.name} >{repos.name}</option>
          ))}
          </select>
          <br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
          Select Task
          </Button>
          </form><br></br><br></br>
          <TextField id="standard-uncontrolled" label="" value={Title} onChange={e => setTitle(e.target.value)}/><br></br><br></br>
          <br></br>
          <TextField id="outlined-multiline-flexible" label="" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue={Description}/><br></br><br></br>
          <Button variant="contained" color="secondary">
          Edit Task
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  const Eids = [
    { title: 'Scott R Todd', Eid: 3006 },
    { title: 'Terry J Moore', Eid: 3004  },
    { title: 'Brittany D Bard', Eid: 3003  },
    { title: 'James D Reed', Eid: 3002  },
    { title: 'Marc L Benton', Eid: 3008  },
  ];
  export default EditTasks