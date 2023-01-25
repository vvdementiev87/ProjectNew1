import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { IMovie } from '@/shared/types/movie.types';

import { getGenresListEach } from '@/utils/movie/getGenresList';

import { getGenreUrl, getMovieUrl } from '@/config/url.config';

import MaterialIcon from 'ui/MaterialIcon';

import styles from './MoviesList.module.scss';

type Props = {};

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)} legacyBehavior>
				<a>
					<Image
						width={65}
						height={97}
						alt={movie.title}
						src={movie.poster}
						draggable={false}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map((genre, idx) => (
							<Link
								key={genre._id}
								href={getGenreUrl(genre.slug)}
								legacyBehavior
							>
								<a>{getGenresListEach(idx, movie.genres.length, genre.name)}</a>
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	);
};

export default MovieItem;
