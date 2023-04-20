import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import { Webdemo1 } from './Webdemo1';
import { Webdemo } from './Webdemo';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

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
    <Route path="/webdemo/*"> {/*element={<WebNav/>}*/}
        <Route index element={<Webdemo />} />
    </Route>
  </Routes>

  <Routes>
    <Route path="/webdemo/*" /> {/*element={<WebFooter/>}*/}
  </Routes>
  </>
);

export  { LinksWebdemo } ;