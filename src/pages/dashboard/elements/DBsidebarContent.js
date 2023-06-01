import React from "react";
import { useLocation, NavLink } from 'react-router-dom';
import {routes} from '../LinksDashboard';
import { Button, Flex, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DBsidebarContent = () => {

  let location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  const createLinks = routes.map((prop) => {
      return (
        <Box w="17rem" paddingX='1rem' borderRadius='8'>
        <NavLink to={prop.layout + prop.path} key={prop.name}>
        {activeRoute(prop.layout + prop.path) === "active" ? (
          <Button
            boxSize="initial"
            justifyContent="flex-start"
            alignItems="center"
            bg="#d0e6ff"
            mb="1rem"
            mx="auto"
            py="1rem"
            ps="1rem"
            borderRadius="8"
            _hover="none"
            w="100%"
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
              <Flex
                bg="#0078ff"
                color="white"
                h="2rem"
                w="2rem"
                me="1rem"
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"8"}
              >
                <FontAwesomeIcon icon={prop.icon} />
              </Flex>
            <Text color='#0078ff'>{prop.name}</Text>
          </Button>
        ) : (
          <Button
            boxSize="initial"
            justifyContent="flex-start"
            alignItems="center"
            bg="#1b3077"
            mb="1rem"
            mx="auto"
            py="1rem"
            ps="1rem"
            borderRadius="8"
            _hover="none"
            w="100%"
            _active={{
              bg: "#1b3077",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
              <Flex
                bg="white"
                color="#0078ff"
                h="2rem"
                w="2rem"
                me="1rem"
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"8"}
              >
              <FontAwesomeIcon icon={prop.icon} />
              </Flex>
            <Text color='white'>{prop.name}</Text>
          </Button>
        )}
      </NavLink>
      </Box>
    )});
  ;
  return createLinks;
}

export default DBsidebarContent