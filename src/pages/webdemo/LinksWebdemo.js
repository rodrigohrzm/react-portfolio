import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import { Webdemo1 } from './Webdemo1';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

import { WebNav } from './WebNav'
import { WebFooter } from './WebFooter'
import { Webdemo } from './Webdemo';
import { WebBooking } from './WebBooking';
import { WebRentalPage } from './WebRentalPage';
import { WebUserpanel } from './WebUserpanel';

import Footer from './Footer';

const LinksWebdemo = () => (
  <>
  <Routes>
    <Route path="/webdemo1/*" element={<Nav />}>
        <Route index element={<Webdemo1/>} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="confirmation" element={<ConfirmedBooking />} />
    </Route>
  </Routes>

  <Routes>
    <Route path="/webdemo1/*" element={<Footer />} />
  </Routes>


  <Routes>
    <Route path="/webdemo/*" element={<WebNav/>}>
        <Route index element={<Webdemo />} />
        <Route path="booking" element={<WebBooking />} />
        <Route path="renting" element={<WebRentalPage />} />
        <Route path="userpanel" element={<WebUserpanel />} />
    </Route>
  </Routes>

  <Routes>
    <Route path="/webdemo/*" element={<WebFooter/>} />
  </Routes>
  </>
);

export  { LinksWebdemo } ;