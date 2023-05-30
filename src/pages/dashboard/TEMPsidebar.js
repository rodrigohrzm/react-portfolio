import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { NavLink, Outlet, useNavigate } from "react-router-dom"

import RentalInventory from '../../data/RentalInventory.json';

import DBsidebar from './elements/DBsidebar';
import { DBcontent } from './DBcontent';
import { DBtables } from './DBtables';
import { DBprofile } from './DBprofile';
import { DBbilling } from './DBbilling';

import { Box, Flex, Center, Grid, GridItem, Text, Heading,
  FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, VStack } from '@chakra-ui/react'

  // cargar DBsidebar+DBsidebarContent dentro de la sidebar azul
  // llevar los links a LinksDashboard e importarlos en el hueco

const TEMPsidebar = () => {

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(120);

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

    <Box bg='#f0f0f0' >
    <Grid
      templateRows={'1fr 10rem'}
      templateColumns={{ base: 'repeat(1, 1fr)', pre: 'repeat(2, 1fr)', lg: '18rem repeat(5, 1fr)' }}
      gap={4}
      autoFlow='row'
      columnGap='0'
    >
      <GridItem rowSpan={{ base:'1', lg: '2'}} colSpan={{ base:'3', lg: '1'}} bg='#011968' w={{ base:'', lg: '18rem'}}>
        <Flex marginLeft={{base: '0', lg: '1rem'}} justify={{base: 'center', lg: ''}} wrap='wrap'>
          <FormLabel w={{ base:'16rem', lg: '14rem'}} paddingY={{ base:'2rem', lg: '1rem'}} marginTop={{ base:'0', lg: '3rem'}}>
            <Heading paddingLeft='0.5rem' marginBottom="0.5em" color='white' fontWeight='600' as='h4' size='sm'>FILTER BY PRICE</Heading>
            <InputGroup borderColor='#a2ceff'>
              <InputLeftAddon fontWeight='600' color='#0078ff' backgroundColor='#d0e6ff' children='0' />
              <Input
                w='16rem'
                borderColor='#a2ceff'
                type='range'
                min="1"
                max="120"
                value={selectedPrice}
                onChange={handlePriceFilterChange}
              />
              <InputRightAddon width='3rem' fontWeight='600' color='#0078ff' backgroundColor='#d0e6ff'><Text marginLeft='-0.2rem'>{selectedPrice}</Text></InputRightAddon>
            </InputGroup>
          </FormLabel>
          <FormLabel padding='2rem'>
            <Heading paddingLeft='0.5rem' marginBottom="0.5em" color='white' fontWeight='600' as='h4' size='sm'>FILTER BY TYPE</Heading>
            <Select color='white' borderColor='#a2ceff' display={{ base:'', lg: 'none'}} w={{base: '16rem', lg: '14rem'}} value={selectedClass} onChange={handleClassFilterChange}>
              <option style={{ color: 'black' }} value="">All</option>
              {classes.map((classOption, index) => (<option style={{ color: 'black' }} key={index} value={classOption}>{classOption}</option>))}
            </Select>
            <VStack flexWrap='wrap' spacing='5' color='white' >
              <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"/dashboard"}>RENTALS</NavLink>
              <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"/dashboard/projects"}>ABOUT</NavLink>
              <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"/dashboard/bookings"}>CONTACT</NavLink>
              <NavLink style={({ isActive }) => { return isActive? { color: "gold", fontWeight: "bold" } : {} }} to={"/dashboard/earnings"}>DASHBOARD</NavLink>
            </VStack>
          </FormLabel>
        </Flex>
      </GridItem>
      ------------------------------------------------------
      <GridItem autocolumns='true' rowSpan={{ base:'4', lg: '1'}} colSpan={{ base:'3', lg: '5'}}>
        <Center flexWrap='wrap'>
          <Routes>
            <Route index element={<DBcontent />} />
            <Route path="projects" element={<DBtables />} />
            <Route path="bookings" element={<DBprofile />} />
            <Route path="earnings" element={<DBbilling />} />
          </Routes>
        </Center>
      </GridItem>
      ------------------------------------------------------
      <GridItem colSpan={{ base:'3', lg: '5'}} bg='white' borderRadius='0'>
        <Text color='gray.400' fontSize='sm' padding='2rem' align="left">* In some offices, a damage franchise is established for special and/or high risk categories regardless of the contracted coverage. A security deposit is required for rentals without contracted coverage. For more information on coverage, deposits and security, please refer to point B of our Terms and Conditions. Unlimited mileage in the city area and a maximum of 250km per day or 1750 km per reservation outside the city limits. Please refer to our terms and conditions.</Text>
      </GridItem>
    </Grid>
    </Box>
  );
};

export {TEMPsidebar};