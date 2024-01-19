import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import p1i1 from "../Images/img/p1i1.png";
import p2i1 from "../Images/img/p2i1.png";
import p2i2 from "../Images/img/p2i2.png";
import p2i3 from "../Images/img/p2i3.png";
import p2i4 from "../Images/img/p2i4.png";
import p2i5 from "../Images/img/p2i5.png";
import p3i1 from "../Images/img/p3i1.png";
import p3i2 from "../Images/img/p3i2.png";
import p4i1 from "../Images/img/p4i1.png";
import SliderComponent from "./SliderComponent";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      {/* Section 1 */}
      <Box
        // h="40em"
        backgroundColor={"#FFFAF0"}
        // border={"1px solid black"}
        p={"3em"}
        pb={"0.1em"}
      >
        <Box
          textAlign={"center"}
          width={{ base: "95%", md: "90%", lg: "80%", xl: "80%" }}
          margin={"auto"}
        >
          <Heading
            fontFamily={"Rakkas"}
            letterSpacing={"0.05em"}
            fontSize={{ base: "3em", md: "4em", lg: "5em", xl: "5em" }}
          >
            Real People, Real Stories!
          </Heading>
          <Center display={"flex"} fontSize={"2em"} fontWeight={"bold"}>
            <Text color={"red"}>-</Text>
            <Text>-----</Text>
            <Text color={"red"}>-</Text>
          </Center>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Center
            fontFamily={"Rakkas"}
            gap={"1em"}
            display={"flex"}
            flexDirection={{ base: "column", md: "row", lg: "row", xl: "row" }}
          >
            <Button
              border={"3px solid white"}
              backgroundColor={"#DC6E66"}
              letterSpacing={"0.12em"}
              fontSize={"1.5em"}
              boxShadow={
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              }
              _hover={{ backgroundColor: "#F9ECE3" }}
            >
              Kids
            </Button>
            <Button
              border={"3px solid white"}
              backgroundColor={"#F0CEB5"}
              letterSpacing={"0.12em"}
              fontSize={"1.5em"}
              boxShadow={
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              }
              _hover={{ backgroundColor: "#F9ECE3" }}
            >
              Teeanagers
            </Button>
            <Button
              border={"3px solid white"}
              backgroundColor={"#DC6E66"}
              letterSpacing={"0.12em"}
              fontSize={"1.5em"}
              boxShadow={
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              }
              _hover={{ backgroundColor: "#F9ECE3" }}
            >
              Adults
            </Button>
          </Center>
          <Image
            src={p1i1}
            alt="page1image1"
            width={{ base: "20em", md: "30em", lg: "40em", xl: "50em" }}
            margin={"auto"}
          />
        </Box>
      </Box>

      {/* Section 2 */}
      <Box
        //   h="40em"
        p={"3em"}
        backgroundColor={"#DA6B63"}
      >
        <Box
          width={{ base: "95%", md: "90%", lg: "80%", xl: "80%" }}
          margin={"auto"}
          textAlign={"center"}
        >
          <Heading
            fontFamily={"Rakkas"}
            letterSpacing={"0.05em"}
            fontSize={{ base: "2em", md: "3em", lg: "4em", xl: "4em" }}
          >
            Choice is Yours!
          </Heading>
          <Center display={"flex"} fontSize={"2em"} fontWeight={"bold"}>
            <Text color={"white"}>-</Text>
            <Text>-----</Text>
            <Text color={"white"}>-</Text>
          </Center>
          <Text color={"white"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Box
            fontFamily={"Rasa"}
            color={"white"}
            display={"flex"}
            gap={"1em"}
            mt={"3em"}
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"2em"}
              p={"1em"}
              borderBottom={{
                base: "1px solid white",
                md: "1px solid white",
                lg: "none",
                xl: "none",
              }}
            >
              <Heading
                size={"lg"}
                fontFamily={"Rakkas"}
                letterSpacing={"0.12em"}
              >
                Audio Stories
              </Heading>
              <Box
                display={"flex"}
                flexWrap={"wrap-reverse"}
                justifyContent={"center"}
                gap={"1em"}
                borderRight={{
                  base: "none",
                  md: "none",
                  lg: "1px solid white",
                  xl: "1px solid white",
                }}
                p={"1em"}
              >
                <Image
                  src={p2i3}
                  alt="page2image3"
                  width={"30%"}
                  borderRadius={"0.4em"}
                />
                <Image
                  src={p2i4}
                  alt="page2image4"
                  width={"30%"}
                  borderRadius={"0.4em"}
                />
                <Image
                  src={p2i5}
                  alt="page2image5"
                  width={"30%"}
                  borderRadius={"0.4em"}
                />
                <Image
                  src={p2i1}
                  alt="page2image1"
                  width={"30%"}
                  borderRadius={"0.4em"}
                />
                <Image
                  src={p2i2}
                  alt="page2image2"
                  width={"30%"}
                  borderRadius={"0.4em"}
                />
              </Box>
              <Button
                fontFamily={"Rakkas"}
                fontSize={"1em"}
                letterSpacing={"0.1em"}
                width={"10em"}
                margin={"auto"}
              >
                View More
              </Button>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"2em"}
              p={"1em"}
            >
              <Heading
                size={"lg"}
                fontFamily={"Rakkas"}
                letterSpacing={"0.12em"}
              >
                Video Stories
              </Heading>
              <Box
                display={"flex"}
                flexWrap={"wrap-reverse"}
                justifyContent={"center"}
                gap={"1em"}
                p={"1em"}
              >
                <Image
                  src={p2i3}
                  alt="page2image3"
                  width={"30%"}
                  borderRadius={"0.4em"}
                />
                <Image
                  src={p2i4}
                  alt="page2image4"
                  width={"30%"}
                  borderRadius={"0.4em"}
                />
                <Image
                  src={p2i5}
                  alt="page2image5"
                  width={"30%"}
                  borderRadius={"0.4em"}
                />
                <Image
                  src={p2i1}
                  alt="page2image1"
                  width={"30%"}
                  borderRadius={"0.4em"}
                />
                <Image
                  src={p2i2}
                  alt="page2image2"
                  width={"30%"}
                  borderRadius={"0.4em"}
                />
              </Box>
              <Button
                fontFamily={"Rakkas"}
                fontSize={"1em"}
                letterSpacing={"0.1em"}
                width={"10em"}
                margin={"auto"}
              >
                View More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Section 3 */}
      <Box p={"3em"} backgroundColor={"#FFFAF0"} pb={"0.1em"}>
        <Box
          width={{ base: "95%", md: "90%", lg: "80%", xl: "80%" }}
          margin={"auto"}
          //   textAlign={"center"}
        >
          <Box
            display={"flex"}
            gap={"1em"}
            justifyContent={"space-between"}
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Box
              w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
              p={"1em"}
            >
              <Heading fontFamily={"Rakkas"} letterSpacing={"0.12em"}>
                Featured Stories
              </Heading>
              <Box display={"flex"} fontSize={"2em"} fontWeight={"bold"}>
                <Text color={"red"}>-</Text>
                <Text>-----</Text>
                <Text color={"red"}>-</Text>
              </Box>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Text>
              <Box
                display={"flex"}
                gap={"1em"}
                mt={"2em"}
                flexDirection={{
                  base: "column",
                  md: "column",
                  lg: "row",
                  xl: "row",
                }}
              >
                <Center
                  display={"flex"}
                  gap={"2em"}
                  borderBottom={"2px solid red"}
                  p={"0.4em"}
                >
                  <Heading
                    size={"md"}
                    fontFamily={"Rakkas"}
                    letterSpacing={"0.12em"}
                  >
                    Featured Audios
                  </Heading>{" "}
                  <FaArrowRight />
                </Center>
                <Center
                  display={"flex"}
                  gap={"2em"}
                  borderBottom={"2px solid red"}
                  p={"0.4em"}
                >
                  <Heading
                    size={"md"}
                    fontFamily={"Rakkas"}
                    letterSpacing={"0.12em"}
                  >
                    Featured Audios
                  </Heading>{" "}
                  <FaArrowRight />
                </Center>
              </Box>
            </Box>
            <Box w={{ base: "90%", md: "90%", lg: "40%", xl: "40%" }} p={"1em"}>
              <Image src={p3i1} alt="page3image1" />
            </Box>
          </Box>
          <Box
            w={"75%"}
            margin={"auto"}
            display={"flex"}
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            gap={"1.5em"}
            // backgroundColor={"#4B4B4B"}
            bgGradient="linear(to-t, #0D0D0D, #4B4B4B)"
            p={"0.5em"}
            borderRadius={"0.8em"}
            position={"relative"}
            top={"3em"}
          >
            <Center>
              <Image
                src={p3i2}
                alt="page3image2"
                m={"auto"}
                borderRadius={"0.8em"}
              />
            </Center>
            <Box
              display={"flex"}
              gap={"2em"}
              alignItems={"center"}
              textAlign={"center"}
              flexDirection={{
                base: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
            >
              <Box color={"white"}>
                <Heading fontFamily={"Rakkas"} letterSpacing={"0.12em"}>
                  Add your Story
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </Box>
              <Center>
                <Button colorScheme="orange">
                  <FaArrowRight />
                </Button>
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Section 4 */}
      <Box p={"3em"} backgroundColor={"#DA6B63"} pb={"6em"}>
        <Box
          w={{ base: "95%", md: "90%", lg: "80%", xl: "80%" }}
          m={"auto"}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{
            base: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          mt={"3em"}
        >
          <Box w={{ base: "90%", md: "90%", lg: "45%", xl: "45%" }}>
            <Heading fontFamily={"Rakkas"} letterSpacing={"0.12em"}>
              Workshops
            </Heading>
            <Box display={"flex"} fontSize={"2em"} fontWeight={"bold"}>
              <Text>-</Text>
              <Text color={"white"}>-----</Text>
              <Text>-</Text>
            </Box>
            <Text color={"white"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. For;
            </Text>
            <Text mt={"2em"} color={"white"}>
              For:-
            </Text>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"1em"}
              mt={"2em"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                w={"60%"}
                borderBottom={"2px solid white"}
              >
                <Heading
                  size={"md"}
                  fontFamily={"Rakkas"}
                  letterSpacing={"0.12em"}
                >
                  Kids
                </Heading>
                <FaArrowRight />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                w={"60%"}
                borderBottom={"2px solid white"}
              >
                <Heading
                  size={"md"}
                  fontFamily={"Rakkas"}
                  letterSpacing={"0.12em"}
                >
                  Teenagers
                </Heading>
                <FaArrowRight />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                w={"60%"}
                borderBottom={"2px solid white"}
              >
                <Heading
                  size={"md"}
                  fontFamily={"Rakkas"}
                  letterSpacing={"0.12em"}
                >
                  Adults
                </Heading>
                <FaArrowRight />
              </Box>
            </Box>
          </Box>
          <Center>
            <Image src={p4i1} alt="page4image1" w={"90%"} />
          </Center>
        </Box>
      </Box>

      {/* Section 5 */}
      <Box p={"3em"} backgroundColor={"#FFFAF0"}>
        <Box
          w={{ base: "95%", md: "90%", lg: "80%", xl: "80%" }}
          m={"auto"}
          textAlign={"center"}
        >
          <Heading fontFamily={"Rakkas"} letterSpacing={"0.12em"}>
            Reviews
          </Heading>
          <Center display={"flex"} fontSize={"2em"} fontWeight={"bold"}>
            <Text color={"red"}>-</Text>
            <Text>-----</Text>
            <Text color={"red"}>-</Text>
          </Center>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Box>
      </Box>
      <SliderComponent />

      {/* Section 6 */}
      <Footer />
    </>
  );
}
