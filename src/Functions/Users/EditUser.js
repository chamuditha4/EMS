import React, { useEffect, useState  } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const CryptoJS = require("crypto-js");
var key = "ASECRET";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

var Eids = [{"name":"No Person","_id":"404"}];

function EditUser() {
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const getRepo = () => {
    axios.get('http://localhost:4000/users')
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


  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
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

  const handleClick3 = () => {
    setOpen3(true);
  };

  const handleClose3 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen3(false);
  };

  function autoselect(){
    Eids=[];
    repo.map((repos) => ( Eids.push(repos)));
    //console.log(Eids);
  }

  async function onSubmit(event) {
    event.preventDefault();
    if(Id.length === 0){
      handleClick1();
    }else{
      
      try{
        console.log(Id._id);
        await axios.get('http://localhost:4000/users/get-user/' +Id._id)
          .then(response => {
          // console.log(JSON.stringify(response.data));
          console.log(response);
            const myRepo = response.data;
            setName(myRepo.name);
            setEmail(myRepo.email);
            setPassword('');
          });
      }catch(err){}
          handleClick2();
      }
    }
    

  function onPut(event) {
    event.preventDefault();
    try{
      if(Id.length === 0){
        handleClick1();
      }
      if (Password === ''){
        const task = { name: Name,email: Email };
        axios.put('http://localhost:4000/users/update-user/'+Id._id, task)
        .then(response => {
          console.log(response);
          handleClick();
        });
      }else{
        const task = { name: Name,email: Email, password:(CryptoJS.AES.encrypt((Password),key)).toString() };
        axios.put('http://localhost:4000/users/update-user/'+Id._id, task)
        .then(response => {
          console.log(response);
          handleClick();
        });
      }
    }catch(err){
      handleClick3();
    }
    
    

  }

  async function EidSelect(e,value){
    console.log(value)
    if ( value !== null){
      setId(value);
    }else{
      setId('');
    }
    
  }

  useEffect(() => getRepo(),[]);

    return (
      <div>
        {autoselect()}
        <div className="prof">
          <h2>Edit User</h2>
          <form onSubmit={onSubmit}>
          <Autocomplete
            onChange={EidSelect}
            values={Id}
            id="tags-standard"
            limitTags={1}
            size="small"
            options={Eids}
            getOptionLabel={(option) => option.username}
            renderInput={(params) => (
              <TextField 
                {...params}
                style={{ width: 350 }}
                variant="standard"
                label="User Name"
                placeholder="Names"
              />
            )}
          /><br></br>
          <Button variant="contained" color="primary" type="submit">
          Select User
          </Button>
          </form><br></br>
          <form onSubmit={onPut}>
          <TextField id="standard-uncontrolled" label="Name"  value={Name} onChange={e => setName(e.target.value)} /><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Email"  value={Email} onChange={e => setEmail(e.target.value)} /><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Password"  value={Password} onChange={e => setPassword(e.target.value)} />
          <h6>Please Leave a blank, if you are not changing password!.</h6>
          <Button variant="contained" color="primary"  type="submit">
          Edit User
          </Button>
          </form><br></br><br></br>
        </div>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            update successfuly!
            </Alert>
          </Snackbar>
        </Stack>

        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open1} autoHideDuration={600} onClose={handleClose1}>
            <Alert onClose={handleClose1} severity="warning" sx={{ width: '100%' }}>
              Please Select User!.
            </Alert>
          </Snackbar>
        </Stack>


        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open2} autoHideDuration={600} onClose={handleClose2}>
            <Alert onClose={handleClose2} severity="warning" sx={{ width: '100%' }}>
            Something Wrong!.
            </Alert>
          </Snackbar>
        </Stack>

        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open3} autoHideDuration={600} onClose={handleClose3}>
            <Alert onClose={handleClose3} severity="warning" sx={{ width: '100%' }}>
            Something Wrong on update!.
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    )
  }
  

  export default EditUser