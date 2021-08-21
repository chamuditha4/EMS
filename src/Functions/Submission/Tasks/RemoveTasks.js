import React from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';

function RemoveTasks() {
    return (
      <div>
        <div className="prof">
          <h2>Remove Tasks</h2>
          <select>
            <option value="908">Web Design [0098]</option>
            <option value="408">Web Design [0097]</option>
            <option value="508">Web Design [0096]</option>
          </select>
          <br></br><br></br>
          <p>You removing: Web Design [0096] </p>
          <br></br><br></br>
          <Button variant="contained" color="primary">
          Remove Task
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default RemoveTasks