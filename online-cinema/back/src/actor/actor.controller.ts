import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { IdValidationPipe } from 'src/pipes/id.validation.pipe';
import { ActorService } from './actor.service';
import { ActorDto } from './dto/actor.dto';

@Controller('actors')
export class ActorController {
	constructor(private readonly actorService: ActorService) {}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.actorService.bySlug(slug);
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.actorService.getAll(searchTerm);
	}

	// admin

	@Get(':id')
	@Auth('admin')
	async getGenre(@Param('id', IdValidationPipe) id: string) {
		return this.actorService.byId(id);
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	@Auth('admin')
	async createGenre() {
		return this.actorService.create();
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth('admin')
	async updateGenre(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: ActorDto,
	) {
		return this.actorService.update(id, dto);
	}

	@UsePipes(new ValidationPipe())
	@Delete(':id')
	@HttpCode(200)
	@Auth('admin')
	async deleteGenre(@Param('id', IdValidationPipe) id: string) {
		return this.actorService.delete(id);
	}
}
