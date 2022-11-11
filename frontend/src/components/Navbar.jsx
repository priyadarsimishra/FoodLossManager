import React from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import SproutFoodLogo from "../images/2.png";

const Navbar = () => {
  return (
    <Box>
      <Flex
        w="82vw"
        h="auto"
        bgColor="white"
        borderBottom="1px solid #f1f1f1"
        p="1"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="0 4px 2px -2px #f1f1f1"
      >
        <Box>
          <Image
            src={SproutFoodLogo}
            alt="logo"
            boxSize="60px"
            objectFit="cover"
          />
        </Box>
        {/* <Box>
          <InputGroup>
            <Input variant="filled" placeholder="Search" width="40vw" />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                colorScheme="green"
              />
            </InputRightElement>
          </InputGroup>
        </Box> */}
        <Box pr="3">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon fontSize="20px" color="green.400" />}
              variant="outline"
              borderWidth="2px"
              color="green.400"
              borderColor="green.400"
              fontWeight="bold"
            />
            <MenuList>
              <MenuItem
                icon={<SettingsIcon fontSize="20px" color="green.500" />}
                color="green.500"
                fontWeight="bold"
              >
                Settings
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
