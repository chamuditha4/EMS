import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  './../../styles/App.css';

function NewAnnouncement() {
    return (
      <div>
        <div className="prof">
          <h2>New Announcement</h2>
          <TextField id="standard-uncontrolled" label="Title" defaultValue="" /><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Department" defaultValue="" /><br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="Announcement" multiline Rows={4} variant="outlined" style = {{width: 350}} /><br></br><br></br>
          <Button variant="contained" color="primary">
            Add Announcement
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default NewAnnouncement