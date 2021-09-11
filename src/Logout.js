import { removeUserSession } from './Utils/Common';
import React, { useEffect  } from 'react';


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