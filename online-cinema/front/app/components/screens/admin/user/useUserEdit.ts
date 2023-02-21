import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { UserService } from '@/services/user.service';

import { toastError } from '@/utils/toast-error';

import { getAdminUrl } from '../../../../config/url.config';

import { IUserEditInput } from './user-edit.interface';

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { push, query } = useRouter();
	const userId = String(query.id);
	const { isLoading } = useQuery(
		['user', userId],
		() => UserService.getById(userId),
		{
			onSuccess: ({ data }) => {
				setValue('email', data.email);
				setValue('isAdmin', data.isAdmin);
			},
			onError(error) {
				toastError(error, 'Get user');
			},
			enabled: !!query.id,
		}
	);
	const { mutateAsync } = useMutation(
		'update user',
		(data: IUserEditInput) => UserService.update(userId, data),
		{
			onSuccess: () => {
				toastr.success('Update user', 'User updated successfully');
				push(getAdminUrl('users'));
			},

			onError(error) {
				toastError(error, 'Update user');
			},
		}
	);
	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data);
	};
	return {
		onSubmit,
		isLoading,
	};
};
