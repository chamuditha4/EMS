import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import  './../../styles/App.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { getUser } from './../../Utils/Common';

function RatedSubmission() {
  const user = getUser();
  const [repo,setRepo] = useState([]);
  const [Id, setId] = useState('');
  const [Rate, setRate] = useState('');
  const [Feedback, setFeedback] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/tasks/get-job/' + user._id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  async function handleChange(e) {
    setId(e.target.value);

    await axios.get('http://localhost:4000/Rate/' + Id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        console.log(myRepo.length);
        setRate(myRepo[0].rate);
        setFeedback(myRepo[0].feedback);
      });
    
  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Rated Submission</h2>
          <select  onChange={handleChange}>
          <option value="Def" disabled selected="true">Select Task</option>
          { repo.map((repos) => (
            <option value={repos._id} name={repos.name} >{repos.name}</option>
          ))}
          </select>
          <br></br><br></br>
          <Rating name="size-large" defaultValue={''} size="large" readOnly  value={Rate}/>
          <br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue="" readOnly value={Feedback}  /><br></br><br></br>
          <br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default RatedSubmission