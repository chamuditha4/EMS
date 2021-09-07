import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import { getUser } from './../../../Utils/Common';

var Eids = [{"name":"No Person","_id":"404"}];

function NewTasks() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Eidss,setEidss] = useState([]);

  const getRepo = () => {
    axios.get('http://localhost:4000/users/employees')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
        console.log(user._id);
      });
  };
  

  function onSubmit(event) {
    event.preventDefault();
    const taskOBJ = {
      name: Title,
      eids: Eidss,
      owner:user._id,
      description: Description
    };
    axios.post('http://localhost:4000/tasks/create-task', taskOBJ)
      .then(res => console.log(res.data));
      setTitle('');
      setDescription('');
      setEidss([]);
  }

  function autoselect(){
    Eids=[];
    repo.map((repos) => ( Eids.push(repos)));
    console.log(Eids);
  }


  useEffect(() => getRepo(),[]);
  

    return (
      
      <div>
        {autoselect()}
        <div className="prof">
          <h2>New Tasks</h2>
          <form onSubmit={onSubmit}>
          <TextField id="standard-uncontrolled" label="Title" defaultValue="" value={Title} onChange={e => setTitle(e.target.value)}/><br></br><br></br>
          <div>
          <Autocomplete
            onChange={(event, value) => setEidss(value)}
            multiple
            id="tags-standard"
            limitTags={1}
            size="small"
            options={Eids}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField 
                {...params}
                style={{ width: 350 }}
                variant="standard"
                label="EIDs"
                placeholder="EIDs"
              />
            )}
          />
          </div><br></br>
          <TextField id="outlined-multiline-flexible" label="Job Description" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue="" value={Description} onChange={e => setDescription(e.target.value)}/><br></br><br></br>
          <Button variant="contained" color="secondary"  type="submit">
          Add Task 
          </Button>
          </form><br></br><br></br>
        </div>
        
      </div>

    )
  }


  export default NewTasks

