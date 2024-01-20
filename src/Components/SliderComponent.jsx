// SliderComponent.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyles.css"; // Create this file for additional styling
import { FaStar } from "react-icons/fa";

const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState(2); // Default active slide is the second one

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0", // Ensure no padding for better visibility
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    dots: true,
  };

  return (
    <Box overflowX={"hidden"}>
      <Slider {...settings} className="slider">
        <Box p={"1em"}>
          <Box
            className="slider-item"
            padding={`${activeSlide === 0 ? 1.3 : 0.5}em`}
            display={"flex"}
            flexDirection={"column"}
            textAlign={"center"}
            gap={"0.5em"}
            mt={`${activeSlide === 0 ? 0 : 2.3}em`}
            borderRadius={"1em"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Image
              src="https://placekitten.com/300/200?image=1"
              alt="Slide 1"
              margin={"auto"}
              width={"3em"}
              height={"3em"}
              borderRadius={"0.5em"}
            />
            <Heading
              size={"small"}
              fontFamily={"Rakkas"}
              letterSpacing={"0.08em"}
            >
              Lorem Ipsum Dolor
            </Heading>
            <Center color={"gold"} mt={"0.5em"} display={"flex"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Center>
            <Text>-------</Text>
            <Text w={"80%"} margin={"auto"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </Box>

        <Box p={"1em"}>
          <Box
            className="slider-item"
            padding={`${activeSlide === 1 ? 1.3 : 0.5}em`}
            display={"flex"}
            flexDirection={"column"}
            textAlign={"center"}
            gap={"0.5em"}
            mt={`${activeSlide === 1 ? 0 : 2.3}em`}
            borderRadius={"1em"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Image
              src="https://placekitten.com/300/200?image=2"
              alt="Slide 2"
              margin={"auto"}
              width={"3em"}
              height={"3em"}
              borderRadius={"0.5em"}
            />
            <Heading
              size={"small"}
              fontFamily={"Rakkas"}
              letterSpacing={"0.08em"}
            >
              Lorem Ipsum Dolor
            </Heading>
            <Center color={"gold"} mt={"0.5em"} display={"flex"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Center>
            <Text>-------</Text>
            <Text w={"80%"} margin={"auto"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </Box>

        <Box p={"1em"}>
          <Box
            className="slider-item"
            padding={`${activeSlide === 2 ? 1.3 : 0.5}em`}
            display={"flex"}
            flexDirection={"column"}
            textAlign={"center"}
            gap={"0.5em"}
            mt={`${activeSlide === 2 ? 0 : 2.3}em`}
            borderRadius={"1em"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Image
              src="https://placekitten.com/300/300?image=3"
              alt="Slide 3"
              margin={"auto"}
              width={"3em"}
              height={"3em"}
              borderRadius={"0.5em"}
            />
            <Heading
              size={"small"}
              fontFamily={"Rakkas"}
              letterSpacing={"0.08em"}
            >
              Lorem Ipsum Dolor
            </Heading>
            <Center color={"gold"} mt={"0.5em"} display={"flex"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Center>
            <Text>-------</Text>
            <Text w={"80%"} margin={"auto"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </Box>

        <Box p={"1em"}>
          <Box
            className="slider-item"
            padding={`${activeSlide === 3 ? 1.3 : 0.5}em`}
            display={"flex"}
            flexDirection={"column"}
            textAlign={"center"}
            gap={"0.5em"}
            mt={`${activeSlide === 3 ? 0 : 2.3}em`}
            borderRadius={"1em"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Image
              src="https://placekitten.com/300/200?image=4"
              alt="Slide 4"
              margin={"auto"}
              width={"3em"}
              height={"3em"}
              borderRadius={"0.5em"}
            />
            <Heading
              size={"small"}
              fontFamily={"Rakkas"}
              letterSpacing={"0.08em"}
            >
              Lorem Ipsum Dolor
            </Heading>
            <Center color={"gold"} mt={"0.5em"} display={"flex"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Center>
            <Text>-------</Text>
            <Text w={"80%"} margin={"auto"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </Box>

        <Box p={"1em"}>
          <Box
            className="slider-item"
            padding={`${activeSlide === 4 ? 1.3 : 0.5}em`}
            display={"flex"}
            flexDirection={"column"}
            textAlign={"center"}
            gap={"0.5em"}
            mt={`${activeSlide === 4 ? 0 : 2.3}em`}
            borderRadius={"1em"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Image
              src="https://placekitten.com/300/200?image=5"
              alt="Slide 5"
              margin={"auto"}
              width={"3em"}
              height={"3em"}
              borderRadius={"0.5em"}
            />
            <Heading
              size={"small"}
              fontFamily={"Rakkas"}
              letterSpacing={"0.08em"}
            >
              Lorem Ipsum Dolor
            </Heading>
            <Center color={"gold"} mt={"0.5em"} display={"flex"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Center>
            <Text>-------</Text>
            <Text w={"80%"} margin={"auto"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};

export default SliderComponent;
