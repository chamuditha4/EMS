import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

function NewTasks() {
  const [repo,setRepo] = useState([]);
  var Eids = [];


  const getRepo = () => {
    axios.get('http://localhost:4000/users/employees')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
        return Eids;
      });
  };
  

  useEffect(() => getRepo(),[]);

  

    return (
      <div>
        { repo.map((repos) => (
        <div className="prof">
          <script>{Eids.push(repos)}</script>
          <h2>New Tasks</h2>
          <TextField id="standard-uncontrolled" label="Title" defaultValue="" /><br></br><br></br>
          <Autocomplete
            multiple
            id="tags-standard"
            limitTags={1}
            size="small"
            options={Eids}
            getOptionLabel={(option) => option.name}
            defaultValue={[Eids[0]]}
            renderInput={(params) => (
              <TextField 
                {...params}
                style={{ width: 350 }}
                variant="standard"
                label="EIDs"
                placeholder="EIDs"
              />
            )}
          /><br></br>
          <TextField id="outlined-multiline-flexible" label="Job Description" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue=""/><br></br><br></br>
          <Button variant="contained" color="secondary">
          Add Task {console.log(repos)}
          </Button><br></br><br></br>
        </div>
        ))}
      </div>

    )
  }


  export default NewTasks

