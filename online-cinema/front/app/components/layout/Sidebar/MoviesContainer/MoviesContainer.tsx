import dynamic from 'next/dynamic';
import React from 'react';

import PopularMovies from './PopularMovies';

type Props = {};

const DynamicFavorites = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{ ssr: false }
);

const MoviesContainer = (props: Props) => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavorites />
		</div>
	);
};

export default MoviesContainer;
