import React, { FC } from 'react';

import Menu from '../Menu';

import { usePopularGeners } from './usePopularGenres';

type Props = {};

const GenreMenu: FC = (props: Props) => {
	const { isLoading, data } = usePopularGeners();
	return isLoading ? (
		<div className="mx-11 mb-6">Loading ...</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	);
};

export default GenreMenu;
