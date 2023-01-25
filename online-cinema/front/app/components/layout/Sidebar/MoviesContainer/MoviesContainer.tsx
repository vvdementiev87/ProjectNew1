import React from 'react';

import FavoriteMovies from './FavoriteMovies/FavoriteMovies';
import PopularMovies from './PopularMovies';

type Props = {};

const MoviesContainer = (props: Props) => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	);
};

export default MoviesContainer;
