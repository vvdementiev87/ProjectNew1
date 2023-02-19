import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { getKeys } from '@/utils/object/getKeys';
import { toastError } from '@/utils/toast-error';

import { getAdminUrl } from '../../../../config/url.config';
import { GenreService } from '../../../../services/genre.service';

import { IGenreEditInput } from './genre-edit.interface';

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
	const { push, query } = useRouter();
	const genreId = String(query.id);
	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => setValue(key, data[key]));
			},
			onError(error) {
				toastError(error, 'Get genre');
			},
			enabled: !!query.id,
		}
	);
	const { mutateAsync } = useMutation(
		'update genre',
		(data: IGenreEditInput) => GenreService.update(genreId, data),
		{
			onSuccess: () => {
				toastr.success('Update genre', 'Genre updated successfully');
				push(getAdminUrl('genres'));
			},

			onError(error) {
				toastError(error, 'Update genre');
			},
		}
	);
	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
		await mutateAsync(data);
	};
	return {
		onSubmit,
		isLoading,
	};
};
