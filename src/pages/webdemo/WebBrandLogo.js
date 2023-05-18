import React from "react"

import { Center, VStack, Text, Image } from '@chakra-ui/react'

const WebBrandLogo = ({ make, picture }) => {
return (
    <>
    <VStack>
        <Center>
            <Image
                fit='cover'
                align='center center'
                w='11rem'
                h='11rem'
                src={require(`../../assets/images/rentalmedia/${picture}`)}
                fallbackSrc={require('../../assets/images/fallbackimg.png')}
                alt={make}
                borderRadius='8'
            />
            <Text>{make}</Text>
        </Center>
    </VStack>
    </>
);
};

  export { WebBrandLogo };