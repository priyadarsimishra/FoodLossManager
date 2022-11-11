import { Box } from "@chakra-ui/react";
import * as React from "react";

export const Card = (props) => (
  <Box
    bg="white.50"
    py="8"
    px={{ base: "4", md: "10" }}
    boxShadow="2xl"
    rounded={{ sm: "lg" }}
    {...props}
  />
);