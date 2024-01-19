import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Images/NavImg/Logo.png";
// import { RiMenu4Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import Menu from "../Components/Menu";

export default function Navbar() {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      p={4}
      //   border={"1px solid black"}
      backgroundColor={"#FAFFFF"}
      borderRadius={"1em"}
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
      }
      position={"sticky"}
      top={0}
      zIndex={999}
    >
      <Box
        ml={{ base: "0", md: "3em", lg: "4em", xl: "5em" }}
        // border={"1px solid black"}
        width={"30%"}
        p={"0.5em"}
      >
        <Image src={logo} alt="logo" />
      </Box>
      <Box
        // border={"1px solid black"}
        width={"65%"}
        display={"flex"}
        justifyContent={"end"}
        gap={4}
        p={"0.5em"}
        mr={{ base: "0", md: "3em", lg: "4em", xl: "5em" }}
      >
        <Button
          backgroundColor="#F9ECE3"
          border="1px solid #DC6E66"
          color={"black"}
          _hover={{ backgroundColor: "#DC6E66", color: "white" }}
        >
          <GoSearch fontSize={"1.2em"} />
        </Button>
        <Button
          backgroundColor="#F9ECE3"
          border="1px solid #DC6E66"
          color={"black"}
          _hover={{ backgroundColor: "#DC6E66", color: "white" }}
        >
          <Text fontWeight="bold" fontFamily={"Rasa"} letterSpacing={"0.1em"}>
            Sign Up
          </Text>
        </Button>
        {/* <Button
          backgroundColor="#DC6E66"
          color={"white"}
          _hover={{
            backgroundColor: "#F9ECE3",
            color: "#DC6E66",
            border: "1px solid #DC6E66",
          }}
        >
          <RiMenu4Fill fontSize={"1.5em"} />
        </Button> */}
        <Menu />
      </Box>
    </Flex>
  );
}
