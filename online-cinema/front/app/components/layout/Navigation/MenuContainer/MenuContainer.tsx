import React from 'react';

import { API_URL } from '@/config/api.config';

import Menu from './Menu';
import GenreMenu from './genres/GenreMenu';
import { firstMenu, userMenu } from './menu.data';

type Props = {};

const MenuContainer = (props: Props) => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	);
};

export default MenuContainer;
