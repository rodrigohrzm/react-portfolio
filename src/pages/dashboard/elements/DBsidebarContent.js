import { Button, Flex, Text } from "@chakra-ui/react";
import { useLocation, NavLink } from 'react-router-dom';
import IconBox from "./IconBox";
import React from "react";

const DBsidebarContent = () => {

  let location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  var routes = [
		{
		  path: "",
		  name: "Dashboard",
		  component: <IconBox/>,
		  layout: "/dashboard",
		},
		{
		  path: "/projects",
		  name: "Projects",
		  component: <IconBox/>,
		  layout: "/dashboard",
		},
		{
      path: "/bookings",
      name: "Bookings",
      component: <IconBox/>,
      layout: "/dashboard",
		},
		{
		  path: "/earnings",
		  name: "Earnings",
		  component: <IconBox/>,
		  layout: "/dashboard",
		}
	  ];

  const createLinks = routes.map((prop, key) => {
      return (
        <NavLink to={prop.layout + prop.path} key={prop.name}>
        {activeRoute(prop.layout + prop.path) === "active" ? (
          <Button
            boxSize="initial"
            justifyContent="flex-start"
            alignItems="center"
            bg="white"
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
              {typeof prop.icon === "string" ? (
//                  <Icon>{prop.icon}</Icon>
                <Text>Icon goes here</Text>
              ) : (
                <IconBox
                  bg="teal.300"
                  color="white"
                  h="30px"
                  w="30px"
                  me="12px"
                >
                  {prop.icon}
                </IconBox>
              )}
            </Flex>
            <Text color='black'>{prop.name}</Text>
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
              {typeof prop.icon === "string" ? (
//                  <Icon>{prop.icon}</Icon>
                <Text>Icon goes here</Text>
              ) : (
                <IconBox
                  bg="white"
                  color="teal.300"
                  h="30px"
                  w="30px"
                  me="12px"
                >
                  {prop.icon}
                </IconBox>
              )}
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