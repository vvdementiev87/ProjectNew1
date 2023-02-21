import { GetStaticProps, NextPage } from 'next';

import { MovieService } from '@/services/movie.service';

import { IMovie } from '../app/shared/types/movie.types';
import Catalog from 'ui/catalog-movies/Catalog';

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			description="Trending movies in excellent quality: legal, safe, without ads."
			title="Trending movies"
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies();

		return {
			props: {
				movies,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default TrendingPage;
