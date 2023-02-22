import dynamic from 'next/dynamic';
import React, { FC } from 'react';

import Meta from '@/utils/meta/Meta';

import { IMoviePage } from '../../../../pages/movie/[slug]';
import Banner from '../../../ui/banner/Banner';
import SubHeading from '../../../ui/heading/SubHeading';
import Gallery from 'ui/gallery/Gallery';

import Content from './Content/Content';
import { useUpdateCountOpened } from './useUpdateCountOpened';

const DynamicPlayer = dynamic(() => import('ui/video-player/VideoPlayer'), {
	ssr: false,
});

const DynamicRating = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false,
});

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie.slug);

	return (
		<Meta seo={{ title: movie.title, description: `Watch ${movie?.title}` }}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>
			<DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl} />
			<div className={'mt-12'}>
				<SubHeading title="Similar Movies" />
				<Gallery items={similarMovies} />
			</div>
			<DynamicRating id={movie._id} slug={movie.slug} />
		</Meta>
	);
};

export default SingleMovie;
