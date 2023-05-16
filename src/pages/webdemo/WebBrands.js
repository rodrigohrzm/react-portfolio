import BrandCertification from '../../data/RepairSupport.json';

import { Box, Center, HStack, Text, Heading, SimpleGrid, Flex, Container,
	Input, InputGroup, Textarea, Button, InputRightElement } from '@chakra-ui/react'

function WebBrands() {

const brandCert = Object.keys(BrandCertification);

// 1. map the JSON into an array of objects
// 2. make a new component as brand display
// 3. map the array objects into the component as props
// 4. arrange the components into a horizontal scroll in both views

return (
<>
  <Heading marginTop="4rem" marginX='2rem' paddingBottom="1.5rem" align="center" as='h2' size='2xl'>Our partners lead<br/>the industry</Heading>
  <Text marginX='2rem' align="center" fontSize='xl'>We are certified by the giants of electrification</Text>
  <HStack>
    {brandCert.map((picture) => <h3>{picture}</h3>)}
  </HStack>
</>
)};

  export { WebBrands };