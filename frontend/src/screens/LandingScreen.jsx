import React from 'react'
import { Button, Flex, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {

    const navigate = useNavigate()

    return (
        <Box>
            <Flex>
                <Button onClick={() => navigate("/signup", {replace: true})} variant="outline" colorScheme="green">Sign Up</Button>
                <Button onClick={() => navigate("/login", {replace: true})} ml="5" colorScheme="green">Login</Button>
            </Flex>
        </Box>
    )
}

export default LandingScreen;