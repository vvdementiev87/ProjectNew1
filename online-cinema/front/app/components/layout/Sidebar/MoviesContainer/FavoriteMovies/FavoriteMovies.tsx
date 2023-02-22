import Link from 'next/link';
import React, { FC } from 'react';

import { useFavorites } from '@/components/screens/favorites/useFavorites';

import { useAuth } from '@/hooks/useAuth';

import MoivesList from '../MoviesList/MoivesList';
import SkeletonLoader from 'ui/SkeletonLoader';

import NotAuthFavorites from './NotAuthFavorites';

const FavoriteMovies: FC = () => {
	const { isLoading, favoriteMovies } = useFavorites();
	const { user } = useAuth();

	if (!user) return <NotAuthFavorites />;

	return isLoading ? (
		<div className={'mt-11'}>
			<SkeletonLoader className={'h-28 mb-4'} count={3} />
		</div>
	) : (
		<MoivesList
			title="Favorites"
			link="/favorites"
			movies={favoriteMovies?.slice(0, 3) || []}
		/>
	);
};

export default FavoriteMovies;
