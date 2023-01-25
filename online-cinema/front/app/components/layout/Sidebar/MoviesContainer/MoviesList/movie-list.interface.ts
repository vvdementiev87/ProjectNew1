import { IMovie } from '@/shared/types/movie.types';

export interface IMoivieList {
	title: string;
	link: string;
	movies: IMovie[];
}
