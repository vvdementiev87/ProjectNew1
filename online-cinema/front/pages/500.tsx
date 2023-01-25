import * as React from 'react';

import Meta from '@/utils/meta/Meta';

import Heading from 'ui/heading/Heading';

export default function Error404() {
	return (
		<Meta seo={{ title: 'Server error' }}>
			<Heading title="500 - Server Error" />
		</Meta>
	);
}
