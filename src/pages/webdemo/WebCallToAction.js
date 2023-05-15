import { NavLink } from "react-router-dom"

import { Box, VStack, Text, Heading, Button } from '@chakra-ui/react'

function WebCallToAction() {
    return (
      <Box h='900px' bgSize='100%' backgroundPosition='cover' backgroundRepeat="no-repeat" backgroundImage={require("../../assets/images/hero.jpg")}>
        <VStack align='left' spacing='2rem' paddingLeft='15rem' paddingTop='20rem' >
          <Heading w='35%' color='white' as='h2' size='3xl'>The one-stop-shop for your car</Heading>
          <Text w='30%' fontSize='lg' color='white'>We'll take care of your maintenance or major repairs and get you back on the road quickly and safely. And if you need a temporary ride, our range of high-quality rental cars is only a call away.</Text>
          <Button variant='outline' width="250px" color='white' _hover={{ bg: '#f6f6f640' }} size='lg'><NavLink to={"booking"}>Book an appointment</NavLink></Button>
        </VStack>
      </Box>
    )};

  export { WebCallToAction };