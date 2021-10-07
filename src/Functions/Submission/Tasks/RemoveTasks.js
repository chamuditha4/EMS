import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import axios from 'axios';
import { getUser } from './../../../Utils/Common';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

var Taskids = [{"name":"No task","_id":"404"}];

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

  function autoselect(){
    Taskids=[];
    repo.map((repos) => ( Taskids.push(repos)));
    //console.log(Eids);
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  async function onRemove(event) {
    event.preventDefault();
    if (Id._id === null){
      alert('Please Select One!.');
    }else{
      await axios.delete('http://localhost:4000/tasks/delete-task/'+Id._id)
    .then(response => {
      console.log(response);
      handleClick();
    });
    getRepo();
    }

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        {autoselect()}
        <div className="prof">
          <h2>Remove Tasks</h2>
          <form onSubmit={onRemove}>
          <Autocomplete
            onChange={(event, value) => setId(value)}
            values={Id}
            id="tags-standard"
            limitTags={1}
            size="small"
            options={Taskids}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField 
                {...params}
                style={{ width: 350 }}
                variant="standard"
                label="Select Task"
                placeholder="Tasks"
              />
            )}
          /><br></br>
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