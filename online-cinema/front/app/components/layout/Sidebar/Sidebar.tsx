import { FC } from 'react';

import MoviesContainer from './MoviesContainer/MoviesContainer';
import Search from './Search/Search';
import styles from './Sidebar.module.scss';

type Props = {};

const Sidebar: FC = (props: Props) => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	);
};

export default Sidebar;
