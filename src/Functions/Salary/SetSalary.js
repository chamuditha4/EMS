import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  './../../styles/App.css';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';

var Eids = [{"name":"No Person","_id":"404"}];

function SetSalary() {
  const [repo,setRepo] = useState([]);
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



  function onPut(event) {
    event.preventDefault();
    const task = { salary: Salary,bonus:Bonus };
    axios.put('http://localhost:4000/salary/update-salary/'+Eidss._id, task)
        .then(response => {
          console.log(response);
        });

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
      </div>
    )
  }
  
  export default SetSalary