import React, { useEffect, useState  } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CryptoJS = require("crypto-js");
var key = "ASECRET";

var Eids = [{"name":"No Person","_id":"404"}];

function EditUser() {
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/users')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };



  function autoselect(){
    Eids=[];
    repo.map((repos) => ( Eids.push(repos)));
    //console.log(Eids);
  }

  async function onSubmit(event) {
    event.preventDefault();
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
      }

  function onPut(event) {
    event.preventDefault();
    if (Password === ''){
      const task = { name: Name,email: Email };
      axios.put('http://localhost:4000/users/update-user/'+Id._id, task)
      .then(response => {
        console.log(response);
      });
    }else{
      const task = { name: Name,email: Email, password:(CryptoJS.AES.encrypt((Password),key)).toString() };
      axios.put('http://localhost:4000/users/update-user/'+Id._id, task)
      .then(response => {
        console.log(response);
      });
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
            onChange={(event, value) => setId(value)}
            values={Id}
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
      </div>
    )
  }
  

  export default EditUser