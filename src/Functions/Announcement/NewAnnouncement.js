import React, {  useState  } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  './../../styles/App.css';
import { getUser } from './../../Utils/Common';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function NewAnnouncement() {
  const user = getUser();
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Department,setDepartment] = useState('');
  const [open1, setOpen1] = React.useState(false);

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
    if (Department.length === 0 || Title.length===0 || Description.length === 0){
      handleClick1();
    }else{
      const taskOBJ = {
        name: Title,
        department: Department,
        owner:user._id,
        description: Description
      };
      axios.post('http://localhost:4000/Announcement/create-announcement', taskOBJ)
        .then(res => console.log(res.data));
        setTitle('');
        setDescription('');
        setDepartment('');
    }
    
  }

    return (
      <div>
        <div className="prof">
          <h2>New Announcement</h2>
          <form onSubmit={onSubmit}>
          <TextField id="standard-uncontrolled" label="Title" defaultValue="" value={Title} onChange={e => setTitle(e.target.value)} /><br></br><br></br>
          <FormLabel component="legend">Department</FormLabel>
              <RadioGroup aria-label="Department" name="Department"  value={Department} onChange={e => setDepartment(e.target.value)}  >
                <FormControlLabel value="IT" control={<Radio />} label="IT" />
                <FormControlLabel value="Accounting" control={<Radio />} label="Accounting" />
                <FormControlLabel value="Management" control={<Radio />} label="Management" />
              </RadioGroup><br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="Announcement" multiline Rows={10} variant="outlined" value={Description} style = {{width: 350}}  onChange={e => setDescription(e.target.value)}/><br></br><br></br>
          <Button variant="contained" color="primary"  type="submit">
            Add Announcement
          </Button></form><br></br><br></br>
        </div>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
            <Alert onClose={handleClose1} severity="warning" sx={{ width: '100%' }}>
              Please Fill Everything!
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    )
  }
  
  export default NewAnnouncement