import { IMovie } from '@/shared/types/movie.types';

export interface ISlide extends Pick<IMovie, 'title' | '_id' | 'bigPoster'> {
	subTitle: string;
	link: string;
}
