import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { WebNav } from './WebNav'
import { WebFooter } from './WebFooter'
import { Webdemo } from './Webdemo';
import { WebBooking } from './WebBooking';
import { WebRentalPage } from './WebRentalPage';
import { WebUserpanel } from './WebUserpanel';

const LinksWebdemo = () => (
  <>
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