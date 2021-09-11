import React, { useEffect, useState  } from 'react';
import  './../../styles/App.css';
import axios from 'axios';
var count = 0;
var naamee = [];

 function SalaryReport() {
  const [repo,setRepo] = useState([]);

  const getRepo = () => {
    axios.get('http://localhost:4000/salary')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);

        for (var i=0;i<myRepo.length;i++){
          console.log(myRepo[i].eid);
          axios.get('http://localhost:4000/users/get-user/' +myRepo[i].eid)
          .then(response1 => {
          // console.log(JSON.stringify(response.data));
          
          const myRepo1 = response1.data.name;
          naamee.push(myRepo1);
          });
        }

      });
  };


  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Salary Report</h2>
          <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
          <script>{count = 0}</script>
          { repo.map((repos) => (
          <tr>
            
            <td>{repos.eid}</td>
            <td>{naamee[count]}</td>
            <td>{(parseInt(repos.salary,10)+parseInt(repos.bonus,10))} LKR</td>
            <script>{count++}</script>
          </tr>
          ))}
        </table>
        <br></br>
        </div>
      </div>
    )
  }
  
  export default SalaryReport