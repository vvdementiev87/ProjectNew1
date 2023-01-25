import React, { ChangeEvent } from 'react';

import MaterialIcon from 'ui/MaterialIcon';

import styles from './SearchField.module.scss';

type Props = {
	searchTerm: string;
	handlesearch: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchField = ({ searchTerm, handlesearch }: Props) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input placeholder="Search" value={searchTerm} onChange={handlesearch} />
		</div>
	);
};

export default SearchField;
