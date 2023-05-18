import React from "react"

import { VStack, Text, Image } from '@chakra-ui/react'

const WebBrandLogo = ({ speed, make, picture }) => {
return (
    <VStack align="flex-start" flexShrink="0" >
        <Image
            fit='contain'
            align='center center'
            w={{ base:'6rem', pre:'8rem', lg: '10rem' }}
            src={require(`../../assets/images/brandpics/${picture}`)}
            fallbackSrc={require('../../assets/images/fallbackimg.png')}
            alt={make}
        />
    </VStack>
);
};

  export { WebBrandLogo };