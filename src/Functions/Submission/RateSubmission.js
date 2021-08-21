import React from 'react';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import  './../../styles/App.css';
import TextField from '@material-ui/core/TextField';

function RateSubmission() {
    return (
      <div>
        <div className="prof">
          <h2>Rate Submission</h2>
          <select>
            <option value="908">Web Design [0098]</option>
            <option value="408">Web Design [0097]</option>
            <option value="508">Web Design [0096]</option>
          </select>
          <br></br><br></br>
          <Button variant="contained" color="primary">
          Show Submission
          </Button><br></br><br></br>
          <Rating name="size-large" defaultValue={2} size="large" />
          <br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="FeedBack" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue=""/><br></br><br></br>
          <Button variant="contained" color="secondary">
          Rate Task
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default RateSubmission