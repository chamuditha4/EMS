import React from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



function EditTasks() {
    return (
      <div>
        <div className="prof">
          <h2>Edit Tasks</h2>
          <select>
            <option value="908">Web Design [0098]</option>
            <option value="408">Web Design [0097]</option>
            <option value="508">Web Design [0096]</option>
          </select>
          <br></br><br></br>
          <Button variant="contained" color="primary">
          Select Task
          </Button><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Title" defaultValue="Web Design Project" /><br></br><br></br>
          <Autocomplete
            multiple
            id="tags-standard"
            limitTags={1}
            size="small"
            options={Eids}
            getOptionLabel={(option) => option.title}
            defaultValue={[Eids[3]]}
            renderInput={(params) => (
              <TextField 
                {...params}
                style={{ width: 350 }}
                variant="standard"
                label="EIDs"
                placeholder="EIDs"
              />
            )}
          /><br></br>
          <TextField id="outlined-multiline-flexible" label="Job Description" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue="1. Open Project using link https://bit.ly/2bGhJ"/><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Price" defaultValue="1890.65$" /><br></br><br></br>
          <Button variant="contained" color="secondary">
          Edit Task
          </Button><br></br><br></br>
        </div>
      </div>
    )
  }
  
  const Eids = [
    { title: 'Scott R Todd', Eid: 3006 },
    { title: 'Terry J Moore', Eid: 3004  },
    { title: 'Brittany D Bard', Eid: 3003  },
    { title: 'James D Reed', Eid: 3002  },
    { title: 'Marc L Benton', Eid: 3008  },
  ];
  export default EditTasks