import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { faCalendarDays, faChartSimple, faScrewdriverWrench, faCoins } from '@fortawesome/free-solid-svg-icons'

import { WebNav } from '../webdemo/WebNav'
import { Dashboard } from './Dashboard';

import { DBcontent } from './DBcontent';
import { DBtables } from './DBtables';
import { DBcalendar } from './DBcalendar';
import { DBbilling } from './DBbilling';

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

const routes = [
  {
    path: "",
    name: "Main view",
    icon: faChartSimple,
    layout: "/dashboard",
  },
  {
    path: "/billing",
    name: "Billing",
    icon: faCoins,
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
];

const DashboardPanel = () => {
<>
  <Routes>
    <Route index element={<DBcontent />} />
    <Route path="projects" element={<DBtables />} />
    <Route path="/projects" element={<DBcalendar />} />
    <Route path="/dashboard/projects" element={<DBbilling />} />
  </Routes>
</>
};

export  { routes, LinksDashboard, DashboardPanel };