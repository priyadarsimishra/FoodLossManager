import React from "react";
import { Box, Flex, Avatar, Text, Stack, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex
        w="18vw"
        h="100vh"
        bgColor="white"
        borderRight="1px solid #f1f1f1"
        boxShadow="1px 0 2px 1px #f1f1f1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="column">
          <Flex flexDirection="column" alignItems="center" mt="-10vh">
            <Avatar
              size="xl"
              name="Restaurant Logo"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/440px-Chipotle_Mexican_Grill_logo.svg.png"
              border="2px solid #f4f4f4"
            />
            <Text mt="2" fontSize="24px" fontWeight="bold">
              Chipotle
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Stack direction="column" spacing={6} align="center" mt="15vh">
              <Button colorScheme="green" variant="solid" w="12vw">
                <Text fontSize="20px">Home</Text>
              </Button>
              {/* <Button colorScheme='green' variant='outline' w="12vw">
                                <Text fontSize='20px'>Sales</Text>
                            </Button> */}
              <Button colorScheme="green" variant="outline" w="12vw">
                <Text fontSize="20px">Inventory</Text>
              </Button>
              {/* <Button colorScheme='green' variant='outline' w="12vw">
                                <Text fontSize='20px'>Products</Text>
                            </Button> */}
              <Button colorScheme="green" variant="outline" w="12vw">
                <Text fontSize="20px">Predictions</Text>
              </Button>
            </Stack>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Stack direction="column" spacing={6} align="center" mt="15vh">
              <Button
                colorScheme="green"
                variant="solid"
                w="12vw"
                leftIcon={<ArrowBackIcon color="white" fontSize="22px" />}
                onClick={() => {
                  // TODO: do logout logic
                  navigate("/");
                }}
              >
                <Text fontSize="20px">Logout</Text>
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
