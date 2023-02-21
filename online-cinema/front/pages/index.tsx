import { Inter } from '@next/font/google';
import { GetStaticProps, NextPage } from 'next';

import Home from '@/components/screens/home/Home';
import { IHome } from '@/components/screens/home/home.interface';

import { ActorService } from '@/services/actor.service';
import { MovieService } from '@/services/movie.service';

import { getActorUrl, getMovieUrl } from '../app/config/url.config';
import { IGalleryItem } from '../app/ui/gallery/gallery.interface';
import { getGenresList } from '../app/utils/movie/getGenresList';
import { ISlide } from 'ui/slider/slider.interface';

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll();
		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			bigPoster: m.bigPoster,
			subTitle: getGenresList(m.genres),
			title: m.title,
		}));

		const { data: dataActors } = await ActorService.getAll();
		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}));
		const dataMovies = await MovieService.getMostPopularMovies();
		const trendingMovies = dataMovies.slice(0, 7).map((m) => ({
			name: m.title,
			posterPath: m.poster,
			link: getActorUrl(m.slug),
		}));

		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
		};
	} catch (error) {
		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
			},
		};
	}
};

export default HomePage;
