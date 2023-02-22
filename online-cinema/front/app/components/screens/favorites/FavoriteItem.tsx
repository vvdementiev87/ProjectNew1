import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { getMovieUrl } from '../../../config/url.config';
import { IMovie } from '../../../shared/types/movie.types';
import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton';

import styles from './Favorites.module.scss';

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={movie._id} />
			<Link href={getMovieUrl(movie.slug)} legacyBehavior>
				<a className={styles.item}>
					<Image
						src={movie.bigPoster}
						alt={movie.title}
						fill
						draggable={false}
						priority
					/>
					<div className={styles.title}>{movie.title}</div>
				</a>
			</Link>
		</div>
	);
};

export default FavoriteItem;
