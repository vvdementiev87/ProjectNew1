import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateGenreDto } from './dto/create-genre.dto';
import { GenreModel } from './genre.model';

@Injectable()
export class GenreService {
	constructor(
		@InjectModel(GenreModel) private readonly genreModel: ModelType<GenreModel>,
	) {}

	async bySlug(slug: string) {
		return this.genreModel.findOne({ slug }).exec();
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
		const collections = genres;
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
