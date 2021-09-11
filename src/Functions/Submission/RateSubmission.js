import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import  './../../styles/App.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { getUser } from './../../Utils/Common';


function RateSubmission() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');
  const [Rate, setRate] = useState('');
  const [Feedback, setFeedback] = useState('');
  const [isDisable, setisDisable] = useState('disabled');

  const getRepo = () => {
    axios.get('http://localhost:4000/tasks/' + user._id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  function onSubmit(event) {
    event.preventDefault();
    const rateOBJ = {
      jobid: Id,
      rate: Rate,
      feedback:Feedback
    };
    axios.post('http://localhost:4000/Rate/create-rate', rateOBJ)
      .then(res => console.log(res.data));
    setisDisable('disabled');

  }

  async function handleChange(e) {
    setId(e.target.value);

    await axios.get('http://localhost:4000/Rate/' + Id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        console.log(myRepo.length);
        if(myRepo.length === 0){
          setisDisable('');
        }else{
          setisDisable('disabled');
          setRate(myRepo[0].rate);
          setFeedback(myRepo[0].feedback);
        }
      });
    
  }
  function onSubmit(event) {
    event.preventDefault();
    const rateOBJ = {
      jobid: Id,
      rate: Rate,
      feedback:Feedback
    };
    axios.post('http://localhost:4000/Rate/create-rate', rateOBJ)
      .then(res => console.log(res.data));
    

  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Rate Submission</h2>
          <select  onChange={handleChange}>
          <option value="Def" disabled selected="true">Select Task</option>
          { repo.map((repos) => (
            <option value={repos._id} name={repos.name} >{repos.name}</option>
          ))}
          </select>
          <br></br><br></br>
          <form onSubmit={onSubmit}>
          <Rating name="size-large" defaultValue={''} size="large" onChange={e => setRate(e.target.value)}  disabled={isDisable} value={Rate}/>
          <br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="FeedBack" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue="" onChange={e => setFeedback(e.target.value)}  disabled={isDisable} value={Feedback} /><br></br><br></br>
          <Button variant="contained" color="secondary" type="submit" disabled={isDisable}>
          Rate Task
          </Button></form><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default RateSubmission