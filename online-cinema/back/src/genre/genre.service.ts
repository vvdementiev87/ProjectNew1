import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { MovieService } from 'src/movie/movie.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { ICollection } from './genre.interface';
import { GenreModel } from './genre.model';

@Injectable()
export class GenreService {
	constructor(
		@InjectModel(GenreModel) private readonly genreModel: ModelType<GenreModel>,
		private readonly movieService: MovieService,
	) {}

	async bySlug(slug: string) {
		const genre = await this.genreModel.findOne({ slug }).exec();
		if (!genre) throw new NotFoundException('Actor not found');
		return genre;
	}

	async getAll(searchTerm?: string) {
		let options = {};

		if (searchTerm) {
			options = {
				$or: [
					{
						name: new RegExp(searchTerm, 'i'),
					},
					{
						slug: new RegExp(searchTerm, 'i'),
					},
					{
						description: new RegExp(searchTerm, 'i'),
					},
				],
			};
		}
		return this.genreModel.find(options).sort({ createdAt: 'desc' }).exec();
	}

	async getCollections() {
		const genres = await this.getAll();
		const collections = await Promise.all(
			genres.map(async (genre) => {
				const movieByGenre = await this.movieService.byGenres([genre._id]);
				const poster = movieByGenre[0]?.bigPoster
					? movieByGenre[0].bigPoster
					: '';
				const result: ICollection = {
					_id: String(genre._id),
					image: poster,
					slug: genre.slug,
					title: genre.name,
				};
				return result;
			}),
		);
		return collections;
	}

	async byId(_id: string) {
		const genre = await this.genreModel.findById(_id);
		if (!genre) throw new NotFoundException('Genre not found');
		return genre;
	}

	async create() {
		const defaultvalue: CreateGenreDto = {
			name: '',
			slug: '',
			description: '',
			icon: '',
		};
		const genre = await this.genreModel.create(defaultvalue);
		return genre._id;
	}

	async update(_id: string, dto: CreateGenreDto) {
		const updateGenre = await this.genreModel
			.findByIdAndUpdate(_id, dto, {
				new: true,
			})
			.exec();
		if (!updateGenre) throw new NotFoundException('Genre not found.');
		return updateGenre;
	}

	async delete(id: string) {
		const deleteGenre = await this.genreModel.findByIdAndDelete(id).exec();
		if (!deleteGenre) throw new NotFoundException('Genre not found.');
		return deleteGenre;
	}
}
