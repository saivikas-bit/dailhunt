import React from 'react';
import DashboardContainer from '../components/Container';
import Sidenav from '../components/Sidenav';
import Topnav from '../components/Topnav';

function Dashboard() {
	return (
		<div style={{ display: 'flex' }}>
			<Sidenav />
			<Topnav />
			<DashboardContainer />
		</div>
	);
}

export default Dashboard;
