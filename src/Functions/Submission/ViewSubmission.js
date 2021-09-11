import React, { useEffect, useState  } from 'react';
import Button from '@material-ui/core/Button';
import  './../../styles/App.css';
import axios from 'axios';
import { getUser } from './../../Utils/Common';
import ReactHtmlParser from 'react-html-parser'; 

function ViewSubmission() {
  const user = getUser();
  const [temprepo,setTempRepo] = useState([]);
  const [repo,setRepo] = useState([]);
  const [sub,setSub] = useState([]);
  const [Name,setName] = useState('');
  const [Id, setId] = useState('');
  const [table, settable] = useState('');

  const getRepo = () => {
    axios.get('http://localhost:4000/tasks/' + user._id)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  async function handleChange(e) {
    setId(e.target.value);
    
    await axios.get('http://localhost:4000/Submission/' +Id)
        .then(response => {
        // console.log(JSON.stringify(response.data));
        //console.log(response);
        const myRepo = response.data;
        setTempRepo(myRepo);
    });
    
  }

 async function onSubmit(event) {
    event.preventDefault();
    if (Id === ''){
      alert("Please Select Task!.");
    }else{
      settable('<tr><th>Time</th><th>Employee</th><th>Log</th></tr>');
      setSub(temprepo);
      
        
        for (var i=0;i<temprepo.length;i++){
          console.log(temprepo[i].eid);
          axios.get('http://localhost:4000/users/get-user/' +temprepo[i].eid)
          .then(response1 => {
          // console.log(JSON.stringify(response.data));
          
          const myRepo1 = response1.data.name;
          setName(myRepo1);
          console.log(myRepo1);
          });
        }
        

        
      }
    

  }



  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>View Submission</h2>
          <form onSubmit={onSubmit}>
          <select   onChange={handleChange}>
          <option value="Def" disabled selected="true">Select Task</option>
          { repo.map((repos) => (
            
            <option value={repos._id} name={repos.name} >{repos.name}</option>
          ))}
          </select>
          <br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
          Show Submission
          </Button></form><br></br><br></br>
          <table>
            {ReactHtmlParser(table)}
            { sub.map((repos) => (
            <tr>
              <td>{repos.time_start} - {repos.time_end}</td>
              <td>{Name}</td>
              <td>{repos.log}</td>
            </tr>
            ))}
          </table>
          <br></br><br></br>
        </div>
      </div>
    )
  }
  
  export default ViewSubmission