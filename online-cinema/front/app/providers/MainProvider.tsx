import React, { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '@/components/layout/Layout';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

interface Props {
	children: ReactNode;
}

const MainProvider = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	);
};

export default MainProvider;
