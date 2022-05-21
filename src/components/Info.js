import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState } from "react";
import { Center,Box} from "@chakra-ui/react";
import axios from "axios";
import Chart from "chart.js/auto"; //important dont delete
import { Grid, GridItem } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";

function Info() {
  const [searchid, setsearchid] = useState();
  const [sid, setsid] = useState();
  const [gen, setgen] = useState();
  const [pedu, setpedu] = useState();
  const [lunch, setlunch] = useState();
  const [test, settest] = useState();
  const [race, setrace] = useState();
  const [math, setmath] = useState();
  const [read, setread] = useState();
  const [write, setwrite] = useState();

  const fet = () => {
    axios
      .post("http://localhost:5000/searchid", { studid: searchid })
      .then((response) => {
        setsid(response.data[0].id);
        setgen(response.data[0].gender);
        setpedu(response.data[0].parental_edu);
        setlunch(response.data[0].lunch);
        settest(response.data[0].test_prep);
        setrace(response.data[0].race);
        setmath(response.data[0].math);
        setread(response.data[0].reading);
        setwrite(response.data[0].writing);

        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const state = {
    labels: ["math", "reading", "writing"],
    datasets: [
      {
        label: "score ",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#FFFF00",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [math, read, write],
      },
    ],
  };

  return (
    <div><div>
      <left>
        <TextField
          sx={{ width: 200, maxHeight:1, marginRight: 5 }}
          id="outlined-basic"
          label="Student Id"
          variant="filled"
          onChange={(e) => {
            setsearchid(e.target.value);
          }}
        />
        <Button
          sx={{ height: 39, width: 140, borderRadius: 2 }}
          variant="contained"
          onClick={fet}
        >
          Get Details
        </Button>
      </left>
      </div>
      <Grid
        h="200px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        
          <GridItem colSpan={1}>
            <Center
              bg="gray"
              h="400px"
              w="500px"
              
              marginLeft="10px"
              color="white"
              fontWeight="bold"
              fontSize="20px"
              borderRadius="20px"
              
            >
              Student id: {sid} <br />
              Gender: {gen}
              <br />
              Parental Education: {pedu}
              <br />
              Race: {race}
              <br />
              Test Preparation: {test}
              <br />
              Lunch: {lunch}
              <br />
              Maths marks: {math}
              <br />
              Reading marks: {read}
              <br />
              Writing marks: {write}
              <br />
              
            </Center>
          </GridItem>
       

        <GridItem colSpan={1}>
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: "Maths Scores",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default Info;
