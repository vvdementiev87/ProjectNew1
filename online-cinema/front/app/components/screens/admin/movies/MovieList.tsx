import React from 'react';

import Meta from '@/utils/meta/Meta';

import AdminNavigation from 'ui/admin-navigation/AdminNavigation';
import AdminHeader from 'ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from 'ui/admin-table/AdminTable/AdminTable';
import Heading from 'ui/heading/Heading';

import { useMovie } from './useMovie';

type Props = {};

const MovieList = (props: Props) => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useMovie();
	return (
		<Meta seo={{ title: 'Movies' }}>
			<AdminNavigation />
			<Heading title="Movies" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Genre', 'Rating']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default MovieList;
