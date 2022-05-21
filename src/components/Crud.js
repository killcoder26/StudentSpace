import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


function Crud() {
  const [searchdata, setsearchdata]=useState("")
  const [data, setdata] = useState([])
  const [pageSize, setPageSize] = useState(5);
  const [selectionModel, setSelectionModel] = useState([]);
  const [plunch,setplunch]=useState("")
  const [ptest,setptest]=useState("")

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setplunch(data.filter(x=>x.id===selectionModel[0]).map(x=>x.lunch))
    setptest(data.filter(x=>x.id===selectionModel[0]).map(x=>x.test_prep))
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  const columns =
    [{ field: 'id', headerName: 'Id', width: 80 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'race', headerName: 'Race', width: 140 },
    { field: 'parental_edu', headerName: 'Parental Education', width: 170 },
    { field: 'lunch', headerName: 'Lunch', width: 170 },
    { field: 'test_prep', headerName: 'Test Prep', width: 170 },
    { field: 'math', headerName: 'Maths ', width: 130 },
    { field: 'reading', headerName: 'Reading', width: 130 },
    { field: 'writing', headerName: 'Writing ', width: 130 }

    ]

  useEffect(() => {
    const fet = () => {
      axios.get('http://localhost:5000')
        .then((response) => {


          const mydata = [...response.data]
          setdata(mydata);
          console.log(selectionModel);
        })
        .catch(error => console.log(error));
    }
    fet()

  }, []);

  let rows = [...data]

  const delhandler = () => {
    for (let j = 0; j < selectionModel.length; j++) {
      axios.post('http://localhost:5000/delete', { i: selectionModel[j] })
        .then((response) => {

          console.log(response);
          console.log(selectionModel);
          alert("Deleted Successfully...")
          window.location.reload(false);

        })
        .catch(error => console.log(error));

    }
  }


  const edithandler = () => {
    
    const lunch = document.getElementById("lun").value;
    const test = document.getElementById("tst").value;
    axios.post('http://localhost:5000/edit', { idd: selectionModel[0], lu: lunch, tp: test })
      .then((response) => {
        setOpen(false);
        
    
        console.log(selectionModel)
      })
      .catch(error => console.log(error));
      
  }
  
  
    const ser = () => {
     
      axios.post('http://localhost:5000/search',{sd:searchdata})
        .then((response) => {
          setdata(response.data)
        })
        .catch(error => console.log(error));
    }
    
  return (
    <div>
      <center>
      <Link to='/Add'>
        <Button variant='contained'>Add</Button></Link>&nbsp;&nbsp;&nbsp;
      <Button variant='contained' onClick={delhandler}>Delete</Button>&nbsp;&nbsp;&nbsp;

      <Button onClick={handleClickOpen} variant='contained'>Edit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField  sx={{ width: 300, maxHeight: 1, marginRight: 3 }} id="outlined-basic" label="Search Parental education" variant="filled" onChange={(e)=>{setsearchdata(e.target.value)}}/>
      <Button sx={{ height: 39, width: 140, borderRadius: 2 }}  onClick={ser} variant='contained'>Search</Button>
      <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit Student Details
            </Typography>
            <Button autoFocus color="inherit" onClick={edithandler}>
             Edit
            </Button>
          </Toolbar>
        </AppBar>
        <TextField defaultValue={plunch} label='Lunch' id='lun' variant='filled' /><br/><br/>
        <TextField defaultValue={ptest} label='Test Preparation' id='tst' variant='filled' />
      </Dialog>
   
    </div>
    </center>

      <div style={{ height: 400, position: "relative" }} className='datagrid'>


        <DataGrid sx={{ color: 'black' }}
          rows={rows}
          getRowId={(rows) => rows.id}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20, 30]}
          pagination
          checkboxSelection
          onSelectionModelChange={(row) => {
            setSelectionModel(row);

          }
          }

          selectionModel={selectionModel}
          {...data}

        />
      </div>
    </div>


  )
}

export default Crud