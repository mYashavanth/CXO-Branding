import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        backgroundColor="#DC6E66"
        color={"white"}
        _hover={{
          backgroundColor: "#F9ECE3",
          color: "#DC6E66",
          border: "1px solid #DC6E66",
        }}
        onClick={onOpen}
      >
        <RiMenu4Fill fontSize={"1.5em"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"#DA6B63"} p={"1.5em"}>
          <DrawerCloseButton
            color={"black"}
            backgroundColor={"white"}
            mt={"2em"}
            mr={"3em"}
          />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody border={"1px solid white"} borderRadius={"1em"}>
            <Box
              display={"grid"}
              gridTemplateColumns={{
                base: "1fr",
                md: "1fr",
                lg: "1fr 1fr",
                xl: "1fr 1fr",
              }}
              placeItems={"center"}
              gap={"2em"}
              // border={"1px solid white"}
              w={{ base: "100%", md: "100%", lg: "80%", xl: "80%" }}
              m={"auto"}
              p={"0.5em"}
              h={{ base: "100%", md: "100%", lg: "90%", xl: "80%" }}
            >
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid white"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{backgroundColor: "#E38E88"}}
              >
                <Heading>Home</Heading>
                <FaArrowRight />
              </Center>
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid white"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{backgroundColor: "#E38E88"}}
              >
                <Heading>Featured Stories</Heading>
                <FaArrowRight />
              </Center>
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid white"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{backgroundColor: "#E38E88"}}
              >
                <Heading>Stories</Heading>
                <FaArrowRight />
              </Center>
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid white"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{backgroundColor: "#E38E88"}}
              >
                <Heading>Games</Heading>
                <FaArrowRight />
              </Center>
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid white"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{backgroundColor: "#E38E88"}}
              >
                <Heading>eBooks</Heading>
                <FaArrowRight />
              </Center>
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid white"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{backgroundColor: "#E38E88"}}
              >
                <Heading>Add Your Story</Heading>
                <FaArrowRight />
              </Center>
              <Center
                display={"flex"}
                justifyContent={"space-between"}
                width={{ base: "100%", md: "60%", lg: "85%", xl: "70%" }}
                borderBottom={"2px solid white"}
                p={"0.3em"}
                borderRadius={"0.5em"}
                _hover={{backgroundColor: "#E38E88"}}
              >
                <Heading>Contact Us</Heading>
                <FaArrowRight />
              </Center>
              <Center color={"black"} display={"flex"} gap={"0.8em"} p={"0.5em"}>
                <Box
                  backgroundColor={"#F2B86B80"}
                  p={"0.2em"}
                  border={"1.6px solid white"}
                  borderRadius={"0.5em"}
                >
                  <RiFacebookFill fontSize={"1.5em"} />
                </Box>
                <Box
                  backgroundColor={"#F2B86B80"}
                  p={"0.2em"}
                  border={"1.6px solid white"}
                  borderRadius={"0.5em"}
                >
                  <BiLogoInstagramAlt fontSize={"1.5em"} />
                </Box>
                <Box
                  backgroundColor={"#F2B86B80"}
                  p={"0.2em"}
                  border={"1.6px solid white"}
                  borderRadius={"0.5em"}
                >
                  <FaLinkedinIn fontSize={"1.5em"} />
                </Box>
                <Box
                  backgroundColor={"#F2B86B80"}
                  p={"0.2em"}
                  border={"1.6px solid white"}
                  borderRadius={"0.5em"}
                >
                  <FaTwitter fontSize={"1.5em"} />
                </Box>
              </Center>
            </Box>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
