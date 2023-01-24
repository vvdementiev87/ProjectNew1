import React, { FC } from 'react';

import Menu from '../Menu';
import SkeletonLoader from 'ui/SkeletonLoader';

import { usePopularGeners } from './usePopularGenres';

type Props = {};

const GenreMenu: FC = (props: Props) => {
	const { isLoading, data } = usePopularGeners();
	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	);
};

export default GenreMenu;
