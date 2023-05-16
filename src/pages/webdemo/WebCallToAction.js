import { NavLink } from "react-router-dom"

import { Box, VStack, Text, Heading, Button } from '@chakra-ui/react'

function WebCallToAction() {
    return (
      <Box h='auto' bgSize='cover' backgroundPosition='center center' backgroundRepeat="no-repeat" backgroundImage={{ base: (require("../../assets/images/herosmall.jpg")), xl: (require("../../assets/images/herobig.jpg"))}}> {/* backgroundImage={require("../../assets/images/herobig.jpg")} */}
        <VStack align='left' spacing='2rem' paddingX={{ base: '1.5rem', sm: '3rem', lg: '10rem', xl: '15rem' }} paddingY={{ base: '5rem', sm: '8rem', pre: '10rem', lg: '15rem', xl: '20rem' }} >
          <Heading w={{ sm: 'auto', pre: '60%', lg: '90%', xl: '45%' }} color='white' as='h2' size='3xl'>The one-stop-shop for your car</Heading>
          <Text w={{ sm: 'auto', pre: '60%', lg: '90%', xl: '40%' }} fontSize='lg' color='white'>We'll take care of both maintenance and major repairs, and get you back on the road quickly and safely. And if you need a temporary ride, our range of high-quality rental cars is only a call away.</Text>
          <Button variant='outline' w='16rem' color='white' _hover={{ color:'#0078ff', bg: '#d0e6ff', borderColor: '#a2ceff'}} size='lg'><NavLink to={"booking"}>Book an appointment</NavLink></Button>
        </VStack>
      </Box>
    )};

  export { WebCallToAction };