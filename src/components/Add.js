import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";

import { Box } from "@chakra-ui/react";



function Add() {
  const [sid, setsid] = useState();
  const [gen, setgen] = useState();
  const [pedu, setpedu] = useState();
  const [lunch, setlunch] = useState();
  const [test, settest] = useState();
  const [race, setrace] = useState();
  const [math, setmath] = useState();
  const [read, setread] = useState();
  const [write, setwrite] = useState();
 

  const addhandler = () => {
    axios .post("http://localhost:5000/add", {
        i: sid,
        g: gen,
        rc: race,
        p: pedu,
        l: lunch,
        t: test,
        m: math,
        r: read,
        w: write,
      })
      .then((response) => {
        console.log(response);
        alert("Data added successfully... ")
        window.location.reload(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form">
      <TextField
        sx={{ width: 290 }}
        label="Id"
        variant="filled"
        onChange={(e) => {
          setsid(e.target.value);
        }}
      />{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        sx={{ width: 290 }}
        label="Gender"
        variant="filled"
        onChange={(e) => {
          setgen(e.target.value);
        }}
      />{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        sx={{ width: 290 }}
        label="Parental Education"
        variant="filled"
        onChange={(e) => {
          setpedu(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <TextField
        sx={{ width: 290 }}
        label="Lunch"
        variant="filled"
        onChange={(e) => {
          setlunch(e.target.value);
        }}
      />{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        sx={{ width: 290 }}
        label="Test Prepration"
        variant="filled"
        onChange={(e) => {
          settest(e.target.value);
        }}
      />{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        sx={{ width: 290 }}
        label="Race"
        variant="filled"
        onChange={(e) => {
          setrace(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <TextField
        sx={{ width: 290 }}
        label="Math Score"
        variant="filled"
        onChange={(e) => {
          setmath(e.target.value);
        }}
      />{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        sx={{ width: 290 }}
        label="Reading Score"
        variant="filled"
        onChange={(e) => {
          setread(e.target.value);
        }}
      />{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        sx={{ width: 290 }}
        label="Writing Score"
        variant="filled"
        onChange={(e) => {
          setwrite(e.target.value);
        }}
      />
      <br />
      <br />
      <Box
        component="span"
        m={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pr: 80 }}
      >
        <Button
          id="formbtn"
          variant="contained"
          onClick={addhandler}
          sx={{ height: 40, width: 230 }}
        >
          Submit
        </Button>
        <a href="/">
          <Button variant="contained">Go Back to Dashboard</Button>
        </a>
        
      </Box>
      
    </div>
  );
}

export default Add;
