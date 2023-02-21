import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { IMovie } from '@/shared/types/movie.types';

import { GenreService } from '@/services/genre.service';
import { MovieService } from '@/services/movie.service';

import Error404 from '../404';
import { IGenre } from '../../app/shared/types/movie.types';
import Catalog from 'ui/catalog-movies/Catalog';

interface IGenrePage {
	movies: IMovie[];
	genre: IGenre | undefined;
}

const GenrePage: NextPage<IGenrePage> = ({ movies, genre }) => {
	return genre ? (
		<Catalog
			movies={movies || []}
			description={genre.description}
			title={genre.name}
		/>
	) : (
		<Error404 />
	);
};
export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getAll();
		const paths = genres.map((genre) => ({
			params: {
				slug: genre.slug,
			},
		}));
		return {
			paths,
			fallback: 'blocking',
		};
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenreService.getBySlug(String(params?.slug));

		const { data: movies } = await MovieService.getByGenres([genre._id]);

		return {
			props: {
				movies,
				genre,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default GenrePage;
