import React from 'react';

import Meta from '@/utils/meta/Meta';

import AdminNavigation from 'ui/admin-navigation/AdminNavigation';
import AdminHeader from 'ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from 'ui/admin-table/AdminTable/AdminTable';
import Heading from 'ui/heading/Heading';

import { useActor } from './useActor';

type Props = {};

const ActorList = (props: Props) => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useActor();
	return (
		<Meta seo={{ title: 'Actors' }}>
			<AdminNavigation />
			<Heading title="Actors" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Count movies']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default ActorList;
