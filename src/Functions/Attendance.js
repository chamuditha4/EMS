import React from 'react';
import Button from '@material-ui/core/Button';
import  './../styles/App.css';

function Attendance() {
    return (
      <div>
        <div className="prof">
          <h2>Mark Attendance</h2>
          <Button variant="contained" color="secondary">
            Mark Attendance
          </Button><br></br><br></br>
          <Button variant="contained" disabled>
            Marked Time: 
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default Attendance