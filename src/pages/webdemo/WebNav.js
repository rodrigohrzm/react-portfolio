import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { submitAPI } from "../../services/FetchAPI";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDisclosure } from '@chakra-ui/react'
import { Box, Flex, Spacer, VStack, HStack, Button, Image, Collapse, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'

// falta un navbar link a la dashboard if logged in
// form validation con el codigo del little lemon

function WebNav() {
  const {
    isOpen: isOpenNav,
    onClose: onCloseNav,
    onToggle: onToggleNav
  } = useDisclosure()

  const {
  isOpen: isOpenLogin,
  onClose: onCloseLogin,
  onToggle: onToggleLogin
  } = useDisclosure()

  const [ username , setUsername ] = useState ("");
  const [ password , setPassword ] = useState ("");
  const [ guestButtons , setguestButtons ] = useState ("initial");
  const [ userButtons , setuserButtons ] = useState ("none");
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    let formData = [username, password];
    if (submitAPI(formData) === true) {
        onCloseLogin()
        onCloseNav()
        userIsLoggedIn(true)
        navigate("/webdemo/userpanel");
    } else { return null }
  }

  function userIsLoggedIn(loginStatus) {
    if (loginStatus === true) {
      setguestButtons("none")
      setuserButtons("initial")
    } else {
      setguestButtons("initial")
      setuserButtons("none")
    }
  }

  const logoutProcedure = () => {
    onCloseNav()
    userIsLoggedIn(false)
    navigate("/webdemo")
  }

    return (
      <>
      <nav>
      <Flex align="center" h='74px' bgGradient='linear(to-r, #121212, #092769)' color='white' fontWeight="600">
        <Flex paddingLeft="2em"justify="left" w="25%">
          <NavLink onClick={onCloseNav} to={""}><Image fit="contain" w="225px" h="60px" minWidth="225px" minHeight="60px" src={require("../../assets/images/logo02.png")} /></NavLink>
        </Flex>
        <Spacer />
        <HStack justify="right" w="50%" spacing='1.5em' display={{base: 'none', md: 'flex', lg: 'flex'}} >
          <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"booking"}>APPOINTMENTS</NavLink>
          <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"renting"}>RENTALS</NavLink>
          <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"about-us"}>ABOUT</NavLink>
          <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"contact"}>CONTACT</NavLink>
          <Box display={userButtons}><NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"webdemo/userpanel"}>DASHBOARD</NavLink></Box>
        </HStack>
        <Spacer />
        <Box display={guestButtons}><Button onClick={onToggleLogin} display={{base: 'none', md: 'flex', lg: 'flex'}} variant='outline' colorScheme='twitter' size='lg' marginRight="1.5em" >LOG IN</Button></Box>
        <Box display={userButtons}><Button onClick={logoutProcedure} display={{base: 'none', md: 'flex', lg: 'flex'}} variant='outline' colorScheme='red' size='lg' marginRight="1.5em" >LOG OUT</Button></Box>
        <NavLink onClick={onToggleNav}><Button display={{base: 'flex', md: 'none', lg: 'none'}} variant='outline' colorScheme='twitter' size='lg' marginRight="1.5em" ><FontAwesomeIcon icon={faBars} /></Button></NavLink>
      </Flex>
      <Collapse in={isOpenNav} animateOpacity>
        <Box bg="white" padding="1.5em" rounded='md' shadow='md'><VStack spacing='1.5em' >
          <NavLink to={"booking"}>
            <Button width="300px" onClick={onToggleNav} colorScheme='messenger' size='lg'>APPOINTMENTS</Button>
          </NavLink>
          <NavLink to={"renting"}>
            <Button width="300px" onClick={onToggleNav} colorScheme='messenger' size='lg'>RENTALS</Button>
          </NavLink>
          <NavLink to={"about-us"}>
            <Button width="300px" onClick={onToggleNav} colorScheme='messenger' size='lg'>ABOUT</Button>
          </NavLink>
          <NavLink to={"contact"}>
            <Button width="300px" onClick={onToggleNav} colorScheme='messenger' size='lg'>CONTACT</Button>
          </NavLink>
          <Box display={guestButtons}><Button width="300px" onClick={onToggleLogin} colorScheme='facebook' size='lg'>EMPLOYEE ACCESS</Button></Box>
          <Box display={userButtons}><Button width="300px" onClick={logoutProcedure} colorScheme='red' size='lg'>LOG OUT</Button></Box>
        </VStack></Box>
      </Collapse>
      </nav>
      <Drawer placement='right' onClose={onCloseLogin} isOpen={isOpenLogin}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='3px'>Employee area</DrawerHeader>
          <DrawerBody padding="1.5em">
            <FormControl>
              <FormLabel>Email address</FormLabel>
                <Input isRequired="true" type='email' onChange={(e => setUsername(e.target.value))} />
              <FormLabel>Password</FormLabel>
                <Input isRequired="true" type='password' onChange={(e => setPassword(e.target.value))} />
              <Button marginTop="1.5em" width="100%" type="submit" colorScheme='facebook' size='lg' onClick={handleLoginSubmit}>LOG IN</Button>
            </FormControl>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Outlet />
      </>
    )};

  export { WebNav };

/*   <form onSubmit={handleLoginSubmit}>
  <label htmlFor="username">Username:</label>
  <input required placeholder='admin' minLength="3" type="text" id="username" value={username} onChange={(e => setUsername(e.target.value))}/>
  <label htmlFor="password">Password:</label>
  <input required placeholder='admin' type="password" id="password" value={password} onChange={(e => setPassword(e.target.value))}/>
  <button id="password" type="submit">Submit</button>
  </form> */