import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Images/NavImg/Logo.png";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box
        // height={"20em"}
        // border={"1px solid red"}
        bgGradient="linear(to-t, #0D0D0D, #4B4B4B)"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"0.5em"}
        p={"2em"}
        borderBottom={"0.7em solid #DC6E66"}
      >
        <Image src={logo} alt="logo" width={"10em"} />
        <Text color={"white"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
        <Center display={"flex"} fontSize={"2em"} fontWeight={"bold"}>
          <Text color={"orange"}>-</Text>
          <Text color={"white"}>-----</Text>
          <Text color={"orange"}>-</Text>
        </Center>
        <Center color={"black"} display={"flex"} gap={"0.2em"}>
          <Box
            backgroundColor={"#DC6E66"}
            p={"0.2em"}
            border={"1.6px solid white"}
            borderRadius={"0.5em"}
          >
            <RiFacebookFill fontSize={"1.5em"} />
          </Box>
          <Box
            backgroundColor={"#DC6E66"}
            p={"0.2em"}
            border={"1.6px solid white"}
            borderRadius={"0.5em"}
          >
            <BiLogoInstagramAlt fontSize={"1.5em"} />
          </Box>
          <Box
            backgroundColor={"#DC6E66"}
            p={"0.2em"}
            border={"1.6px solid white"}
            borderRadius={"0.5em"}
          >
            <FaLinkedinIn fontSize={"1.5em"} />
          </Box>
          <Box
            backgroundColor={"#DC6E66"}
            p={"0.2em"}
            border={"1.6px solid white"}
            borderRadius={"0.5em"}
          >
            <FaTwitter fontSize={"1.5em"} />
          </Box>
        </Center>
      </Box>
    </>
  );
}
