import Image from 'next/image';
import React, { FC } from 'react';

import styles from './Banner.module.scss';

interface IBanner {
	image: string;
	Detail?: FC | null;
}

const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				src={image}
				draggable={false}
				fill
				style={{ objectFit: 'cover' }}
				alt=""
				className={'image-like-bg object-top'}
				unoptimized
				priority
			/>
			{Detail && <Detail />}
		</div>
	);
};

export default Banner;
