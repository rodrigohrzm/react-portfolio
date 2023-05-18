import React from "react"
import { WebBrandLogo } from './WebBrandLogo';
import BrandCertification from '../../data/BrandCertification.json';

import { Box, Center, HStack, Text, Heading, SimpleGrid, Flex, Container,
	Input, InputGroup, Textarea, Button, InputRightElement } from '@chakra-ui/react'

function WebBrands() {

// arrange the components into a horizontal scroll in both views

return (
<>
  <Heading marginTop="4rem" marginX='2rem' paddingBottom="1.5rem" align="center" as='h2' size='2xl'>Our partners lead<br/>the industry</Heading>
  <Text marginX='2rem' align="center" fontSize='xl'>We are certified by the giants of electrification</Text>
  <HStack>
    {BrandCertification.brands.map((brand, index) => (
      <WebBrandLogo key={index} make={brand.make} picture={brand.picture}/>
    ))}
  </HStack>
</>
)};

  export { WebBrands };