import React, { useState  } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'; 

function Announcement() {
  const [repo,setRepo] = useState([]);
  const [Department,setDepartment] = useState('');
  const [table, settable] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    if (Department === ''){
      alert("Please Select Department!.");
    }else{
      
      
      axios.get('http://localhost:4000/Announcement/read/' +Department)
        .then(response => {
        // console.log(JSON.stringify(response.data));
        console.log(response);
          const myRepo = response.data;
          settable('<tr><th>Title</th><th>Depertment</th><th>Announcement</th></tr>');
          setRepo(myRepo);
        });
      }
    

  }
    return (
      <div>
        <div>
          <h2>Announcement</h2>
          <form onSubmit={onSubmit}>
          <select onChange={e => setDepartment(e.target.value)}>
          <option value="Def" disabled selected="true">Select Department</option>
          <option value="IT" name="IT" >IT</option>
          <option value="Accounting" name="Accounting" >Accounting</option>
          <option value="Management" name="Management" >Management</option>
          </select>
          <br></br><br></br>
          <Button variant="contained" color="primary" type="submit">
          Select Department
          </Button>
          </form><br></br><br></br>
            <div>
                <table>
                {ReactHtmlParser(table)}
                { repo.map((repos) => (
                    <tr>
                    <td>{repos.name}</td>
                    <td>{repos.department}</td>
                    <td>{repos.description}</td>
                    </tr>
                ))}
                </table>
            </div>

        </div>
      </div>
    )
  }
  
  export default Announcement