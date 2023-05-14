import React from 'react';
import { WebCallToAction } from './WebCallToAction'
import { WebBrands } from './WebBrands'
import { WebShowcase } from './WebShowcase'
import { WebRepairs } from './WebRepairs'
import { WebNewRentals } from './WebNewRentals'
import { WebNewsletter } from './WebNewsletter'

import { Box, Flex, Center, Grid, GridItem, Text, Heading, Spacer,
  FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Button, VStack, HStack } from '@chakra-ui/react'

// https://das-nano.com/

function Webdemo() {
    return (
    <>
      <WebCallToAction />
      <WebBrands />
      <WebShowcase />
      <WebRepairs />
    <Box background='linear-gradient(110deg, #f0f0f0 60%, #fdcd3b 60%)'>
      <WebNewRentals />
      <WebNewsletter />
    </Box>
    </>
    );
  }

  export { Webdemo };