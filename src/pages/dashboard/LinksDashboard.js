import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { WebNav } from '../webdemo/WebNav'
/* import { DBprojects } from './DBprojects'; */
/* import { DBbookings } from './DBbookings'; */
/* import { DBearnings } from './DBearnings'; */
import { Dashboard } from '../dashboard/Dashboard';

const LinksDashboard = () => (
  <>
  <Routes>
    <Route path="/dashboard/*" element={<WebNav/>}>
        <Route index element={<Dashboard />} />
        {/* <Route path="projects" element={<DBprojects />} /> */}
        {/* <Route path="bookings" element={<DBbookings />} /> */}
        {/*<Route path="earnings" element={<DBearnings />} />*/}
    </Route>
  </Routes>
  </>
);

export  { LinksDashboard };