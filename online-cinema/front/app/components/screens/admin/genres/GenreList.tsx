import React from 'react';

import Meta from '@/utils/meta/Meta';

import AdminNavigation from 'ui/admin-navigation/AdminNavigation';
import AdminHeader from 'ui/admin-table/AdminHeader/AdminHeader';
import AdminTable from 'ui/admin-table/AdminTable/AdminTable';
import Heading from 'ui/heading/Heading';

import { useGenre } from './useGenre';

type Props = {};

const GenreList = (props: Props) => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useGenre();
	return (
		<Meta seo={{ title: 'Genres' }}>
			<AdminNavigation />
			<Heading title="Genres" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Title', 'Slug']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default GenreList;
