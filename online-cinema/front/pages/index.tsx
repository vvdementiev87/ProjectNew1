import Home from '@/components/screens/home/Home';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
	return (
		<Home/>
	);
}
