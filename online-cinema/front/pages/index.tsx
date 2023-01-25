import { Inter } from '@next/font/google';

import Home from '@/components/screens/home/Home';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
	return <Home />;
}
