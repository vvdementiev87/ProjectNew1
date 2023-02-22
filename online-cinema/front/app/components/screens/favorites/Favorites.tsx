import React, { FC } from 'react';

import Meta from '@/utils/meta/Meta';

import SkeletonLoader from 'ui/SkeletonLoader';
import Heading from 'ui/heading/Heading';

import FavoriteItem from './FavoriteItem';
import styles from './Favorites.module.scss';
import { useFavorites } from './useFavorites';

const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites();
	return (
		<Meta seo={{ title: 'Favorites' }}>
			<Heading title={'Favorites'} />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoriteMovies?.map((movie) => (
						<FavoriteItem key={movie._id} movie={movie} />
					))
				)}
			</section>
		</Meta>
	);
};

export default Favorites;
