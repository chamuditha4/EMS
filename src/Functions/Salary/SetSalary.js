import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  './../../styles/App.css';
import axios from 'axios';

function SetSalary() {
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');
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
    axios.get('http://localhost:4000/salary/get-salary/' +Id)
        .then(response => {
        // console.log(JSON.stringify(response.data));
        console.log(response);
          const myRepo = response.data;
          setSalary(myRepo[0].salary);
          setBonus(myRepo[0].bonus);
        });
      }

  function handleChange(e) {
    setId(e.target.value);
    console.log(e.target.selectedOptions[0].getAttribute('data-id'));
    document.getElementById("editing").innerHTML = "You are Selected: " + e.target.selectedOptions[0].getAttribute('data-id');
    
  }

  function onPut(event) {
    event.preventDefault();
    const task = { salary: Salary,bonus:Bonus };
    axios.put('http://localhost:4000/salary/update-salary/'+Id, task)
        .then(response => {
          console.log(response);
        });

  }

  useEffect(() => getRepo(),[]);

    return (
      <div>
        <div className="prof">
          <h2>Set Salary</h2>
          <form onSubmit={onSubmit}>
          <select  onChange={handleChange}>
          <option value="Def" disabled selected="true">Select User</option>
          { repo.map((repos) => (
            <option value={repos._id} data-id={repos.name} >{repos.name}</option>
          ))}
          </select><br></br><br></br>
          <p id="editing"></p>
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