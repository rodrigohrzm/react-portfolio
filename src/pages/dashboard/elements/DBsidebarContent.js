import { Button, Flex, Text } from "@chakra-ui/react";
import { useLocation, NavLink } from 'react-router-dom';
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faHorseHead, faGaugeHigh, faGasPump, faLock, faCheck } from '@fortawesome/free-solid-svg-icons'

const DBsidebarContent = () => {

  let location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  var routes = [
		{
		  path: "",
		  name: "Main",
		  icon: '???',
		  layout: "/dashboard",
		},
		{
		  path: "/projects",
		  name: "Projects",
		  icon: '???',
		  layout: "/dashboard",
		},
		{
      path: "/bookings",
      name: "Bookings",
		  icon: '???',
      layout: "/dashboard",
		},
		{
		  path: "/earnings",
		  name: "Earnings",
		  icon: '???',
		  layout: "/dashboard",
		}
	  ];

  const createLinks = routes.map((prop) => {
      return (
        <NavLink to={prop.layout + prop.path} key={prop.name}>
        {activeRoute(prop.layout + prop.path) === "active" ? (
          <Button
            boxSize="initial"
            justifyContent="flex-start"
            alignItems="center"
            bg="#d0e6ff"
            mb={{
              xl: "12px",
            }}
            mx={{
              xl: "auto",
            }}
            ps={{
              sm: "10px",
              xl: "16px",
            }}
            py="12px"
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
            <Flex>
              <Flex
                bg="#0078ff"
                color="white"
                h="30px"
                w="30px"
                me="12px"
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"8"}
              >
                {prop.icon}
                <FontAwesomeIcon icon={faLock} />
              </Flex>
            </Flex>
            <Text color='#0078ff'>{prop.name}</Text>
          </Button>
        ) : (
          <Button
            boxSize="initial"
            justifyContent="flex-start"
            alignItems="center"
            bg="transparent"
            mb={{
              xl: "12px",
            }}
            mx={{
              xl: "auto",
            }}
            py="12px"
            ps={{
              sm: "10px",
              xl: "16px",
            }}
            borderRadius="8px"
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
            <Flex>
              <Flex
                bg="white"
                color="#0078ff"
                h="30px"
                w="30px"
                me="12px"
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"8"}
              >
                {prop.icon}
                <FontAwesomeIcon icon={faLock} />
              </Flex>
            </Flex>
            <Text color='white'>{prop.name}</Text>
          </Button>
        )}
      </NavLink>
    )});
  ;
  return createLinks;
}

export default DBsidebarContent