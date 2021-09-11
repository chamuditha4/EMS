import React, { useEffect, useState  } from 'react';
import  './../../styles/App.css';
import axios from 'axios';

 function SalaryReport() {
  const [repo,setRepo] = useState([]);
  const [name1,setname] = useState([]);

  const getRepo = () => {
    axios.get('http://localhost:4000/salary')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  async function getuser(usern){
    await axios.get('http://localhost:4000/users/get-user/'+ usern)
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo1 = response.data;
        setname(myRepo1[0]);
      });
  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        <div className="prof">
          <h2>Salary Report</h2>
          <table>
          <tr>
            <th>ID</th>
            <th>Salary</th>
          </tr>
          { repo.map((repos) => (
          <tr>
            <td>{repos.eid}</td>
            <td>{(parseInt(repos.salary)+parseInt(repos.bonus))} LKR</td>
          </tr>
          ))}
        </table>
        <br></br>
        </div>
      </div>
    )
  }
  
  export default SalaryReport