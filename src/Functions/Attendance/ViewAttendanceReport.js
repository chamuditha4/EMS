import React, { useEffect, useState  } from 'react';
import  './../../styles/App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ReactHtmlParser from 'react-html-parser'; 

var Eids = [{"name":"No Person","_id":"404"}];
var attd = [{"name":"No Person","_id":"404"}];
var atd = '';

function ViewAttendanceReport() {
  const [repo,setRepo] = useState([]);
  const [repo1,setRepo1] = useState([]);
  const [table, settable] = useState('');
  const [Eidss,setEidss] = useState('');
  const [tbl,settbl] = useState('');

  async function getRepo(){
    await axios.get('http://localhost:4000/attendance')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo(myRepo);
        if(myRepo.length >0){
          settable('<tr><th>EID</th><th>Name</th><th>Marked Time</th></tr>');
        }

      });

      await axios.get('http://localhost:4000/users')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        setRepo1(myRepo);

      }); 
      atd = '';
      for (var i=0; i<attd.length;i++){
        settable('<p>Loading .</p>');
        atd = (atd + '<tr><td>' + attd[i].eid + '</td><td>'+ attd[i].name + '</td><td>' + attd[i].mo + '/' + attd[i].date + ' - ' + attd[i].hrs + ':'+  attd[i].min+ '</td></tr>');
        
      }
      settable('<tr><th>EID</th><th>Name</th><th>Marked Time</th></tr>');
      settbl(atd);
  };

  function autoselect(){
    Eids=[];
    attd=[];
    repo1.map((repos) => ( Eids.push(repos)));
    repo.map((repos1) => ( attd.push(repos1)));
    //console.log(Eids);
  }

  async function onSubmit(event) {
    event.preventDefault();
    console.log(Eidss)
    if (Eidss.length === 0){
      alert("Please Select User!.");  //ALERT BOX
    }else{
      settable('<tr><th>EID</th><th>Name</th><th>Marked Time</th></tr>');
      await axios.get('http://localhost:4000/attendance/' +Eidss._id )
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo1 = response.data;

      try{    //update the table
        settbl('<tr><td>' + Eidss._id  + '</td><td>'+ Eidss.name + '</td><td>' + myRepo1[0].hrs + ':'+  myRepo1[0].min+ '</td></tr>');
      } catch (err){
        settable('<tr><th>Error</th></tr>');
        settbl('<tr><td> He/She Need to Mark Attendance!!. </td></tr>');
          console.log(err);
      }

       
        console.log(myRepo1)
      });
    }
    console.log(Eidss.length);
  }

  useEffect(() => getRepo(),[]);
    return (
      <div>
        {autoselect()}
        <div className="prof">
          <div>
          <form onSubmit={onSubmit}>
          <Autocomplete
            onChange={(event, value) => setEidss(value)}
            values={Eidss}
            id="tags-standard"
            limitTags={1}
            size="small"
            options={Eids}
            getOptionLabel={(option) => option.username}
            renderInput={(params) => (
              <TextField 
                {...params}
                style={{ width: 350 }}
                variant="standard"
                label="User Name"
                placeholder="Names"
              />
            )}
          /><br></br>
          <Button variant="contained" color="secondary"  type="submit">Search</Button><br></br><br></br><br></br>
          </form>
          </div>
          <br></br>
          <table>
          {ReactHtmlParser(table)}
          {ReactHtmlParser(tbl)}
          </table>
        <br></br>
        </div>
      </div>
    )
  }
  
  export default ViewAttendanceReport