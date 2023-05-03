import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { submitAPI } from "../../services/FetchAPI";

import { Box } from '@chakra-ui/react'

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
      <Box h='74px' bgGradient='linear(to-r, #121212, #092769)' color='white'>
      <image className="weblogo" src={require("../../assets/images/logo02.png")} width={50} />
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
      </Box>
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