import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import axios from 'axios';
import { getUser } from './../../../Utils/Common';

function RemoveTasks() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/tasks/' + user._id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  function handleChange(e) {
    setId(e.target.value);
    console.log(e.target.selectedOptions[0].getAttribute('data-id'));
    document.getElementById("removing").innerHTML = "You are removing: " + e.target.selectedOptions[0].getAttribute('data-id');
    
  }

  function onRemove(event) {
    event.preventDefault();
    axios.delete('http://localhost:4000/tasks/delete-task/'+Id)
        .then(response => {
          console.log(response);
        });

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Remove Tasks</h2>
          <form onSubmit={onRemove}>
          <select  onChange={handleChange}>
          <option value="Def" disabled selected="true">Select Task</option>
          { repo.map((repos) => (
            <option value={repos._id} data-id={repos.name} >{repos.name}</option>
          ))}
          </select>
          <br></br><br></br>
          <p id="removing"></p>
          <br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
          Remove Task
          </Button>
          </form><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default RemoveTasks