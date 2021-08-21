import React from 'react';
import Button from '@material-ui/core/Button';
import  './../../../styles/App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



function NewTasks() {
    return (
      <div>
        <div className="prof">
          <h2>New Tasks</h2>
          <TextField id="standard-uncontrolled" label="Title" defaultValue="" /><br></br><br></br>
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
                placeholder="Favorites"
              />
            )}
          /><br></br>
          <TextField id="outlined-multiline-flexible" label="Job Description" multiline Rows={4} variant="outlined" style = {{width: 350}} defaultValue=""/><br></br><br></br>
          <TextField id="standard-uncontrolled" label="Price" defaultValue="" /><br></br><br></br>
          <Button variant="contained" color="secondary">
          Add Task
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
  export default NewTasks