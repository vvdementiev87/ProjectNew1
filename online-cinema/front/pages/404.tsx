import * as React from 'react';

import Meta from '@/utils/meta/Meta';

import Heading from 'ui/heading/Heading';

export default function Error404() {
	return (
		<Meta seo={{ title: 'Page not found' }}>
			<Heading title="404 - Page Not Found" />
		</Meta>
	);
}
