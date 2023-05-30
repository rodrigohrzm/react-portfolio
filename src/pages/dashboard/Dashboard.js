// https://github.com/creativetimofficial/purity-ui-dashboard/tree/main/src
// https://demos.creative-tim.com/purity-ui-dashboard/#/admin/dashboard
// it all works except the sidebar overlay
// nuevo componente que sea grid: |sb| 	content	  |
	//	navbar viene de antes, luego frame con sidebar y hueco, hueco rellenado por las vistas de la dashboard

// Chakra imports
import { ChakraProvider, Portal, useDisclosure } from '@chakra-ui/react';
//import Configurator from 'components/Configurator/Configurator';
// Layout components
//import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import DBsidebar from './elements/DBsidebar';
import React, { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
// Custom Chakra theme
//import theme from 'theme/theme.js';
import FixedPlugin from './elements/FixedPlugin';
// Custom components
import PanelMain from './elements/PanelMain';
import PanelContainer from './elements/PanelContainer';
import PanelContent from './elements/PanelContent';

import { DBcontent } from './DBcontent';
import { DBtables } from './DBtables';
import { DBprofile } from './DBprofile';
import { DBbilling } from './DBbilling';

export function Dashboard(props) {
	var routes = [
		{
		  path: "/overview",
		  name: "Dashboard",
		  component: <DBcontent/>,
		  layout: "/dashboard",
		},
		{
		  path: "/projects",
		  name: "Projects",
		  component: <DBtables/>,
		  layout: "/dashboard",
		},
		{
		  path: "/earnings",
		  name: "Earnings",
		  component: <DBbilling/>,
		  layout: "/dashboard",
		},
		{
		  name: "ACCOUNT PAGES",
		  category: "account",
		  state: "pageCollapse",
		  views: [
			{
			  path: "/bookings",
			  name: "Profile",
			  secondaryNavbar: true,
			  component: <DBprofile/>,
			  layout: "/dashboard",
			},
		  ],
		},
	  ];

	const { ...rest } = props;
	// states and functions
	const [ sidebarVariant, setSidebarVariant ] = useState('transparent');
	const [ fixed, setFixed ] = useState(false);
	const navigate = useNavigate();
	// functions for changing the states from components
	const getRoute = () => {
		return window.location.pathname !== '/admin/full-screen-maps';
	};
	const getActiveRoute = (routes) => {
		let activeRoute = 'Default Brand Text';
		for (let i = 0; i < routes.length; i++) {
			if (routes[i].collapse) {
				let collapseActiveRoute = getActiveRoute(routes[i].views);
				if (collapseActiveRoute !== activeRoute) {
					return collapseActiveRoute;
				}
			} else if (routes[i].category) {
				let categoryActiveRoute = getActiveRoute(routes[i].views);
				if (categoryActiveRoute !== activeRoute) {
					return categoryActiveRoute;
				}
			} else {
				if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
					return routes[i].name;
				}
			}
		}
		return activeRoute;
	};
	// This changes navbar state(fixed or not)
	const getActiveNavbar = (routes) => {
		let activeNavbar = false;
		for (let i = 0; i < routes.length; i++) {
			if (routes[i].category) {
				let categoryActiveNavbar = getActiveNavbar(routes[i].views);
				if (categoryActiveNavbar !== activeNavbar) {
					return categoryActiveNavbar;
				}
			} else {
				if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
					if (routes[i].secondaryNavbar) {
						return routes[i].secondaryNavbar;
					}
				}
			}
		}
		return activeNavbar;
	};
	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.collapse) {
				return getRoutes(prop.views);
			}
			if (prop.category === 'account') {
				return getRoutes(prop.views);
			}
			if (prop.layout === '/dashboard') {
				//return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
			} else {
				return null;
			}
		});
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	document.documentElement.dir = 'ltr';
	// Chakra Color Mode
	return (
		<>
			<DBsidebar
				routes={routes}
				logoText={'PURITY UI DASHBOARD'}
				display='none'
				sidebarVariant={sidebarVariant}
				{...rest}
			/>
			<PanelMain
				w={{
					base: '100%',
					xl: 'calc(100% - 275px)'
				}}>
				<Portal>
{/* 					<AdminNavbar
						onOpen={onOpen}
						logoText={'PURITY UI DASHBOARD'}
						brandText={getActiveRoute(routes)}
						secondary={getActiveNavbar(routes)}
						fixed={fixed}
						{...rest}
					/> */}
				</Portal>
				{getRoute() ? (
					<PanelContent>
						<PanelContainer>
							{/* <Routes> */}
								{/* {getRoutes(routes)} */}
								{/* <Navigate from='/admin' to='/admin/dashboard' /> */}
							{/* </Routes> */}
						</PanelContainer>
					</PanelContent>
				) : null}
{/* 				<Portal>
					<FixedPlugin secondary={getActiveNavbar(routes)} fixed={fixed} onOpen={onOpen} />
				</Portal> */}
{/* 				<Configurator
					secondary={getActiveNavbar(routes)}
					isOpen={isOpen}
					onClose={onClose}
					isChecked={fixed}
					onRoutes={(value) => {
						setFixed(value);
					}}
					onOpaque={() => setSidebarVariant('opaque')}
					onTransparent={() => setSidebarVariant('transparent')}
				/> */}
			</PanelMain>
		</>
	);
}