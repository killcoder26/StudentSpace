import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';//important dont delete
import { Grid, GridItem } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2';
import Statistics from './Statistics';

function Home() {

    const [data, setdata] = useState([])

    let m_arr = []
    let id_arr = []

    useEffect(() => {

        const fet = () => {
            axios.get('http://localhost:5000')
                .then((response) => {

                    setdata(response.data)
                    console.log(response.data)
                })



                .catch(error => console.log(error));
        }

        fet()

        console.log(m_arr)
        console.log(id_arr)
    }, []);
    const state = {
        labels: data.filter(x => x.id <= 10).map(x => x.id),
        datasets: [
            {
                label: 'Maths',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#1B9BF6',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: data.map(x => x.math),

            }
        ]
    }

    const state2 = {
        labels: data.filter(x => x.id <= 10).map(x => x.id),
        datasets: [
            {
                label: 'Reading',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#1B9BF6',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: data.map(x => x.reading),

            }
        ]
    }
    return (

       
        <div>
            
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'  //2 rows
                templateColumns='repeat(4, 1fr)' //4columns
                gap={20}
            >
                 <GridItem rowSpan={1} colSpan={2} > 
                 
                    <Line
                        data={state}
                        options={{
                            title: {
                                display: true,
                                text: 'Maths Scores',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Bar
                        data={state2}
                        options={{
                            title: {
                                display: true,
                                text: 'Reading Scores',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </GridItem>               
                
           
            <GridItem rowSpan={1} colSpan={4}> <Statistics/></GridItem>
            </Grid>
        </div>
    )
}

export default Home