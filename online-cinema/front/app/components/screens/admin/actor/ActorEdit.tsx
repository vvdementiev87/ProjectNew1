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

import { IActorEditInput } from './actor-edit.interface';
import { useActorEdit } from './useActorEdit';

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useActorEdit(setValue);

	return (
		<Meta seo={{ title: 'Edit actor' }}>
			<AdminNavigation />
			<Heading title="Edit actor" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.field}>
							<Field
								{...register('name', { required: 'Name is required' })}
								placeholder="Name"
								error={errors.name}
							/>
							<div>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('name')));
									}}
								/>
							</div>

							<Controller
								control={control}
								name="photo"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="actors"
										placeholder="Photo"
									/>
								)}
								rules={{
									required: 'Photo is required',
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

export default ActorEdit;
