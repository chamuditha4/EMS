import React from 'react';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';
import TextField from '@material-ui/core/TextField';



function Submitprogress() {
    return (
      <div>
        <div className="prof">
          <h2>Submit Progress</h2>
          <select>
            <option value="908">Web Design [0098]</option>
            <option value="408">Web Design [0097]</option>
            <option value="508">Web Design [0096]</option>
          </select>
          <br></br><br></br>
          <Button variant="contained" color="primary">
          Show Submission
          </Button><br></br><br></br>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2021-08-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            label="Start Time"
            type="time"
            defaultValue="08:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />

          <TextField
              id="time"
              label="End Time"
              type="time"
              defaultValue="10:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          <br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="Progress" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue=""/><br></br><br></br>
          <Button variant="contained" color="secondary">
          Submit Progress
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }

  export default Submitprogress