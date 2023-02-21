import React, { FC } from 'react';

import Meta from '@/utils/meta/Meta';

import { IMoviePage } from '../../../../pages/movie/[slug]';
import Banner from '../../../ui/banner/Banner';
import SubHeading from '../../../ui/heading/SubHeading';
import Gallery from 'ui/gallery/Gallery';

import Content from './Content/Content';

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	return (
		<Meta seo={{ title: movie.title, description: `Watch ${movie?.title}` }}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>
			<div className={'mt-12'}>
				<SubHeading title="Similar Movies" />
				<Gallery items={similarMovies} />
			</div>
		</Meta>
	);
};

export default SingleMovie;
