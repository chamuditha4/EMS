import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  './../styles/App.css';

function RemoveAnnouncement() {
    return (
      <div>
        <div className="prof">
          <h2>Remove Announcement</h2>
          <select>
            <option value="908">Announcement ID: 908</option>
            <option value="408">Announcement ID: 408</option>
            <option value="508">Announcement ID: 508</option>
          </select>
          <br></br><br></br>
          <p>You removing: Announcement ID: 908 </p>
          <br></br><br></br>
          <Button variant="contained" color="primary">
          Remove Announcement
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default RemoveAnnouncement