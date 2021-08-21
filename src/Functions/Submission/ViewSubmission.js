import React from 'react';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';

function ViewSubmission() {
    return (
      <div>
        <div className="prof">
          <h2>View Submission</h2>
          <select>
            <option value="908">Web Design [0098]</option>
            <option value="408">Web Design [0097]</option>
            <option value="508">Web Design [0096]</option>
          </select>
          <br></br><br></br>
          <Button variant="contained" color="primary">
          Show Submission
          </Button><br></br><br></br>
          <table>
            <tr>
              <th>Time</th>
              <th>Employee</th>
              <th>Log</th>
            </tr>
            <tr>
              <td>8:00 - 10:00</td>
              <td>Ramesh</td>
              <td>New Interface Implemented</td>
            </tr>
          </table>
          <br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default ViewSubmission