import React from 'react';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import  './../../styles/App.css';
import TextField from '@material-ui/core/TextField';

function RatedSubmission() {
    return (
      <div>
        <div className="prof">
          <h2>Rated Submission</h2>
          <select>
            <option value="908">Web Design [0098]</option>
            <option value="408">Web Design [0097]</option>
            <option value="508">Web Design [0096]</option>
          </select>
          <br></br><br></br>
          <Button variant="contained" color="primary">
          Show Submission
          </Button><br></br><br></br>
          <Rating name="size-large" defaultValue={4} size="large" readOnly />
          <br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue="Nice Job!." readOnly /><br></br><br></br>
          <br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default RatedSubmission