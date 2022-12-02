import React, { useState } from "react";
import {
  Button,
  Box,
  Flex,
  Image,
  Heading,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { IoPerson, IoMailSharp } from "react-icons/io5";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";
import SproutFoodLogo from "../images/2.png";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box w="100%">
      <Flex mt="2" mr="3" justifyContent="flex-end">
        <Text color="#48BB78">New to Sprout Food Solutions?</Text>
        <Link ml="2" fontWeight="bold" color="#276749" href="/signup">
          Sign Up
        </Link>
      </Flex>
      <Box maxW="md" mx="auto" px={{ base: "4", lg: "8" }} mt="9%">
        <Flex
          alignItems="center"
          justifyContent="center"
          mt="2vh"
          mb="5"
          w="100%"
        >
          <Image width="90px" height="90px" src={SproutFoodLogo} alt="logo" />
          <Heading
            ml="5"
            textAlign="center"
            fontWeight="extrabold"
            fontSize="48px"
            bgClip="text"
            whiteSpace="nowrap"
            bgGradient="linear(to-t,#2F855A,#68D391)"
            onClick={() => navigate("/", { replace: true })}
          >
            Sprout Food Solutions
          </Heading>
        </Flex>
      </Box>
      <Card maxW="xl" mx="auto">
        <Heading
          ml="5"
          textAlign="center"
          size="xl"
          fontWeight="extrabold"
          fontSize="36px"
          //   bgClip="text"
          color="green.500"
        >
          Login
        </Heading>
        <Text
          mt="1"
          mb="2"
          align="center"
          maxW="xl"
          fontWeight="regular"
          bgClip="text"
          bgGradient="linear(to-t,#2F855A,#68D391)"
        >
          <Text as="span">
            Welcome back to Sprout Food Solutions! [Enter more text here.]
          </Text>
        </Text>
        <FormControl mt="3">
          <FormLabel
            fontWeight="bold"
            fontSize="24px"
            bgClip="text"
            bgGradient="linear(to-t,#2F855A,#68D391)"
          >
            Email
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IoMailSharp fontSize="25px" color="#276749" />
            </InputLeftElement>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
            />
          </InputGroup>
        </FormControl>
        <FormControl mt="3">
          <FormLabel
            fontWeight="bold"
            fontSize="24px"
            bgClip="text"
            bgGradient="linear(to-t,#2F855A,#68D391)"
          >
            Password
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <IoPerson fontSize="25px" color="#276749" />
            </InputLeftElement>
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="password"
              placeholder="Password"
              required
              // value={currUser?.username}
              // onChange={(evt) => {
              //         setCurrUser({
              //         username: evt.target.value,
              //         email: currUser?.email,
              //         password: currUser?.password,
              //         type: currUser?.type,
              //         })
              //     }
              // }
            />
            <InputRightElement width="4.5rem">
              <IconButton
                aria-label={showPassword ? "Mask password" : "Reveal password"}
                bg="transparent !important"
                size="lg"
                h="auto"
                ml="5"
                icon={
                  showPassword ? (
                    <HiEye color="#276749" fontSize="25px" />
                  ) : (
                    <HiEyeOff color="#276749" fontSize="25px" />
                  )
                }
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          colorScheme="green"
          mt="6"
          fontSize="20px"
          w="100%"
          maxW="100%"
          bgClip="background"
          bgGradient="linear(to-t,#2F855A,#68D391)"
          fontWeight="bolder"
          _hover={{ bgGradient: "linear(to-t,#2C4187,#5E81FF)" }}
          onClick={() => {
            console.log("clicked");
            navigate("/home");
          }}
        >
          Login
        </Button>
      </Card>
    </Box>
  );
};

export default Login;
