import React, { useState } from 'react';
import { WebTitle } from './WebTitle'
import { WebCard } from "./WebCard";
import RentalInventory from '../../data/RentalInventory.json';

import { Box, Flex, Center, Grid, GridItem, Text, Heading, FormLabel, Input, Select, Button, ButtonGroup } from '@chakra-ui/react'

// desplegable con categorías cuando la barra de filtros está en la parte superior, si no botones para cada categoría

function WebRentalPage() {

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(100);

  const classes = Array.from(new Set(RentalInventory.rentals.map(rental => rental.class)));

  const handleClassFilterChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setSelectedPrice(Number(event.target.value));
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
        <Flex justify={{base: 'center', lg: ''}} wrap='wrap'>
          <FormLabel padding={{ base:'2rem', lg: '1rem'}}>
            <Heading paddingLeft='0.5rem' marginBottom="0.5em" color='white' fontWeight='600' as='h4' size='sm'>FILTER BY PRICE <output htmlFor="price-filter">{selectedPrice}</output></Heading>
            <Input
              w='16rem'
              type='range'
              min="1"
              max="150"
              value={selectedPrice}
              onChange={handlePriceFilterChange}
            />
          </FormLabel>
          <FormLabel padding={{ base:'2rem', lg: '2rem'}}>
            <Heading paddingLeft='0.5rem' marginBottom="0.5em" color='white' fontWeight='600' as='h4' size='sm'>FILTER BY CLASS</Heading>
            <Select display={{ base:'', lg: 'none'}} w='16rem' value={selectedClass} onChange={handleClassFilterChange}>
              <option color='white' value="">All</option>
              {classes.map((classOption, index) => (<option key={index} value={classOption}>{classOption}</option>))}
            </Select>
            <ButtonGroup display={{ base:'none', lg: 'inline'}} spacing='0' flexWrap='wrap' variant='outline' colorScheme='messenger'>
              <Button value="" onClick={handleClassFilterChange} w='16rem'>All</Button>
                {classes.map((classOption, index) => (
              <Button onClick={handleClassFilterChange} key={index} value={classOption} w='16rem'>{classOption}</Button>))}
            </ButtonGroup>
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