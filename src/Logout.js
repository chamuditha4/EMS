import { removeUserSession } from './Utils/Common';
import React, { useEffect  } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Logout() {
    const handleLogout = () => {
        removeUserSession();
        window.location.href = "/Login";
      }

      useEffect(() => handleLogout(),[]);
  
      return (
        <div>
          
        </div>
      )
    }
    
  
    export default Logout