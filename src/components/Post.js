
import React from 'react'
import { useState } from 'react';
import { TextField } from "@mui/material";
import { Button } from '@mui/material';
import axios from 'axios';

function Post() {

    const [ann, setann]=useState("")
    const [name,setname]=useState("")
    const [time,settime]=useState("")

    const posthandler=()=>{
        const today = new Date();
       
        
        axios.post('http://localhost:5000/post',{n:name,a:ann,t:today.toLocaleTimeString()})
        .then((response) => {
          console.log(response)
          
           alert("Posted Successfully...")
           window.location.reload(false);

        })
        
        .catch(error => console.log(error));
    }
    return (
        <center>
        <div className="card">
        <div className="card-header">
        <h2>Make Announcement</h2>  
        </div>
        <div className="card-body">
          <h5 className="card-title">
              <TextField  label='Name' id='name' onChange={(e)=>setname(e.target.value)}></TextField>
          </h5>
          <p className="card-text">
          <TextField
          id="outlined-multiline-flexible"
          label="Write message"
          multiline
          maxRows={10}
         
          onChange={(e)=>setann(e.target.value)}
        />
          </p>
          <Button variant="contained" onClick={posthandler}>Post</Button>
        </div>
      </div>
      </center>
    )
}

export default Post