import React, { useEffect, useState  } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';
import { getUser } from './../../Utils/Common';
import axios from 'axios';


function RemoveUser() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/users')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  function handleChange(e) {
    setId(e.target.value);
    //console.log(e.target.selectedOptions[0].getAttribute('data-id'));
    document.getElementById("removing").innerHTML = "You are removing: " + e.target.selectedOptions[0].getAttribute('data-id');
    
  }

  function onRemove(event) {
    event.preventDefault();
    axios.delete('http://localhost:4000/users/delete-user/'+Id)
        .then(response => {
          console.log(response);
        });
    window.location.reload(false);
  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Remove User</h2>
          <form onSubmit={onRemove}>
          <select  onChange={handleChange}>
          <option value="Def" disabled selected="true">Select User</option>
          { repo.map((repos) => (
            <option value={repos._id} data-id={repos.name} >{repos.name}</option>
          ))}
          </select>
          <br></br><br></br>
          <p id="removing"></p>
          <Button variant="contained" color="primary" type="submit">
          Remove User
          </Button>
          </form><br></br><br></br>
        </div>
      </div>
    )
  }
  


  export default RemoveUser