import React, { useEffect, useState } from 'react'
import { Flex, Box, Text } from "@chakra-ui/react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";

const Home = () => {
    const[message, setMessage] = useState([]);


    const date = new Date(Date.now());

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/inventory-activity").then((data) => {
            setMessage(data.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const data = [
        {name: (message[0] ? message[0].name : "") , uv: 400, pv: 2400, amt: (message[0] ? message[0].net : 0)}, 
        {name: (message[1] ? message[1].name : "") , uv: 400, pv: 2400, amt: (message[1] ? message[1].net : 0)}, 
        {name: (message[2] ? message[2].name : "") , uv: 400, pv: 2400, amt: (message[2] ? message[2].net : 0)}, 
        {name: (message[3] ? message[3].name : "") , uv: 400, pv: 2400, amt: (message[3] ? message[3].net : 0)}, 
        // {name: (message[4] ? message[4].name : ""), uv: 400, pv: 2400, amt: (message[4] ? message[4].net : 0)}, 
    ]

    return (
      <Box>
        <Flex justifyContent="center">
            <Box>
                <Sidebar />
            </Box>
            <Box>
                <Navbar />
                <Box p="2" width="100%" h="93.4vh" bgColor="#fcfcfc">
                    <Text color="green.500" fontSize="24px" fontWeight="bold">
                        Today's Snapshot <i>({date.getMonth()+1}/{date.getDate()}/{date.getFullYear()})</i>
                    </Text>
                    API Response: 
                    {message?.map((data) => 
                        <div>
                            <h1>Name={data.name}, Menu Cost=${data.menu_cost}, Quantity={data.quantity}, Net=${data.net}</h1>
                        </div>
                    )}
                    <Box mt="10">
                        <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="column" dataKey="amt" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="8 8" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                    </Box>
                </Box>
                
            </Box>
        </Flex>
      </Box>
    )
}

export default Home;
