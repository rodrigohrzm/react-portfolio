import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { submitAPI } from "../../services/FetchAPI";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDisclosure } from '@chakra-ui/react'
import { Box, Flex, Spacer, VStack, HStack,
         Button, Image,
         Collapse, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,
         FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

function WebNav() {
  const navigate = useNavigate();

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

  const [ guestButtons , setguestButtons ] = useState ("initial");
  const [ userButtons , setuserButtons ] = useState ("none");
  const [show, setShow] = useState(false)
  const [ email , setEmail ] = useState ("");
  const [ password , setPassword ] = useState ("");

  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('loginStatus');
    if (savedLoginStatus === 'true') {
      userIsLoggedIn(true);
    }
  }, []);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    let formData = [email, password];
    if (submitAPI(formData) === true) {
        onCloseLogin()
        onCloseNav()
        userIsLoggedIn(true)
        navigate("userpanel");
    } else { return null }
  }

  function userIsLoggedIn(loginStatus) {
    if (loginStatus === true) {
      setguestButtons('none');
      setuserButtons('initial');
      localStorage.setItem('loginStatus', 'true');
    } else {
      setguestButtons('initial');
      setuserButtons('none');
      localStorage.removeItem('loginStatus');
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
        <Flex paddingLeft="2rem"justify="left" w="25%">
          <NavLink onClick={onCloseNav} to={""}><Image fit="contain" w="225px" h="60px" minWidth="225px" minHeight="60px" src={require("../../assets/images/logo02.png")} /></NavLink>
        </Flex>
        <Spacer />
        <HStack justify="right" w="50%" spacing='1.5rem' display={{base: 'none', md: 'flex', lg: 'flex'}} >
          <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"booking"}>APPOINTMENTS</NavLink>
          <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"renting"}>RENTALS</NavLink>
          <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"about-us"}>ABOUT</NavLink>
          <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"contact"}>CONTACT</NavLink>
          <Box display={userButtons}><NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"userpanel"}>DASHBOARD</NavLink></Box>
        </HStack>
        <Spacer />
        <Box display={guestButtons}><Button onClick={onToggleLogin} display={{base: 'none', md: 'flex', lg: 'flex'}} variant='outline' colorScheme='twitter' size='lg' marginRight="1.5rem" >LOG IN</Button></Box>
        <Box display={userButtons}><Button onClick={logoutProcedure} display={{base: 'none', md: 'flex', lg: 'flex'}} variant='outline' colorScheme='red' size='lg' marginRight="1.5rem" >LOG OUT</Button></Box>
        <NavLink onClick={onToggleNav}><Button display={{base: 'flex', md: 'none', lg: 'none'}} variant='outline' colorScheme='twitter' size='lg' marginRight="1.5rem" ><FontAwesomeIcon icon={faBars} /></Button></NavLink>
      </Flex>
      <Collapse in={isOpenNav} animateOpacity>
        <Box bg="white" padding="1.5rem" rounded='md' shadow='md'><VStack spacing='1.5rem' >
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
          <Button display={guestButtons} width="300px" onClick={onToggleLogin} colorScheme='facebook' size='lg'>EMPLOYEE ACCESS</Button>
          <NavLink to={"userpanel"}>
            <Button display={userButtons} width="300px" onClick={onToggleNav} colorScheme='facebook' size='lg'>DASHBOARD</Button>
          </NavLink>
          <Button display={userButtons} width="300px" onClick={logoutProcedure} colorScheme='red' size='lg'>LOG OUT</Button>
        </VStack></Box>
      </Collapse>
      </nav>
      <Drawer placement='right' onClose={onCloseLogin} isOpen={isOpenLogin}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='3px'>Employee area</DrawerHeader>
          <DrawerBody padding="1.5rem">
          <Image marginLeft="1.2rem" fit="contain" w="225px" h="60px" minWidth="225px" minHeight="60px" src={require("../../assets/images/logo01.png")} />
            <FormControl marginTop="1.5rem">
              <FormLabel>Email address
                <Input value={email} type='email' placeholder='type anything' id="email" onChange={(e => setEmail(e.target.value))} />
              </FormLabel>
              <FormLabel>Password
                <InputGroup size='md'>
                  <Input value={password} type={show ? 'text' : 'password'} placeholder='type anything' id="password" onChange={(e => setPassword(e.target.value))} />
                  <InputRightElement>
                    <Button h='1.5rem' w="3rem" marginLeft="-1.5rem" size='sm' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</Button>
                  </InputRightElement>
                </InputGroup>
              </FormLabel>
              <Button marginTop="2rem" width="100%" type="submit" colorScheme='facebook' size='lg' onClick={handleLoginSubmit}>LOG IN</Button>
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