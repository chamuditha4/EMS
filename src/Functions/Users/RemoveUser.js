import React, { useEffect, useState  } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';
import { getUser } from './../../Utils/Common';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function RemoveUser() {
  const user = getUser();
  const classes = useStyles();
  const [repo,setRepo] = useState([]);

  const getRepo = () => {
    axios.get('http://localhost:4000/users')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Remove User</h2>
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Select User</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
          <MenuItem value="Def" disabled selected="true">Select User</MenuItem>
          { repo.map((repos) => (
            <MenuItem value={repos._id} data-id={repos.name} >{repos.name}</MenuItem>
          ))}
          </Select>
          </FormControl>
          <br></br><br></br>
          <p>You Removing User: A M D Amarasena </p>
          <p>EID: 6002</p>
          <Button variant="contained" color="primary">
          Remove User
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  


  export default RemoveUser