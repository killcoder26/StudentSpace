import React from "react";
import { Grid, GridItem, StatGroup } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

function Statistics() {
  const [data, setdata] = useState([]);
  const [mcount, setmcount] = useState();
  const [rcount, setrcount] = useState();
  const [wcount, setwcount] = useState();
  const [scount, setscount] = useState();
  const [tcount, settcount] = useState("");
  const [refetch, setrefetch] = useState(false);

  useEffect(() => {
    const fet = async () => {
      await axios
        .get("http://localhost:5000")
        .then((response) => {
          setrefetch(true);
          setdata(response.data);
          console.log(response.data);
          const result1 = data.filter((x) => x.math >= 80);
          setmcount(result1.length);

          const result2 = data.filter((x) => x.reading >= 80);
          setrcount(result2.length);

          const result3 = data.filter((x) => x.writing >= 80);
          setwcount(result3.length);

          const result4 = data.filter(
            (x) => x.test_prep === "Completed" || x.test_prep === "completed"
          );
          settcount(result4.length);

          setscount(response.data.length);
        })

        .catch((error) => console.log(error));
    };
    fet();
  }, [refetch]);
  return (
    <div>
      <StatGroup>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem>
          
            <Stat>
              <center>
                <StatLabel fontSize="20px"> Student Count</StatLabel>
                <StatNumber fontSize="30px">{scount}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                 
                </StatHelpText>
              </center>
            </Stat>
          
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
          <Stat>
              <center>
                <StatLabel fontSize="20px">  Maths 80+ Count</StatLabel>
                <StatNumber fontSize="30px">{mcount}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {(mcount / scount) * 100}%
                </StatHelpText>
              </center>
            </Stat>
             
           
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
          <Stat>
              <center>
                <StatLabel fontSize="20px">  Reading 80+ Count</StatLabel>
                <StatNumber fontSize="30px">{rcount}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {(rcount / scount) * 100}%
                </StatHelpText>
              </center>
            </Stat>
             
           
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
          <Stat>
              <center>
                <StatLabel fontSize="20px">  Writing 80+ Count </StatLabel>
                <StatNumber fontSize="30px">{scount}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {(wcount / scount) * 100}%
                </StatHelpText>
              </center>
            </Stat>
             
           
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
          <Stat>
              <center>
                <StatLabel fontSize="20px">  Test Prep completed:</StatLabel>
                <StatNumber fontSize="30px">{tcount}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {(tcount / scount) * 100}%
                </StatHelpText>
              </center>
            </Stat>
              
           
          </GridItem>
        </Grid>
      </StatGroup>
    </div>
  );
}

export default Statistics;
