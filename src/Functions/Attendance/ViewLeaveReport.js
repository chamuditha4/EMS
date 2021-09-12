import React, { useEffect, useState  } from 'react';
import  './../../styles/App.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'; 



function ViewAttendanceReport() {
  const [repo,setRepo] = useState([]);
  const [table, settable] = useState('');


  const getRepo = () => {
    axios.get('http://localhost:4000/attendance/leave/all')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
        console.log(myRepo)
        if(myRepo.length >0){
          settable('<tr><th>EID</th><th>Name</th><th>Marked Time</th></tr>');
        }

      });
  };


  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <br></br>
          <table>
            {ReactHtmlParser(table)}
            { repo.map((repos) => (
            <tr>
              <td>{repos.eid}</td>
              <td>{repos.name}</td>
              <td>{repos.hrs} : {repos.min}</td>
            </tr>
            ))}
          </table>
        <br></br>
        </div>
      </div>
    )
  }
  
  export default ViewAttendanceReport