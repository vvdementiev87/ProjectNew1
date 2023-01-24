import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import logoImage from '@/assets/images/logo.svg';

import { siteName, titleMerge } from '@/config/seo.config';

import { onlyText } from '../string/clearText';

import { ISeo } from './meta.interface';

interface Props {
	seo: ISeo;
	children: ReactNode;
}
const Meta = ({ seo, children }: Props) => {
	const { asPath } = useRouter();
	const currentUrl = `${process.env.APP_URL}${asPath}`;
	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(seo.title)}</title>
				{seo.description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={onlyText(seo.description, 152)}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content="en" />
						<meta property="og:title" content={titleMerge(seo.title)} />
						<meta property="og:url" content={currentUrl} />
						<meta property="og:image" content={seo.image || logoImage} />
						<meta property="og:site_name" content={siteName} />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;
