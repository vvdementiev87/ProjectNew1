import React from 'react';

import Meta from '@/utils/meta/Meta';

import AdminNavigation from 'ui/admin-navigation/AdminNavigation';
import Heading from 'ui/heading/Heading';

import Statistics from './Statistics/Statistics';

type Props = {};

const Admin = (props: Props) => {
	return (
		<Meta seo={{ title: 'Admin panel' }}>
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statistics />
		</Meta>
	);
};

export default Admin;
