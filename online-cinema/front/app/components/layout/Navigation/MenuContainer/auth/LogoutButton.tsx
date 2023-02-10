import React, { FC, MouseEvent } from 'react';

import { useActions } from '../../../../../hooks/useActions';
import MaterialIcon from '../../../../../ui/MaterialIcon';

type Props = {};

const LogoutButton: FC = (props: Props) => {
	const { logout } = useActions();
	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		logout();
	};

	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	);
};

export default LogoutButton;
