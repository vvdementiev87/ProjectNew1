import React, { FC } from 'react';

import { getActorsUrl, getGenresUrl } from '../../../../config/api.config';
import { IMovie } from '../../../../shared/types/movie.types';
import MaterialIcon from 'ui/MaterialIcon';

import styles from './Content.module.scss';
import ContentList from './ContentList/ContentList';

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<div className={styles.details}>
				<span>{movie.parameters.year} . </span>
				<span>{movie.parameters.country} . </span>
				<span>{movie.parameters.duration} min.</span>
			</div>
			<ContentList
				name={'Genres'}
				links={movie.genres.slice(0, 3).map((g) => ({
					_id: g._id,
					link: getGenresUrl(g.slug),
					title: g.name,
				}))}
			/>
			<ContentList
				name={'Actors'}
				links={movie.actors.slice(0, 3).map((a) => ({
					_id: a._id,
					link: getActorsUrl(a.slug),
					title: a.name,
				}))}
			/>
			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.toFixed(1)}</span>
			</div>
		</div>
	);
};

export default Content;