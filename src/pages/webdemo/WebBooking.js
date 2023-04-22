import React from 'react';
import { WebTitle } from './WebTitle'
import { WebBookingForm } from './WebBookingForm'

function WebBooking() {
    return (
    <>
      <WebTitle pageName="Book an appointment" />
      <WebBookingForm />
    </>
    );
  }

  export { WebBooking };