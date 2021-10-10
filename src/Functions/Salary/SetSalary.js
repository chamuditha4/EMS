import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  './../../styles/App.css';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

var Eids = [{"name":"No Person","_id":"404"}];
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SetSalary() {
  const [repo,setRepo] = useState([]);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [Eidss,setEidss] = useState('');
  const [Salary, setSalary] = useState('');
  const [Bonus, setBonus] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/users')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  function onSubmit(event) {
    event.preventDefault();
    axios.get('http://localhost:4000/salary/get-salary/' +Eidss._id)
        .then(response => {
        // console.log(JSON.stringify(response.data));
        console.log(response);
          const myRepo = response.data;
          setSalary(myRepo[0].salary);
          setBonus(myRepo[0].bonus);
        });
    }


    const handleClick1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen1(false);
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
    
    const handleClick2 = () => {
      setOpen2(true);
    };
  
    const handleClose2 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen2(false);
    };

  function onPut(event) {
    event.preventDefault();
    if (Salary=== null || Bonus === null){
      handleClick1();
    }else{
      try{
        const task = { salary: Salary,bonus:Bonus };
      axios.put('http://localhost:4000/salary/update-salary/'+Eidss._id, task)
          .then(response => {
            console.log(response);
            handleClick();
          });
      }catch(err){
        handleClick2();
      }
      
    }

  }

  function autoselect(){
    Eids=[];
    repo.map((repos) => ( Eids.push(repos)));
    //console.log(Eids);
  }

  useEffect(() => getRepo(),[]);

    return (
      <div>
        {autoselect()}
        <div className="prof">
          <h2>Set Salary</h2>
          <form onSubmit={onSubmit}>
          <Autocomplete
            onChange={(event, value) => setEidss(value)}
            values={Eidss}
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
          /><br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
          Select User
          </Button></form><br></br>
          <form onSubmit={onPut}>
          <TextField id="standard-uncontrolled" label="Salary" defaultValue="" value={Salary} onChange={e => setSalary(e.target.value)}/><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Bonus" defaultValue="" value={Bonus} onChange={e => setBonus(e.target.value)}/><br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
            Set Salary
          </Button></form><br></br><br></br>
        </div>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
            <Alert onClose={handleClose1} severity="warning" sx={{ width: '100%' }}>
              Please Fill Everything!
            </Alert>
          </Snackbar>
        </Stack>

        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
            <Alert onClose={handleClose2} severity="warning" sx={{ width: '100%' }}>
              Something Wrong!
            </Alert>
          </Snackbar>
        </Stack>

        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Salary Update Succuessfuly!
            </Alert>
          </Snackbar>
        </Stack>

      </div>
    )
  }
  
  export default SetSalary