import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { WebNav } from '../webdemo/WebNav'
import DBsidebar from './elements/DBsidebar';
import { DBcontent } from './DBcontent';
import { DBtables } from './DBtables';
import { DBprofile } from './DBprofile';
import { DBbilling } from './DBbilling';
import { Dashboard } from './Dashboard';

const TEMPsb = () => {
  return (
    <div style={{ width: '275px', backgroundColor: 'lightgray' }}>
      <ul>
        <li>
          <Link to="/earnings">Earnings</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/bookings">Bookings</Link>
        </li>
      </ul>
    </div>
  );
};

const Earnings = () => <h2>Earnings Component</h2>;
const Projects = () => <h2>Projects Component</h2>;
const Bookings = () => <h2>Bookings Component</h2>;

const TEMPsidebar = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <DBsidebar />
        <Routes>
          <Route path="/earnings" component={Earnings} />
          <Route path="/projects" component={Projects} />
          <Route path="/bookings" component={Bookings} />
        </Routes>
      </div>
    </Router>
  );
};

export {TEMPsidebar};
/*
im using react and react router, write an app that overlays a component on all routes, structured as a sidebar on the left 275px wide and a blank panel with a width of the remaining viewport. inside the panel is where the rest of the components (Earnings, Projects and Bookings) are loaded when the url changes

In this example:

    The Sidebar component represents the left sidebar with a width of 275px. It contains a list of links (Earnings, Projects, and Bookings) using the Link component from React Router.
    The Earnings, Projects, and Bookings components represent the content components that will be loaded inside the panel based on the URL changes.
    The App component sets up the routing using React Router. The Sidebar component and the Switch component are placed inside a parent div with display: flex to align them horizontally.
    Inside the Switch component, each Route is defined for the respective paths (/earnings, /projects, and /bookings) and their corresponding components (Earnings, Projects, and Bookings).
    When the URL changes, the appropriate content component will be rendered inside the panel, while the sidebar remains fixed on the left.

You can customize the components' content, styling, and routing paths according to your specific requirements.

*/