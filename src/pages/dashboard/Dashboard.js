import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { NavLink, Outlet, useNavigate } from "react-router-dom"

import RentalInventory from '../../data/RentalInventory.json';

import IconBox from "./elements/IconBox";
import { DBcontent } from './DBcontent';
import { DBtables } from './DBtables';
import { DBprofile } from './DBprofile';
import { DBbilling } from './DBbilling';
import DBsidebarContent from "./elements/DBsidebarContent";

import { Box, Flex, Center, Grid, GridItem, Text, Heading, useColorModeValue, Button,
  FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, VStack } from '@chakra-ui/react'

  // cargar DBsidebar+DBsidebarContent dentro de la sidebar azul
  // llevar los links a LinksDashboard e importarlos en el hueco
  // https://github.com/creativetimofficial/purity-ui-dashboard/tree/main/src
  // https://demos.creative-tim.com/purity-ui-dashboard/#/admin/dashboard

const Dashboard = () => {

  const [selectedClass, setSelectedClass] = useState('');

  const classes = Array.from(new Set(RentalInventory.rentals.map(rental => rental.class)));

  const handleClassFilterChange = (event) => {
    setSelectedClass(event.target.value);
  };

  return (

    <Box bg='#f0f0f0' >
    <Grid
      templateRows={'1fr 6rem'}
      templateColumns={{ base: 'repeat(1, 1fr)', pre: 'repeat(2, 1fr)', lg: '18rem repeat(5, 1fr)' }}
      gap={4}
      autoFlow='row'
      columnGap='0'
    >
      <GridItem rowSpan={{ base:'1', lg: '2'}} colSpan={{ base:'3', lg: '1'}} bg='#011968' w={{ base:'', lg: '18rem'}}>
        <Flex marginLeft={{base: '0', lg: '1rem'}} justify={{base: 'center', lg: ''}} wrap='wrap'>
          <FormLabel padding='2rem'>
            <Heading paddingLeft='0.5rem' marginBottom="0.5em" color='white' fontWeight='600' as='h4' size='sm'>NAVIGATION</Heading>
            <Box w="260px" maxW="260px" ms={{sm: "16px"}} my={{sm: "16px"}} h="calc(100vh - 32px)" ps="20px" pe="20px" m='0px' borderRadius='0px'>
              <DBsidebarContent/>
            </Box>
          </FormLabel>
        </Flex>
      </GridItem>

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

      <GridItem colSpan={{ base:'3', lg: '5'}} bg='white' borderRadius='0'>
        <Text color='gray.400' fontSize='sm' padding='2rem' align="left">This is confidential information and should not be shared. If you have any questions, <NavLink style={{textDecoration: 'underline'}} as='u' to={"/react-portfolio"}>contact your administrator</NavLink>.</Text>
      </GridItem>
    </Grid>
    </Box>
  );
};

export { Dashboard };