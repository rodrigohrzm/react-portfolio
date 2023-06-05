import React, { useState } from 'react';
import { WebTitle } from './WebTitle'
import { WebCard } from "./WebCard";
import RentalInventory from '../../data/RentalInventory.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign, faCar } from '@fortawesome/free-solid-svg-icons'

import { Box, Flex, Center, Grid, GridItem, Text, Heading,  Button, VStack, Slider,
         FormLabel, Select, SliderTrack, SliderFilledTrack, SliderThumb, Tooltip } from '@chakra-ui/react'

function WebRentalPage() {

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(120);
  const [showTooltip, setShowTooltip] = useState(false)

  const classes = Array.from(new Set(RentalInventory.rentals.map(rental => rental.class)));


  const handleClassFilterChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const availableRentals = RentalInventory.rentals.filter(rental => !rental.booked_status);
  const unavailableRentals = RentalInventory.rentals.filter(rental => rental.booked_status);

  const filteredAvailableRentals = availableRentals.filter(rental => {
    const classFilter = !selectedClass || rental.class === selectedClass;
    const priceFilter = rental.price <= selectedPrice;
    return classFilter && priceFilter;
  });

  const filteredUnavailableRentals = unavailableRentals.filter(rental => {
    const classFilter = !selectedClass || rental.class === selectedClass;
    const priceFilter = rental.price <= selectedPrice;
    return classFilter && priceFilter;
  });

  const filteredRentals = filteredAvailableRentals.concat(filteredUnavailableRentals);

  return (
<>
    <WebTitle pageName="Rent a car" />
    <Box background='linear-gradient(110deg, #f0f0f0 60%, #fdcd3b 60%)' >
    <Grid
      templateRows={'1fr 10rem'}
      templateColumns={{ base: 'repeat(1, 1fr)', pre: 'repeat(2, 1fr)', lg: '18rem repeat(5, 1fr)' }}
      gap={4}
      autoFlow='row'
      columnGap='0'
    >
      <GridItem rowSpan={{ base:'1', lg: '2'}} colSpan={{ base:'3', lg: '1'}} bg='#011968' w={{ base:'', lg: '18rem'}}>
        <Flex marginLeft={{base: '0', lg: '1rem'}} justify={{base: 'center', lg: ''}} wrap='wrap'>
          <FormLabel paddingY={{ base:'2rem', lg: '1rem'}} marginTop={{ base:'0', lg: '3rem'}}>
            <Heading paddingLeft='0.5rem' marginBottom="0.5em" color='white' fontWeight='600' as='h4' size='sm'>FILTER BY PRICE</Heading>
            <Box
              backgroundColor='#1b3077'
              boxSize="content-box"
              w='15rem'
              justifyContent="flex-start"
              alignItems="center"
              mx="auto"
              py="1rem"
              px="1.5rem"
              borderRadius="8" >
            <Slider
              marginTop='0.4rem'
              id='slider'
              defaultValue={120}
              min={1}
              max={120}
              value={selectedPrice}
              onChange={setSelectedPrice}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderTrack bg='#d0e6ff'>
                <SliderFilledTrack bg='#0078ff' />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg='#0078ff'
                color='white'
                fontWeight='bold'
                placement='top'
                borderRadius="4"
                isOpen={showTooltip}
                label={`${selectedPrice}`}
              >
                <SliderThumb boxSize={6}>
                  <FontAwesomeIcon size="xs" color='#0078ff'icon={faEuroSign} />
                </SliderThumb>
              </Tooltip>
            </Slider>
            </Box>
          </FormLabel>
          <FormLabel padding='2rem'>
            <Heading paddingLeft='0.5rem' marginBottom="0.5em" color='white' fontWeight='600' as='h4' size='sm'>FILTER BY TYPE</Heading>
            <Select color='white' borderColor='#a2ceff' display={{ base:'', lg: 'none'}} w={{base: '16rem', lg: '14rem'}} value={selectedClass} onChange={handleClassFilterChange}>
              <option style={{ color: 'black' }} value="">All</option>
              {classes.map((classOption, index) => (<option style={{ color: 'black' }} key={index} value={classOption}>{classOption}</option>))}
            </Select>
            <VStack display={{ base:'none', lg: 'inline'}} flexWrap='wrap' spacing='7' >
              <Button
                value=""
                onClick={handleClassFilterChange}
                color={selectedClass == '' ? '#0078ff' : 'white'}
                borderColor='transparent'
                backgroundColor={selectedClass == '' ? '#d0e6ff' : '#1b3077'}
                boxSize="content-box"
                w='15rem'
                justifyContent="flex-start"
                alignItems="center"
                mx="auto"
                py="1rem"
                ps="1rem"
                borderRadius="8"
                _hover="none"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Flex
                bg={selectedClass == '' ? '#0078ff' : 'white'}
                color={selectedClass == '' ? 'white' : '#0078ff'}
                h="2rem"
                w="2rem"
                me="1rem"
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"8"}
              >
                <FontAwesomeIcon icon={faCar} />
              </Flex>
              All</Button>
                {classes.map((classOption, index) => (
              <Button
                color={selectedClass == classOption ? '#0078ff' : 'white'}
                borderColor='transparent'
                backgroundColor={selectedClass == classOption ? '#d0e6ff' : '#1b3077'}
                onClick={handleClassFilterChange}
                key={index}
                value={classOption}
                boxSize="content-box"
                w='15rem'
                justifyContent="flex-start"
                alignItems="center"
                mb="1rem"
                mx="auto"
                py="1rem"
                ps="1rem"
                borderRadius="8"
                _hover="none"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Flex
                bg={selectedClass == classOption ? '#0078ff' : 'white'}
                color={selectedClass == classOption ? 'white' : '#0078ff'}
                h="2rem"
                w="2rem"
                me="1rem"
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"8"}
              >
                <FontAwesomeIcon icon={faCar} />
              </Flex>
              {classOption}
              </Button>))}
            </VStack>
          </FormLabel>
        </Flex>
      </GridItem>
      <GridItem autocolumns='true' rowSpan={{ base:'4', lg: '1'}} colSpan={{ base:'3', lg: '5'}}>
        <Center flexWrap='wrap'>
            {filteredRentals.map((car, index) => <WebCard car={car} key={index}/>)}
        </Center>
      </GridItem>
      <GridItem colSpan={{ base:'3', lg: '5'}} bg='white' borderRadius='0'>
        <Text color='gray.400' fontSize='sm' padding='2rem' align="left">* In some offices, a damage franchise is established for special and/or high risk categories regardless of the contracted coverage. A security deposit is required for rentals without contracted coverage. For more information on coverage, deposits and security, please refer to point B of our Terms and Conditions. Unlimited mileage in the city area and a maximum of 250km per day or 1750 km per reservation outside the city limits. Please refer to our terms and conditions.</Text>
      </GridItem>
    </Grid>
    </Box>
</>
);}

export { WebRentalPage };