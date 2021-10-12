import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { getUser } from './../../../Utils/Common';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Autocomplete from '@material-ui/lab/Autocomplete';

var Taskids = [{"name":"No task","_id":"404"}];
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EditTasks() {
  const [open, setOpen] = React.useState(false);
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

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

  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };

  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };
  

  function onSubmit(event) {
    event.preventDefault();
    console.log(Id);
    if (Id === ''){
      handleClick1();
    }else{
      setDescription('');
      setTitle('');
      
      try{
        axios.get('http://localhost:4000/tasks/get-task/' +Id._id)
        .then(response => {
        // console.log(JSON.stringify(response.data));
        console.log(response);
          const myRepo = response.data;
          setDescription(myRepo.description);
          setTitle(myRepo.name);
        });
      }catch(err){
        handleClick2();
      }
      
      
      }
    

  }

  function onPut(event) {
    event.preventDefault();
    if (Title === '' || Description === ''|| Id === ''){
      handleClick1();
    }else{
      try{
        console.log(Title);
        const task = { name: Title,description: Description };
        axios.put('http://localhost:4000/tasks/update-task/'+Id._id, task)
            .then(response => {
              console.log(response);
              handleClick();
            });
      }catch(err){
        handleClick2();
      }
    
    }

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        {autoselect()}
        <div className="prof">
          <h2>Edit Tasks</h2>
          <form onSubmit={onSubmit}>
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

        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
              Task Edited Succuessfuly!
            </Alert>
          </Snackbar>
        </Stack>

        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
            <Alert onClose={handleClose1} severity="warning" sx={{ width: '100%' }}>
              Please Fill everything!.
            </Alert>
          </Snackbar>
        </Stack>

        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
            <Alert onClose={handleClose2} severity="warning" sx={{ width: '100%' }}>
              Something went wrong, Please try again!
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    )
  }
  

  export default EditTasks