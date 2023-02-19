import { axiosClassic } from 'api/interceptors';
import axios from 'api/interceptors';

import { IMovie } from '@/shared/types/movie.types';

import { getMoviesUrl } from '@/config/api.config';

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},
	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		);
		return movies;
	},
	async deleteMovie(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`));
	},
};
