import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  './../styles/App.css';

function EditAnnouncement() {
    return (
      <div>
        <div className="prof">
          <h2>Edit Announcement</h2>
          <TextField id="standard-uncontrolled" label="Title" defaultValue="Web Design Project" /><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Department" defaultValue="IT Department" /><br></br><br></br>
          <TextField id="outlined-multiline-flexible" label="Announcement" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue="Please Check your notice."/><br></br><br></br>
          <Button variant="contained" color="primary">
            Update Announcement
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default EditAnnouncement