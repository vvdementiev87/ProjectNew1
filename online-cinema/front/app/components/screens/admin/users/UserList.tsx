import React from 'react';

import Meta from '@/utils/meta/Meta';

import AdminNavigation from 'ui/admin-navigation/AdminNavigation';
import AdminHeader from 'ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from 'ui/admin-table/AdminTable/AdminTable';
import Heading from 'ui/heading/Heading';

import { useUsers } from './useUsers';

type Props = {};

const UserList = (props: Props) => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers();
	return (
		<Meta seo={{ title: 'Users' }}>
			<AdminNavigation />
			<Heading title="Users" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Email', 'Date register']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default UserList;
