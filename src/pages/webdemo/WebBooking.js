import React from 'react';
import { WebTitle } from './WebTitle'
import { WebBookingForm } from './WebBookingForm'
import { Center } from '@chakra-ui/react'

function WebBooking() {
    return (
    <>
      <WebTitle pageName="Book an appointment" />
      <Center background='linear-gradient(110deg, #f0f0f0 60%, #fdcd3b 60%)' >
        <WebBookingForm />
      </Center>
    </>
    );
  }

  export { WebBooking };