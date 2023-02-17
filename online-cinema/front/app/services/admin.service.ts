import { axiosClassic } from 'api/interceptors';

import { getUsersUrl } from '../config/api.config';

export const AdminService = {
	async getCountUsers() {
		return axiosClassic.get(getUsersUrl('/count'));
	},
};
