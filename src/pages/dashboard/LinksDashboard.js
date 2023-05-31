import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { WebNav } from '../webdemo/WebNav'
import { Dashboard } from './Dashboard';


const LinksDashboard = () => (
  <>
  <Routes>
    <Route path="/dashboard/*" element={<WebNav/>}/>
  </Routes>

  <Routes>
      <Route path="/dashboard/*" element={<Dashboard />}/>
  </Routes>
  </>
);

export  { LinksDashboard };