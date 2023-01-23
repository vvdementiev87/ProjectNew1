import type { AppProps } from 'next/app';
import MainProvider from 'providers/MainProvider';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	);
}
