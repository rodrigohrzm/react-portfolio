import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { WebNav } from '../webdemo/WebNav'
import { DBcontent } from './DBcontent';
import { DBtables } from './DBtables';
import { DBprofile } from './DBprofile';
import { DBbilling } from './DBbilling';
import { Dashboard } from './Dashboard';
import DBsidebar from './elements/DBsidebar';


const LinksDashboard = () => (
  <>
  <Routes>
    <Route path="/dashboard/*" element={<WebNav/>}/>
  </Routes>

  <Routes>
      <Route path="/dashboard/*" element={<DBsidebar />}>
        <Route index element={<DBcontent />} />
        <Route path="projects" element={<DBtables />} />
        <Route path="bookings" element={<DBprofile />} />
        <Route path="earnings" element={<DBbilling />} />
      </Route>
  </Routes>
  </>
);

export  { LinksDashboard };