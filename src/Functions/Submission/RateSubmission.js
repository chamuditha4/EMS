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
  const [selected, setselected] = useState('true');
  const [Feedback, setFeedback] = useState('');
  const [isDisable, setisDisable] = useState('disabled');

  async function getRepo(){
    await axios.get('http://localhost:4000/tasks/' + user._id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  async function onSubmit(event) {
    event.preventDefault();
    const rateOBJ = {
      jobid: Id,
      rate: Rate,
      feedback:Feedback
    };
    console.log("ID:" +Id);
    await axios.post('http://localhost:4000/Rate/create-rate', rateOBJ)
      .then(res => console.log(res.data));
    
    setselected('true');
    setisDisable('disabled');
  }

  async function handleChange(e) {
    await setId((e.target.value).toString());
    console.log("eref:" +Id);
    await axios.get('http://localhost:4000/Rate/' + e.target.value)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        
        if(myRepo.length === 0){
          setisDisable('');
        }else{
          setisDisable('disabled');
          setRate(myRepo[0].rate);
          setFeedback(myRepo[0].feedback);
        }
      });
    
  }


  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Rate Submission</h2>
          <select  onChange={handleChange}>
          <option value="Def" disabled selected={selected}>Select Task</option>
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