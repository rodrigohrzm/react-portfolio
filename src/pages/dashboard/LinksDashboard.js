import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { WebNav } from '../webdemo/WebNav'
import { DBtables } from './DBtables';
import { DBprofile } from './DBprofile';
import { DBbilling } from './DBbilling';
import { Dashboard } from './Dashboard';

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    //rtlName: "لوحة القيادة",
    //icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    //rtlName: "لوحة القيادة",
    //icon: <StatsIcon color="inherit" />,
    component: DBtables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    //rtlName: "لوحة القيادة",
    //icon: <CreditIcon color="inherit" />,
    component: DBbilling,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    //rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        //rtlName: "لوحة القيادة",
        //icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: DBprofile,
        layout: "/admin",
      },
    ],
  },
];
export { routes };

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