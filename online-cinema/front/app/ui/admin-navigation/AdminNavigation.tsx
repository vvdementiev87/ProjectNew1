import React from 'react';

import AdminNavItem from './AdminNavItem';
import styles from './AdminNavigation.module.scss';
import { navItems } from './admin-navigation.data';

type Props = {};

const AdminNavigation = (props: Props) => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map((item) => (
					<AdminNavItem key={item.link} item={item} />
				))}
			</ul>
		</nav>
	);
};

export default AdminNavigation;
