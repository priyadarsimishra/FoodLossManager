import React from "react";
import { Heading, Button, Box, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandingPageNav = () => {
  const navigate = useNavigate();

  return (
    <Flex
      w="100%"
      bg="white"
      p="3"
      justifyContent="space-between"
      alignItems="center"
      zIndex={3}
    >
      <Flex alignItems="center"></Flex>
      <Flex mr="5vw">
        <Box ml="2">
          <Button
            colorScheme="white"
            size="lg"
            // onClick={() => router.push("/login")}
          >
            <Text
              bgClip="text"
              bgGradient="linear(to-t,#2F855A,#68D391)"
              fontSize="24px"
              fontWeight="bold"
            >
              About Us
            </Text>
          </Button>
        </Box>
        <Box ml="2">
          <Button
            colorScheme="white"
            size="lg"
            onClick={() => navigate("/login")}
          >
            <Text
              bgClip="text"
              bgGradient="linear(to-t,#2F855A,#68D391)"
              fontSize="24px"
              fontWeight="bold"
            >
              Login
            </Text>
          </Button>
        </Box>
        <Box ml="2">
          <Button
            colorScheme="white"
            size="lg"
            onClick={() => navigate("/signup")}
          >
            <Text
              bgClip="text"
              bgGradient="linear(to-t,#2F855A,#68D391)"
              fontSize="24px"
              fontWeight="bold"
            >
              Sign Up
            </Text>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LandingPageNav;
