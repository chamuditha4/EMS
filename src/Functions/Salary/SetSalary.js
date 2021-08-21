import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import  './../../styles/App.css';

function SetSalary() {
    return (
      <div>
        <div className="prof">
          <h2>Set Salary</h2>
          <select>
            <option value="908">Web Design [0098]</option>
            <option value="408">Web Design [0097]</option>
            <option value="508">Web Design [0096]</option>
          </select><br></br><br></br>
          <p>You selected: U M M Bashitha</p>
          <p>EID: 2502</p>
          <TextField id="standard-uncontrolled" label="Salary" defaultValue="" /><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Bonus" defaultValue="" /><br></br><br></br>
          <Button variant="contained" color="primary">
            Set Salary
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default SetSalary