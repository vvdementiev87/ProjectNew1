import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { TelegramService } from 'src/telegram/telegram.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieModel } from './movie.model';

@Injectable()
export class MovieService {
	constructor(
		@InjectModel(MovieModel) private readonly movieModel: ModelType<MovieModel>,
	) /* private readonly telegramService: TelegramService, */
	{}

	async bySlug(slug: string) {
		const movie = await this.movieModel
			.findOne({ slug })
			.populate('actors genres')
			.exec();
		if (!movie) throw new NotFoundException('Movie not found');
		return movie;
	}

	async byActor(actorId: Types.ObjectId) {
		const movie = await this.movieModel.find({ actors: actorId }).exec();
		if (!movie) throw new NotFoundException('Movie not found');
		return movie;
	}

	async byGenres(genreIds: Types.ObjectId[]) {
		const movie = await this.movieModel
			.find({ genres: { $in: genreIds } })
			.exec();
		if (!movie) throw new NotFoundException('Movie not found');
		return movie;
	}

	async updateCountOpened(slug: string) {
		const updateMovie = await this.movieModel
			.findOneAndUpdate({ slug }, { $inc: { countOpened: 1 } }, { new: true })
			.exec();
		if (!updateMovie) throw new NotFoundException('Movie not found.');
		return updateMovie;
	}

	async getAll(searchTerm?: string) {
		let options = {};

		if (searchTerm) {
			options = {
				$or: [
					{
						title: new RegExp(searchTerm, 'i'),
					},
				],
			};
		}
		return this.movieModel
			.find(options)
			.sort({ createdAt: 'desc' })
			.populate('actors genres')
			.exec();
	}

	async byId(_id: string) {
		const movie = await this.movieModel.findById(_id);
		if (!movie) throw new NotFoundException('Movie not found');
		return movie;
	}

	async create() {
		const defaultvalue: CreateMovieDto = {
			bigPoster: '',
			actors: [],
			genres: [],
			poster: '',
			title: '',
			videoUrl: '',
			slug: '',
		};
		const movie = await this.movieModel.create(defaultvalue);
		return movie._id;
	}

	async update(_id: string, dto: CreateMovieDto) {
		const updateMovie = await this.movieModel
			.findByIdAndUpdate(_id, dto, {
				new: true,
			})
			.exec();
		if (!updateMovie) throw new NotFoundException('Genre not found.');
		return updateMovie;
	}

	async delete(id: string) {
		const deleteMovie = await this.movieModel.findByIdAndDelete(id).exec();
		if (!deleteMovie) throw new NotFoundException('Genre not found.');
		return deleteMovie;
	}

	async getMostPopular() {
		return await this.movieModel
			.find({ countOpened: { $gt: 0 } })
			.sort({ countOpened: -1 })
			.populate('actors genres')
			.exec();
	}

	async updateRating(id: Types.ObjectId, newRating: number) {
		return this.movieModel.findByIdAndUpdate(
			id,
			{
				rating: newRating,
			},
			{ new: true },
		);
	}

	/* async sendNotification(dto: CreateMovieDto) {
		if (process.env.NODE_ENV !== 'development')
			await this.telegramService.sendPhoto(dto.poster);
	} */
}
