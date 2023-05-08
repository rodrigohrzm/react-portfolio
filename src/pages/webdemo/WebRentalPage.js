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
    <Box background='linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)' >
    <Grid
      templateRows={'1fr 10rem'}
      templateColumns={{ base: 'repeat(1, 1fr)', pre: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }}
      gap={4}
      autoFlow='row'
    >
      <GridItem rowSpan={{ base:'1', lg: '2'}} colSpan={{ base:'2', lg: '1'}} bg='grey' w={{ base:'', lg: '15rem'}}>
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
      <GridItem autoColumns rowSpan={{ base:'4', lg: '1'}} colSpan={{ base:'2', lg: '4'}} bg='red'>
        <Flex wrap='wrap'>
            {filteredRentals.map((car, index) => <WebCard car={car} key={index}/>)}
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base:'3', pre: '1', lg: '2'}} bg='cyan'><Center><Text align="left">Short description text Short description text Short description text Short description text Short description text Short description text Short description text Short description text Short description text Short description text </Text></Center></GridItem>
      <GridItem colSpan={{ base:'3', pre: '1', lg: '2'}} bg='green'><Center><Text align="left">Disclaimer, insurance, fine print Disclaimer, insurance, fine print Disclaimer, insurance, fine print Disclaimer, insurance, fine print Disclaimer, insurance, fine print Disclaimer, insurance, fine print Disclaimer, insurance, fine print </Text></Center></GridItem>
    </Grid>
    </Box>
</>
);}

export { WebRentalPage };