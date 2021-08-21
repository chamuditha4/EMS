import React from 'react';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';

function Leave() {
    return (
      <div>
        <div className="prof">
          <h2>Mark Leave</h2>
          <Button variant="contained" color="secondary">
            Mark Leave
          </Button><br></br><br></br>
          <Button variant="contained" disabled>
            Marked Time: 
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default Leave