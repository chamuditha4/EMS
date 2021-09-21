import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

var Eids = [{"name":"No Person","_id":"404"}];
function RemoveUser() {
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/users')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };


  async function onRemove(event) {
    event.preventDefault();
    await axios.delete('http://localhost:4000/users/delete-user/'+Id)
        .then(response => {
          console.log(response);
        });
    getRepo();
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
          <h2>Remove User</h2>
          <form onSubmit={onRemove}>
          <Autocomplete
            onChange={(event, value) => setId(value._id)}
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
          Remove User
          </Button>
          </form><br></br><br></br>
        </div>
      </div>
    )
  }
  


  export default RemoveUser