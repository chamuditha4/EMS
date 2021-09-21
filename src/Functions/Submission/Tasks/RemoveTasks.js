import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import axios from 'axios';
import { getUser } from './../../../Utils/Common';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function RemoveTasks() {
  const [open, setOpen] = React.useState(false);
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

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function handleChange(e) {
    setId(e.target.value);
    console.log(e.target.selectedOptions[0].getAttribute('data-id'));
    document.getElementById("removing").innerHTML = "You are removing: " + e.target.selectedOptions[0].getAttribute('data-id');
    
  }

  async function onRemove(event) {
    event.preventDefault();
    await axios.delete('http://localhost:4000/tasks/delete-task/'+Id)
    .then(response => {
      console.log(response);
      handleClick();
    });
    getRepo();

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
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              Task Removed!
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    )
  }
  
  export default RemoveTasks