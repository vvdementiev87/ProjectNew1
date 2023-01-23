import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logoImage from '@/assets/images/logo.png';

type Props = {};

const Logo = (props: Props) => {
	return (
		<Link legacyBehavior href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={logoImage}
					width={247}
					height={34}
					alt="online-cinema"
					draggable={false}
				/>
			</a>
		</Link>
	);
};

export default Logo;
