import React, { FC } from 'react';
import StarRating from 'react-star-rating-component';

import { useAuth } from '../../../../hooks/useAuth';
import AuthButton from 'ui/video-player/AuthPlaceholder/AuthButton';

import styles from './RateMovie.module.scss';
import { useRateMovie } from './useRateMovie';

interface IRateMovie {
	id: string;
	slug: string;
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
	const { user } = useAuth();
	const { handleClick, isSended, rating } = useRateMovie(id);

	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Rating improve recommendations</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Thank for reating!</div>
					) : (
						<StarRating
							name={'star-rating'}
							value={rating}
							onStarClick={handleClick}
							emptyStarColor={'#4f4f4f'}
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	);
};

export default RateMovie;
