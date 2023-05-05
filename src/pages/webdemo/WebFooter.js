import { Link, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Box, Flex, Spacer, VStack, HStack, Center,
         Text } from '@chakra-ui/react'

  function WebFooter() {
      return (
        <footer>
        <Box bgGradient='linear(to-r, #121212, #092769)'>
          <image className="weblogo" src="" />
          <image className="linkedin" src="" />
          <image className="youtube" src="" />
          <image className="instagram" src="" />
          <ul>
              <h5>Services</h5>
              <li><Link to={""}>Emergencies</Link></li>
              <li><Link to={""}>Appointments</Link></li>
              <li><Link to={""}>Renta-a-car</Link></li>
              <li><Link to={""}>Detailing</Link></li>
          </ul>
          <ul>
              <h5>Companies we work with</h5>
              <li><Link to={""}>Toyota</Link></li>
              <li><Link to={""}>Tesla</Link></li>
              <li><Link to={""}>Ford</Link></li>
              <li><Link to={""}>Stellantis</Link></li>
              <li><Link to={""}>VAG Group</Link></li>
          </ul>
          <ul>
              <h5>Our parts partners</h5>
              <li><Link to={""}>Bosch</Link></li>
              <li><Link to={""}>Continental</Link></li>
              <li><Link to={""}>CATL</Link></li>
              <li><Link to={""}>Castrol</Link></li>
              <li><Link to={""}>Panasonic</Link></li>
          </ul>
          <ul>
              <h5>The company</h5>
              <li><Link to={""}>About us</Link></li>
              <li><Link to={""}>Contact us</Link></li>
              <li><Link to={""}>Careers</Link></li>
          </ul>
          <ul>
              <h5>More</h5>
              <li><Link to={""}>Privacy Policy</Link></li>
              <li><Link to={""}>Legal Notice</Link></li>
              <li><Link to={""}>Information Security Policy</Link></li>
              <li><Link to={""}>Quality Policy</Link></li>
              <li><Link to={""}>Cookies Policy</Link></li>
          </ul>
        </Box>
        <Center bg="black" padding="0.66em">
          <Text marginLeft={{ base: 'none', md: 'none', lg: '-45%' }} color="white" fontSize={{ base: 'sm', md: 'md', lg: 'md' }} >AutoCare Hybrid Experts 2023. All rights reserved.</Text>
        </Center>
        <Outlet />
        </footer>
      )};

    export { WebFooter };

/*     <div style={{display: "flex", display: "flex", flexWrap: "wrap", marginRight: "auto", marginLeft: "auto", position: "relative", justifyContent: "center"}}>
    <image className="weblogo" src="" />
    <image className="linkedin" src="" />
    <image className="youtube" src="" />
    <image className="instagram" src="" />
    <ul>
        <h5>Our partners</h5>
        <li><Link to={""}>Bosch</Link></li>
        <li><Link to={""}>Continental</Link></li>
        <li><Link to={""}>Magna International</Link></li>
        <li><Link to={""}>Castrol</Link></li>
        <li><Link to={""}>Magneti Marelli</Link></li>
    </ul>
    <ul>
        <h5>Services</h5>
        <li><Link to={""}>Emergencies</Link></li>
        <li><Link to={""}>Appointments</Link></li>
        <li><Link to={""}>Renta-a-car</Link></li>
        <li><Link to={""}>Detailing</Link></li>
    </ul>
    <ul>
        <h5>Our partners</h5>
        <li><Link to={""}>Bosch</Link></li>
        <li><Link to={""}>Continental</Link></li>
        <li><Link to={""}>Magna International</Link></li>
        <li><Link to={""}>Castrol</Link></li>
        <li><Link to={""}>Magneti Marelli</Link></li>
    </ul>
    <ul>
        <h5>The company</h5>
        <li><Link to={""}>About us</Link></li>
        <li><Link to={""}>Contact us</Link></li>
        <li><Link to={""}>Careers</Link></li>
    </ul>
    <ul>
        <h5>More</h5>
        <li><Link to={""}>Privacy Policy</Link></li>
        <li><Link to={""}>Legal Notice</Link></li>
        <li><Link to={""}>Information Security Policy</Link></li>
        <li><Link to={""}>Quality Policy</Link></li>
        <li><Link to={""}>Cookies Policy</Link></li>
    </ul>
  </div>
  <div style={{backgroundColor: "black"}}>
    <p style={{margin: "0"}}>Company 2023. All rights reserved.</p>
  </div> */