import React from "react";
import { Heading, Button, Text, Flex, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import LandingPageNav from "../components/LandingPageNav";
import LandingPageBg from "../images/bg.png";
import SproutFoodLogo from "../images/2.png";

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    // <Box>
    //     <Flex>
    //         <Button onClick={() => navigate("/signup", {replace: true})} variant="outline" colorScheme="green">Sign Up</Button>
    //         <Button onClick={() => navigate("/login", {replace: true})} ml="5" colorScheme="green">Login</Button>
    //     </Flex>
    // </Box>
    <div>
      <LandingPageNav />
      <Flex w="100%" mb="0" h="87vh">
        <Flex w="55%" bgColor="white">
          <Flex
            m="auto"
            w="70%"
            p="2"
            h="60%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={SproutFoodLogo}
              alt="logo"
              boxSize="150px"
              objectFit="cover"
            />
            <Text color="green" fontSize="3.6vw" fontWeight="bolder">
              Sprout Food Solutions
            </Text>
            <Text color="green" fontSize="1.2vw" fontWeight="bolder" mb="10">
              A platform designed to help teachers make learning more engaging
              and entertaining for all students.
            </Text>
            <Button
              size="lg"
              padding={"8"}
              w="40%"
              bgColor="white"
              boxShadow="5px 5px 16px #2F855A,-5px -5px 16px #68D391;"
              rightIcon={
                <ArrowForwardIcon
                  fontSize="1.8vw"
                  fontWeight="bold"
                  color="#2F855A"
                />
              }
              onClick={() => navigate("/signup")}
            >
              <Text
                fontWeight="bolder"
                bgClip="text"
                bgGradient="linear(to-t,#2F855A,#68D391)"
                fontSize="1.8vw"
              >
                Sign Up
              </Text>
            </Button>
          </Flex>
        </Flex>
        <Flex w="45%" bgColor="white">
          <Flex m="auto" w="80%" h="60%">
            <Image
              src={LandingPageBg}
              w="700px"
              h="600px"
              position="fixed"
              mt="-10vh"
              ml="-10vw"
              boxShadow={"5px 5px 16px #2F855A,-5px -5px 16px #68D391;"}
              zIndex={1}
              borderRadius="5"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        bgColor="white"
        color="white"
        h="5.5vh"
        justifyContent="space-between"
      >
        {/* Footer */}
        <Flex></Flex>
        <Flex>
          <Text
            size="lg"
            ml="3"
            fontSize="12px"
            fontWeight="light"
            mr="2"
            mt="8"
          >
            Product associated with Westwood High School
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default LandingScreen;
