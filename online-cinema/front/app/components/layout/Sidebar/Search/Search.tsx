import React from 'react';

import SearchField from 'ui/search-field/SearchField';

import styles from './Search.module.scss';
import SearchLine from './SearchLine/SearchLine';
import { useSearch } from './useSearch';

type Props = {};

const Search = (props: Props) => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch();
	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handlesearch={handleSearch} />
			{isSuccess && <SearchLine movies={data || []} />}
		</div>
	);
};

export default Search;
