import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { faCalendarDays, faChartSimple, faScrewdriverWrench, faCoins } from '@fortawesome/free-solid-svg-icons'

import { WebNav } from '../webdemo/WebNav'
import { Dashboard } from './Dashboard';

const routes = [
  {
    path: "",
    name: "Main view",
    icon: faChartSimple,
    layout: "/dashboard",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: faScrewdriverWrench,
    layout: "/dashboard",
  },
  {
    path: "/bookings",
    name: "Bookings",
    icon: faCalendarDays,
    layout: "/dashboard",
  },
  {
    path: "/earnings",
    name: "Earnings",
    icon: faCoins,
    layout: "/dashboard",
  }
  ];

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

export  { routes, LinksDashboard };