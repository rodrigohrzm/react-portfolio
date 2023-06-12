import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { NavLink } from "react-router-dom"

import { DBcontent } from './DBcontent';
import { DBtables } from './DBtables';
import { DBcalendar } from './DBcalendar';
import { DBbilling } from './DBbilling';
import DBsidebar from "./elements/DBsidebar";

import { Box, Flex, Grid, GridItem, Text, Heading, FormLabel } from '@chakra-ui/react'

  // llevar los links a LinksDashboard e importarlos en el hueco
  // fechas de alquiler llevar al JSON y usar para los dos componentes
    // default dates y lista de retornos
  // responsiveness del calendario y el billing
  // quitar todos los px
  // quitar todos los imports vacios
  // quitar todos los archivos en desuso
  // https://github.com/creativetimofficial/purity-ui-dashboard/tree/main/src
  // https://demos.creative-tim.com/purity-ui-dashboard/#/admin/dashboard
  // https://nekocalc.com/px-to-rem-converter
  // https://spark-react.bootlab.io/calendar

const Dashboard = () => {

  return (

    <Box bg='#f0f0f0' >
    <Grid
      templateRows={'1fr 6rem'}
      templateColumns={{ base: 'repeat(1, 1fr)', pre: 'repeat(2, 1fr)', lg: '18rem repeat(5, 1fr)' }}

      autoFlow='row'
      columnGap='0'
    >
      <GridItem rowSpan={{ base:'1', lg: '2'}} colSpan={{ base:'3', lg: '1'}} bg='#011968' w={{ base:'', lg: '18rem'}}>
        <Flex paddingLeft='0.75rem' display={{ base:'none', lg: 'flex'}} justify={{base: 'center', lg: ''}} wrap='wrap'>
          <FormLabel padding='2rem'>
            <Heading paddingLeft='1.5rem' marginBottom="2rem" color='white' fontWeight='600' as='h4' size='sm'>NAVIGATION</Heading>
            <DBsidebar/>
          </FormLabel>
        </Flex>
        <Box marginX='auto' paddingTop='1rem' w={{base: '', pre: '40rem'}} align='center' justifyContent='center' display={{ base:'flex', lg: 'none'}} flexWrap='wrap'><DBsidebar/></Box>
      </GridItem>

      <GridItem autocolumns='true' rowSpan={{ base:'4', lg: '1'}} colSpan={{ base:'3', lg: '5'}}  pb='3rem'  paddingX='2rem' background='linear-gradient(110deg, #f0f0f0 60%, #fdcd3b 60%)'>
        <Box flexWrap='wrap'>
          <Routes>
            <Route index element={<DBcontent />} />
            <Route path="projects" element={<DBtables />} />
            <Route path="bookings" element={<DBcalendar />} />
            <Route path="billing" element={<DBbilling />} />
          </Routes>
        </Box>
      </GridItem>

      <GridItem colSpan={{ base:'3', lg: '5'}} bg='white' borderRadius='0'>
        <Text color='gray.400' fontSize='sm' padding='2rem' align="left">This is confidential information and should not be shared. If you have any questions, <NavLink style={{textDecoration: 'underline'}} as='u' to={"/react-portfolio"}>contact your administrator</NavLink>.</Text>
      </GridItem>
    </Grid>
    </Box>
  );
};

export { Dashboard };