import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { RiMenu4Fill } from "react-icons/ri";


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
          <DrawerCloseButton color={"black"} backgroundColor={"white"} mt={"2em"} mr={"3em"} />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody border={"1px solid white"}></DrawerBody>

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