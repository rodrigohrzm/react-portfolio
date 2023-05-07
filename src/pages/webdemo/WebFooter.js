import { Link, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Stack, VStack, Center, SimpleGrid,
         Image, Text, Heading } from '@chakra-ui/react'

// <Stack wrap="nowrap" direction={{ base: 'column', md: 'row', xl: 'row' }} spacing={{ base: '3rem', md: '4.5rem', xl: '6rem' }} color="#FFFFFF87" paddingTop={{ base: '', md: '8rem', lg: '8rem', '2xl': '0.001rem' }} marginBottom="6rem" marginLeft="5rem" marginRight="5rem">

  function WebFooter() {
      return (
        <footer>
        <Center bgGradient='linear(to-r, #121212, #092769)' h={{ base: '', md: '', xl: '30rem' }}>
        <SimpleGrid columns={{ base: '1', pre: '2', lg:'3', xl: '6' }} spacing={{ base: '3rem', pre: '4.5rem', xl: '6rem' }} color="#FFFFFF87" paddingTop={{ base: '', pre: '5rem', lg:'5rem', xl: '1rem', '2xl': '0.001rem' }} marginBottom="6rem" marginLeft="5rem" marginRight="5rem">
          <VStack paddingTop={{ base: '5rem', pre: '0', xl: '0' }} paddingBottom="3rem" spacing="2rem">
            <Image fit="contain" w="225px" h="60px" minWidth="225px" minHeight="60px" src={require("../../assets/images/logo02.png")} />
            <Stack direction="row" color="white" spacing="1rem">
              <Link to={"/react-portfolio"}><FontAwesomeIcon size="xl" icon={faGlobe} /></Link>
              <Link to={"https://linkedin.com/in/rodrigohrzm"}><FontAwesomeIcon size="xl" icon={faLinkedinIn} /></Link>
              <Link to={"https://twitter.com/rodrigohrzm"}><FontAwesomeIcon size="xl" icon={faTwitter} /></Link>
              <Link to={"https://www.instagram.com/rodrigohrzm"}><FontAwesomeIcon size="xl" icon={faInstagram} /></Link>
            </Stack>
          </VStack>
          <VStack align="left" spacing="0.66rem">
              <Heading color="white" as='h6' size='md'>Services</Heading>
              <Link to={""}>Emergencies</Link>
              <Link to={""}>Appointments</Link>
              <Link to={""}>Rent-a-car</Link>
              <Link to={""}>Detailing</Link>
          </VStack>
          <VStack align="left" spacing="0.66rem">
              <Heading color="white" as='h6' size='md'>Manufacturer partners</Heading>
              <Link to={""}>Toyota</Link>
              <Link to={""}>Tesla</Link>
              <Link to={""}>Ford</Link>
              <Link to={""}>Stellantis</Link>
              <Link to={""}>VAG Group</Link>
          </VStack>
          <VStack align="left" spacing="0.66rem">
              <Heading color="white" as='h6' size='md'>Our parts partners</Heading>
              <Link to={""}>Bosch</Link>
              <Link to={""}>CATL</Link>
              <Link to={""}>Continental</Link>
              <Link to={""}>Castrol</Link>
              <Link to={""}>Panasonic</Link>
          </VStack>
          <VStack align="left" spacing="0.66rem">
              <Heading color="white" as='h6' size='md'>The company</Heading>
              <Link to={""}>About us</Link>
              <Link to={""}>Contact us</Link>
              <Link to={""}>Careers</Link>
          </VStack>
          <VStack align="left" spacing="0.66rem">
              <Heading color="white" as='h6' size='md'>More</Heading>
              <Link to={""}>Legal Notice</Link>
              <Link to={""}>Privacy Policy</Link>
              <Link to={""}>Data Security Policy</Link>
              <Link to={""}>Quality Policy</Link>
              <Link to={""}>Cookies Policy</Link>
          </VStack>
        </SimpleGrid>
        </Center>
        <Center bg="black" padding="0.66rem">
          <Text fontWeight="600" marginLeft={{ base: 'none', md: '-45%', xl: '-45%' }} color="white" fontSize={{ base: 'sm', sm: 'md', lg: 'md' }} >AutoCare Hybrid Experts 2023. All rights reserved.</Text>
        </Center>
        <Outlet />
        </footer>
      )};

    export { WebFooter };