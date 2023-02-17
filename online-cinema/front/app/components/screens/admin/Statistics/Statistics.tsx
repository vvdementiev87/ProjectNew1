import React from 'react';

import styles from '../Admin.module.scss';

import CountUser from './CountUser';
import PopularMovie from './PopularMovie';

type Props = {};

const Statistics = (props: Props) => {
	return (
		<div className={styles.statistics}>
			<CountUser />
			<PopularMovie />
		</div>
	);
};

export default Statistics;
