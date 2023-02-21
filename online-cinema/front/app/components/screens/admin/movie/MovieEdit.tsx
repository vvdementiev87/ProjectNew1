import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Meta from '@/utils/meta/Meta';
import generateSlug from '@/utils/string/generateSlug';

import formStyles from '../../../../ui/form-elements/admin-form.module.scss';
import SkeletonLoader from 'ui/SkeletonLoader';
import AdminNavigation from 'ui/admin-navigation/AdminNavigation';
import Button from 'ui/form-elements/Button';
import Field from 'ui/form-elements/Field';
import SlugField from 'ui/form-elements/SlugField/SlugField';
import UploadField from 'ui/form-elements/UploadField/UploadField';
import Heading from 'ui/heading/Heading';

import { IMovieEditInput } from './movie-edit.interface';
import { useAdminActor } from './useAdminActor';
import { useAdminGenre } from './useAdminGenre';
import { useMovieEdit } from './useMovieEdit';

const DynamicSelect = dynamic(() => import('ui/select/Select'), { ssr: false });

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useMovieEdit(setValue);

	const { isLoading: isActorsLoading, data: actors } = useAdminActor();
	const { isLoading: isGenresLoading, data: genres } = useAdminGenre();

	return (
		<Meta seo={{ title: 'Edit movie' }}>
			<AdminNavigation />
			<Heading title="Edit movie" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.field}>
							<Field
								{...register('title', { required: 'Title is required' })}
								placeholder="Title"
								error={errors.title}
							/>
							<div>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('title')));
									}}
								/>
							</div>
							<Field
								{...register('parameters.country', {
									required: 'Country is required',
								})}
								placeholder="Country"
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.duration', {
									required: 'Duration is required',
								})}
								placeholder="Duration (min.)"
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.year', {
									required: 'Year is required',
								})}
								placeholder="Year"
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>
							<Controller
								control={control}
								name="genres"
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isLoading={isGenresLoading}
										isMulti
										placeholder="Genres"
										error={error}
									/>
								)}
								rules={{
									required: 'Genres is required',
								}}
							/>
							<Controller
								control={control}
								name="actors"
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={actors || []}
										isLoading={isActorsLoading}
										isMulti
										placeholder="Actors"
										error={error}
									/>
								)}
								rules={{
									required: 'Actors is required',
								}}
							/>
							<Controller
								control={control}
								name="poster"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="movies"
										placeholder="Poster"
									/>
								)}
								rules={{
									required: 'Poster is required',
								}}
							/>
							<Controller
								control={control}
								name="bigPoster"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="movies"
										placeholder="Big poster"
									/>
								)}
								rules={{
									required: 'Big poster is required',
								}}
							/>
							<Controller
								control={control}
								name="videoUrl"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="movies"
										placeholder="Video"
										style={{ marginTop: -25 }}
										isNoImage
									/>
								)}
								rules={{
									required: 'Video is required',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};

export default MovieEdit;
