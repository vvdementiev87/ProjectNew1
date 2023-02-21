import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Meta from '@/utils/meta/Meta';

import AuthFields from '../../auth/AuthFields';
import SkeletonLoader from 'ui/SkeletonLoader';
import AdminNavigation from 'ui/admin-navigation/AdminNavigation';
import Button from 'ui/form-elements/Button';
import Heading from 'ui/heading/Heading';

import { useUserEdit } from './useUserEdit';
import { IUserEditInput } from './user-edit.interface';

const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, control } =
		useForm<IUserEditInput>({
			mode: 'onChange',
		});

	const { isLoading, onSubmit } = useUserEdit(setValue);

	return (
		<Meta seo={{ title: 'Edit user' }}>
			<AdminNavigation />
			<Heading title="Edit user" />
			<form onSubmit={handleSubmit(onSubmit)} className={'admin-form'}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<AuthFields register={register} formState={formState} />
						<Controller
							control={control}
							name="isAdmin"
							render={({ field }) => (
								<button
									onClick={(e) => {
										e.preventDefault;
										field.onChange(!field.value);
									}}
									className={'text-link block mb-7'}
								>
									{field.value ? 'Make regular user' : 'Make administrator'}
								</button>
							)}
						/>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};

export default UserEdit;
