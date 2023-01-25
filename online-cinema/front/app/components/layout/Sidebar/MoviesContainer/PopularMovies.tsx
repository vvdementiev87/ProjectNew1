import React from 'react';
import { useQuery } from 'react-query';

import { MovieService } from '@/services/movie.service';

import SkeletonLoader from 'ui/SkeletonLoader';

import MoivesList from './MoviesList/MoivesList';

type Props = {};

const PopularMovies = (props: Props) => {
	const { isLoading, data: popularMovies } = useQuery(
		'Popular movies in sidebar',
		() => MovieService.getMostPopularMovies()
	);
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MoivesList
			title="Popular movies"
			link="/trending"
			movies={popularMovies || []}
		/>
	);
};

export default PopularMovies;
