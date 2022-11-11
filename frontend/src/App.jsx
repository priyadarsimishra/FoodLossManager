import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import LandingScreen from "./screens/LandingScreen";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

function App() {
  return (
    <ChakraProvider>
      {/* <Home /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingScreen />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
