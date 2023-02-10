import { FC } from 'react';
import { toastr } from 'react-redux-toastr';

import Meta from '@/utils/meta/Meta';

import Heading from 'ui/heading/Heading';

import { IHome } from './home.interface';

const Home: FC<IHome> = () => {
	return (
		<Meta
			seo={{
				title: 'Watch movies online',
				description:
					'Watch MovieApp movies and TV shows online or stream right to your browser.',
			}}
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
			<button onClick={() => toastr.success('Auth', 'You have successfully!')}>
				{' '}
				Show message s
			</button>
		</Meta>
	);
};

export default Home;
