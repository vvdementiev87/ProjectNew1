import Link from 'next/link';
import React, { FC } from 'react';

import MovieItem from './MovieItem';
import styles from './MoviesList.module.scss';
import { IMoivieList } from './movie-list.interface';

const MoivesList: FC<IMoivieList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link} legacyBehavior>
				<a className={styles.button}>See more</a>
			</Link>
		</div>
	);
};

export default MoivesList;
