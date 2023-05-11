import React, { useState } from 'react';
import { WebTitle } from './WebTitle'
import { WebCard } from "./WebCard";
import RentalInventory from '../../data/RentalInventory.json';

import { Box, Flex, Center, Grid, GridItem, Text } from '@chakra-ui/react'

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
      templateColumns={{ base: 'repeat(1, 1fr)', pre: 'repeat(2, 1fr)', lg: 'repeat(6, 1fr)' }}
      gap={4}
      autoFlow='row'
    >
      <GridItem rowSpan={{ base:'1', lg: '1'}} colSpan={{ base:'3', lg: '1'}} bg='grey' w={{ base:'', lg: '15rem'}}>
        <label htmlFor="class-filter">Filter by Class:</label>
          <select id="class-filter" value={selectedClass} onChange={handleClassFilterChange}>
            <option value="">All</option>
            {classes.map((classOption, index) => (<option key={index} value={classOption}>{classOption}</option>))}
          </select>
          <label htmlFor="price-filter">Filter by Price:</label>
        <input
          type="range"
          id="price-filter"
          name="price-filter"
          min="1"
          max="150"
          value={selectedPrice}
          onChange={handlePriceFilterChange}
        />
        <output htmlFor="price-filter">{selectedPrice}</output>
      </GridItem>
      <GridItem autocolumns='true' rowSpan={{ base:'4', lg: '1'}} colSpan={{ base:'3', pre:'2', lg: '5'}}>
        <Center flexWrap='wrap'>
            {filteredRentals.map((car, index) => <WebCard car={car} key={index}/>)}
        </Center>
      </GridItem>
      <GridItem colSpan={{ base:'3', lg: '4'}} bg='white' borderRadius={{ base:'0', lg: '0'}}>
        <Text color='gray.400' fontSize='sm' padding='2rem' align="left">* In some offices, a damage franchise is established for special and/or high risk categories regardless of the contracted coverage. A security deposit is required for rentals without contracted coverage. For more information on coverage, deposits and security, please refer to point B of our Terms and Conditions. Unlimited mileage in the city area and a maximum of 250km per day or 1750 km per reservation outside the city limits. Please refer to our terms and conditions.</Text>
      </GridItem>
    </Grid>
    </Box>
</>
);}

export { WebRentalPage };