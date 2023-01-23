import { FC } from 'react';

import Logo from './Logo';
import MenuContainer from './MenuContainer/MenuContainer';
import styles from './Navigation.module.scss';

type Props = {};

const Navigation: FC = (props: Props) => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	);
};

export default Navigation;
