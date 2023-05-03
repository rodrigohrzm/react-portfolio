import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { submitAPI } from "../../services/FetchAPI";

import { Box, UnorderedList, ListItem, Button } from '@chakra-ui/react'

function WebNav() {
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  }

  const [ username , setUsername ] = useState ("");
  const [ password , setPassword ] = useState ("");
  const navigate = useNavigate();
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    let formData = [username, password];
    if (submitAPI(formData) === true) {navigate("/webdemo/userpanel"); setShowLogin(false);
  } else { return null}
  }

    return (
      <>
      <nav>
      <Box h='74px' bgGradient='linear(to-r, #121212, #092769)' color='white'>
      <image className="weblogo" src={require("../../assets/images/avatar.jpg")} />
      <Box marginTop="1em" float="right" justifyContent="center">
        <UnorderedList listStyleType="none" display="flex" flexWrap="wrap" marginRight="auto" marginLeft="auto" position="relative" justifyContent="center" fontSize="xl">
          <ListItem><NavLink to={"help"}>Emergencies</NavLink></ListItem>
          <ListItem><NavLink to={"booking"}>Appointments</NavLink></ListItem>
          <ListItem><NavLink to={"renting"}>Renta-a-car</NavLink></ListItem>
          <ListItem><NavLink to={"about-us"}>About</NavLink></ListItem>
          <ListItem><NavLink to={"contact"}>About</NavLink></ListItem>
          <ListItem><Button><NavLink onClick={handleLoginClick}>Login</NavLink></Button></ListItem>
        </UnorderedList>
        </Box>
        {showLogin && (
        <div className="login-container">
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="username">Username:</label>
            <input required placeholder='admin' minLength="3" type="text" id="username" value={username} onChange={(e => setUsername(e.target.value))}/>
            <label htmlFor="password">Password:</label>
            <input required placeholder='admin' type="password" id="password" value={password} onChange={(e => setPassword(e.target.value))}/>
            <button id="password" type="submit">Submit</button>
          </form>
        </div>
      )}
      </Box>
      </nav>
      <Outlet />
      </>
    )};

  export { WebNav };

/*   return (
    <>
    <image className="weblogo" src="" />
    <nav>
      <ul style={{display: "flex", display: "flex", flexWrap: "wrap", marginRight: "auto", marginLeft: "auto", position: "relative", justifyContent: "center"}}>
        <li><NavLink to={"help"}>Emergencies</NavLink></li>
        <li><NavLink to={"booking"}>Appointments</NavLink></li>
        <li><NavLink to={"renting"}>Renta-a-car</NavLink></li>
        <li><NavLink to={"about-us"}>About</NavLink></li>
        <li><NavLink to={"contact"}>About</NavLink></li>
        <li><NavLink onClick={handleLoginClick}>Login</NavLink></li>
      </ul>
      {showLogin && (
      <div className="login-container">
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="username">Username:</label>
          <input required placeholder='admin' minLength="3" type="text" id="username" value={username} onChange={(e => setUsername(e.target.value))}/>
          <label htmlFor="password">Password:</label>
          <input required placeholder='admin' type="password" id="password" value={password} onChange={(e => setPassword(e.target.value))}/>
          <button id="password" type="submit">Submit</button>
        </form>
      </div>
    )}
    </nav>
    <Outlet />
    </>
  )};

export { WebNav }; */