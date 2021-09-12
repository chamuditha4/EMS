import React, { useEffect, useState  } from 'react';
import  './../../styles/App.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'; 

function ViewLateWorkReport() {
  const [table, settable] = useState('');
  const [late, setlate] = useState('');

  async function getRepo(){
    await axios.get('http://localhost:4000/attendance')
      .then(response => {
       // console.log(JSON.stringify(response.data));
        const myRepo = response.data;
        if(myRepo.length >0){
          settable('<tr><th>EID</th><th>Name</th><th>Marked Time</th></tr>');

          for (var i=0; i<myRepo.length;i++){
            if (myRepo[i].hrs >= 8){
              setlate(late + '<tr><td>' + myRepo[i].eid + '</td><td>'+ myRepo[i].name + '</td><td>' + myRepo[i].hrs + ':'+  myRepo[i].min+ '</td></tr>');
              console.log(late)
            }
            
          }
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
            {ReactHtmlParser(late)}
          </table>
        <br></br>
        </div>
      </div>
    )
  }
  
  export default ViewLateWorkReport