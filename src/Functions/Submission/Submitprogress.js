import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';
import TextField from '@material-ui/core/TextField';
import { getUser } from './../../Utils/Common';
import axios from 'axios';


function Submitprogress() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Id,setId] = useState('');
  const [Date,setDate] = useState('');
  const [Time_Start,setTime_Start] = useState('');
  const [Time_End,setTime_End] = useState('');
  const [Log,setLog] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/tasks/get-job/' + user._id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  function handleChange(e) {
    setId(e.target.value);
    console.log(e.target.selectedOptions[0].getAttribute('data-id'));
    document.getElementById("progress").innerHTML = "You are Submitting Progress For: " + e.target.selectedOptions[0].getAttribute('data-id');
    
  }

  function onSubmit(event) {
    event.preventDefault();
    if (Id === '' || Date === '' || Time_Start === '' || Time_End === '' || Log === '' ){
      alert("Please Fill Everything!.");
    }else{
      console.log(Id)
      console.log(Date)
      console.log(Time_Start)
      console.log(Time_End)
      console.log(Log)

      const subOBJ = {
        job_id: Id,
        eid: user._id,
        time_start:Time_Start,
        time_end: Time_End,
        log: Log
      };

      axios.post('http://localhost:4000/Submission/create-submission', subOBJ)
      .then(res => console.log(res.data));
      setDate('');
      setTime_Start('');
      setTime_End('');
      setLog('');

      alert("Submission is Succuessfull!.");

    }

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Submit Progress</h2>
          <form onSubmit={onSubmit}>
          <select onChange={handleChange}>
          <option value="Def" disabled selected="true">Select Job</option>
          { repo.map((repos) => (
            <option value={repos._id} name={repos.name} data-id={repos.name} >{repos.name}</option>
          ))}
          </select>

          <br></br>
          <p id="progress"></p>
          <br></br>
          <TextField
            onChange={e => setDate(e.target.value)}
            id="date"
            label="Date"
            type="date"
            defaultValue=""
            value={Date}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            onChange={e => setTime_Start(e.target.value)}
            id="time"
            label="Start Time"
            type="time"
            defaultValue=""
            value={Time_Start}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 60, // 5 min
            }}
          />

          <TextField
              onChange={e => setTime_End(e.target.value)}
              id="time"
              label="End Time"
              type="time"
              defaultValue=""
              value={Time_End}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 60, // 5 min
              }}
            />
          <br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="Progress" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue="" onChange={e => setLog(e.target.value)} value={Log} /><br></br><br></br>
          <Button variant="contained" color="secondary" type="submit">
          Submit Progress
          </Button></form><br></br><br></br>
        </div>
      </div>
    )
  }

  export default Submitprogress