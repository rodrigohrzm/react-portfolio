import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Service} from './Service';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

const LinksService = () => (
  <Routes>
    <Route path="/service" element={<Service/>} />
    <Route path="/service/booking" element={<BookingPage />} />
    <Route path="/service/confirmation" element={<ConfirmedBooking />} />
  </Routes>
);

export  { LinksService } ;