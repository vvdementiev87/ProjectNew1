import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IMovie } from '@/shared/types/movie.types';

import { getMoviesUrl } from '@/config/api.config';

import styles from './SearchLine.module.scss';

type Props = { movies: IMovie[] };

const SearchLine = ({ movies }: Props) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link legacyBehavior key={movie._id} href={getMoviesUrl(movie.slug)}>
						<a>
							<Image
								src={movie.poster}
								width={50}
								height={50}
								alt={movie.title}
								style={{ objectFit: 'cover', objectPosition: 'top' }}
								draggable={false}
							/>
							<span>{movie.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Moves not found</div>
			)}
		</div>
	);
};

export default SearchLine;
