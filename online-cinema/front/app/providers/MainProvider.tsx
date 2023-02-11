import React, { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Layout from '@/components/layout/Layout';

import { store } from '@/store/store';

import AuthProvider from './AuthProvider/AuthProvider';
import HeadProvider from './HeadProvider/HeadProvider';
import { FC } from 'react';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});



const MainProvider:FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToastr />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;
