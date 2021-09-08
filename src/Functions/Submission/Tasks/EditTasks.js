import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { getUser } from './../../../Utils/Common';

function EditTasks() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/tasks/' + user._id)
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
      
      
      axios.get('http://localhost:4000/tasks/get-task/' +Id)
        .then(response => {
        // console.log(JSON.stringify(response.data));
        console.log(response);
          const myRepo = response.data;
          setDescription(myRepo.description);
          setTitle(myRepo.name);
        });
      }
    

  }

  function onPut(event) {
    event.preventDefault();
    console.log(Title);
    const task = { name: Title,description: Description };
    axios.put('http://localhost:4000/tasks/update-task/'+Id, task)
        .then(response => {
          console.log(response);
        });

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Edit Tasks</h2>
          <form onSubmit={onSubmit}>
          <select onChange={e => setId(e.target.value)}>
          <option value="Def" disabled selected="true">Select Task</option>
          { repo.map((repos) => (
            <option value={repos._id} name={repos.name} >{repos.name}</option>
          ))}
          </select>
          <br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
          Select Task
          </Button>
          </form><br></br><br></br>
          <form onSubmit={onPut}>
          <TextField id="standard-uncontrolled" label="" value={Title} onChange={e => setTitle(e.target.value)}/><br></br><br></br>
          <br></br>
          <TextField id="outlined-multiline-flexible" label="" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue={Description} onChange={e => setDescription(e.target.value)}/><br></br><br></br>
          <Button variant="contained" color="secondary" type="submit">
          Edit Task
          </Button>
          </form><br></br><br></br>
        </div>
      </div>
    )
  }
  

  export default EditTasks